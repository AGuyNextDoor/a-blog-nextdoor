// const data = require("./fake_data.json")

function extractValues(discussion){

  const finalValues = {
    section1_number_of_votes : 0,
    section1_all_scores: [],
    section1_final_score: 0,
    section1_final_mean: 0,
    section2_number_of_votes : 0,
    section2_all_scores: [],
    section2_final_score: 0,
    section2_final_mean: 0,
    section3_number_of_votes : 0,
    section3_all_scores: [],
    section3_final_score: 0,
    section3_final_mean: 0,
    section4_number_of_votes : 0,
    section4_all_scores: [],
    section4_final_score: 0,
    section4_final_mean: 0,
    section5_number_of_votes : 0,
    section5_all_scores: [],
    section5_final_score: 0,
    section5_final_mean: 0,
    section6_number_of_votes : 0,
    section6_all_scores: [],
    section6_final_score: 0,
    section6_final_mean: 0,
    sections_final_mean: [],
    global_number_of_votes: 0,
    global_all_final_score: 0
  }

  let totalVotes = 0;
  for (let index=0; index<discussion.length; index++){
    let vote = discussion[index]

    for(let i = 1; i <= 6; i++){
      let section_all = `section${i}_all_scores`
      let section_final = `section${i}_final_score`
      let section_mean = `section${i}_final_mean`
      let section_count = `section${i}_number_of_votes`
      if(vote.section === String(i)){
        finalValues[section_all] = [...finalValues[section_all], vote.def_hum*(3)]
        finalValues[section_all] = [...finalValues[section_all], vote.may_hum*(1)]
        finalValues[section_all] = [...finalValues[section_all], vote.cant_tell*(0)]
        finalValues[section_all] = [...finalValues[section_all], vote.may_ai*(-1)]
        finalValues[section_all] = [...finalValues[section_all], vote.def_ai*(-3)]
        
        finalValues[section_count] += vote.def_hum + vote.may_hum + vote.cant_tell + vote.may_ai + vote.def_ai
        totalVotes = totalVotes + finalValues[section_count]
        
        finalValues[section_final] = finalValues[section_all].reduce((a,b) => a+b, 0)
        finalValues[section_mean] = finalValues[section_final]/finalValues[section_count]
        finalValues.sections_final_mean = [...finalValues.sections_final_mean, finalValues[section_mean]]
        finalValues.global_all_final_score += finalValues[section_final]
      }
    }
    finalValues.global_number_of_votes = totalVotes
    finalValues.global_all_final_mean = finalValues.global_all_final_score/totalVotes
  }

  return finalValues

}

function separateDiscussions(data){
  const discussions = []

  let last_id = data[0].discussion_id
  let j = 0;
  discussions[j] = [data[0]]

  for(let i = 1; i < data.length; i++){
    if(data[i].discussion_id !== last_id){
      last_id = data[i].discussion_id
      j += 1
      discussions[j] = [data[i]]
    } else {
      discussions[j] = [...discussions[j],data[i]]
    }
  }

  return discussions;
}

export async function extractData(data){

  // let result1 = separateDiscussions(data)
  
  return extractValues(data)
}


export function calcUserScore(votes, results){
  let filteredVotes = []
  for(const result of results){
    filteredVotes = [...filteredVotes, [votes.filter(val => val.discussion_id === result[1])[0], result[0], result[2]]]
  }

  let substract_value = 3
  let worst_result = 36
  // if()
  
  filteredVotes = filteredVotes.map(val => {
    let result = {}
    let total_value = 0
    if(val[1]){
      substract_value = -3
      worst_result = -36
    }
    total_value += val[0]["section_1"] - substract_value
    total_value += val[0]["section_2"] - substract_value
    total_value += val[0]["section_3"] - substract_value
    total_value += val[0]["section_4"] - substract_value
    total_value += val[0]["section_5"] - substract_value
    total_value += val[0]["section_6"] - substract_value

    result.vote = val[0]
    result.ai = val[1]
    result.total_value = Math.abs(total_value)
    result.name = val[2]

    return result
  })
  return filteredVotes  
}

export function calcAllScore(votes, results){

  let discussionsSummary = results.map(result => {

    let final_result = {
      AI: result[0],
      discussion_id: result[1],
      name: result[2],
      vote_list: []
    }

    
    votes.forEach(vote => {
      if(final_result.discussion_id === vote.discussion_id){
        final_result.vote_list.push(vote)
      }
    })

    final_result["number_of_votes"] = final_result.vote_list.length

    final_result["score_list"] = final_result.vote_list.map((vote) => {
      let result = {}
      let total_value = 0
      let substract_value = 3
      let worst_result = 36

      if(final_result.AI){
        substract_value = -3
        worst_result = -36
      }
      total_value += vote["section_1"] - substract_value
      total_value += vote["section_2"] - substract_value
      total_value += vote["section_3"] - substract_value
      total_value += vote["section_4"] - substract_value
      total_value += vote["section_5"] - substract_value
      total_value += vote["section_6"] - substract_value

      total_value = Math.abs(total_value)

      return total_value
    })

    final_result["average_score"] = final_result["score_list"].reduce( ( p, c ) => p + c, 0 ) / final_result["score_list"].length

    return final_result
  })

  const userList = [... new Set(votes.map(vote => vote.user))]

  let filteredVotes = votes.filter(vote => {
    let flag = false;

    results.forEach(result => {
      if(vote.discussion_id === result[1]){
        flag = true
      }
    })

    return flag;
  })

  let userSummary = userList.map(user => {

    let final_result = {
      user: user,
      vote_list: []
    }

    
    filteredVotes.forEach(vote => {
      if(final_result.user === vote.user){
        final_result.vote_list.push(vote)
      }
    })
0
    final_result["number_of_votes"] = final_result.vote_list.length

    final_result["score_list"] = final_result.vote_list.map((vote) => {
      let result = {}
      let total_value = 0
      let substract_value = 3
      let worst_result = 36

      if(final_result.AI){
        substract_value = -3
        worst_result = -36
      }
      total_value += vote["section_1"] - substract_value
      total_value += vote["section_2"] - substract_value
      total_value += vote["section_3"] - substract_value
      total_value += vote["section_4"] - substract_value
      total_value += vote["section_5"] - substract_value
      total_value += vote["section_6"] - substract_value

      total_value = Math.abs(total_value)

      return total_value
    })

    final_result["average_score"] = final_result["score_list"].reduce( ( p, c ) => p + c, 0 ) / final_result["score_list"].length

    return final_result
  })

  return {discussionsSummary, userSummary}  
}
