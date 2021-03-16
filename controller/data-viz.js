import mongo from "mongodb"
import {initDatabase} from "./data-utils"


export async function queryAllResults(){

  let client = await initDatabase()
  let db = await client.db()

  let allResult = await db.collection("single_votes").aggregate(

    [
      {
        '$group': {
          '_id': '$discussion_id', 
          'section1Sum': {
            '$avg': '$section_1'
          }, 
          'section2Sum': {
            '$avg': '$section_2'
          }, 
          'section3Sum': {
            '$avg': '$section_3'
          }, 
          'section4Sum': {
            '$avg': '$section_4'
          }, 
          'section5Sum': {
            '$avg': '$section_5'
          }, 
          'section6Sum': {
            '$avg': '$section_6'
          }, 
          'totalVotes': {
            '$sum': 1
          }
        }
      }, {
        '$addFields': {
          'totalAverage': {
            '$avg': [
              '$section1Sum', '$section2Sum', '$section3Sum', '$section4Sum', '$section5Sum', '$section6Sum'
            ]
          }
        }
      }
    ]
  ).toArray()

  return allResult
}


export async function queryResults(discussion_id){

  let client = await initDatabase()
  let db = await client.db()

  let result = await db.collection("single_votes").aggregate(
    [
      {
        '$group': {
          '_id': {
            '$cond': [
              {
                '$eq': [
                  '$discussion_id', discussion_id
                ]
              }, discussion_id, 'null'
            ]
          }, 
          'section1Sum': {
            '$avg': '$section_1'
          }, 
          'section2Sum': {
            '$avg': '$section_2'
          }, 
          'section3Sum': {
            '$avg': '$section_3'
          }, 
          'section4Sum': {
            '$avg': '$section_4'
          }, 
          'section5Sum': {
            '$avg': '$section_5'
          }, 
          'section6Sum': {
            '$avg': '$section_6'
          }, 
          'totalVotes': {
            '$sum': 1
          }
        }
      }, {
        '$addFields': {
          'totalAverage': {
            '$avg': [
              '$section1Sum', '$section2Sum', '$section3Sum', '$section4Sum', '$section5Sum', '$section6Sum'
            ]
          }
        }
      }
    ]
  ).toArray()

  return result[0]


}