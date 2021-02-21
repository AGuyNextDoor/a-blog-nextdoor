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
        finalValues[section_all] = [...finalValues[section_all], vote.def_hum*(-3)]
        finalValues[section_all] = [...finalValues[section_all], vote.may_hum*(-1)]
        finalValues[section_all] = [...finalValues[section_all], vote.cant_tell*(0)]
        finalValues[section_all] = [...finalValues[section_all], vote.may_ai*(1)]
        finalValues[section_all] = [...finalValues[section_all], vote.def_ai*(3)]
        
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


