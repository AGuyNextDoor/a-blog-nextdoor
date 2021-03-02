const fs = require('fs');

let data = {
   id:"65333638-3636-6634-2d62-3437372d3431",
   candidate:"Bastien Luneteau",
   judge:"Martin",
   date:"2021-02-02",
   AI:"false",
   AI_details:"NULL",
   intro:[
      {
         Judge:"Hello, my name is Martin"
      },
      {
         Candidate:"Hi Martin ! How are you ?"
      },
      {
         Judge:"I'm good thanks! And you?"
      },
      {
         Candidate:"Fine ! Where do you come from ?"
      },
      {
         Judge:"From France. And you ?"
      },
      {
         Candidate:"France too! From which region?"
      },
      {
         Judge:"North.\nCould you tell me a joke?"
      },
      {
         Candidate:"North is a very beautiful region, I went near Lille last year for a Tennis competition, the Davis Cup !\nIt's complicated for me to tell a joke in command ! I prefer to joke in a certain context 🙂\nYou know a lot of jokes ?"
      },
      {
         Judge:"Not much either I'm not really good either..\nCan you tell me your best memory?"
      },
      {
         Candidate:"It's a really intimate question, we don't know each other very well yet ^^ Memory about what ?"
      },
      {
         Judge:"Any memory that makes you smile!"
      },
      {
         Candidate:"I think that this is the time when the Tour de France passed in my town on my birthday ! I was 6"
      },
      {
         Candidate:"Do you like the Tour de France ?"
      },
      {
         Judge:"Sounds nice. I haven't watched it much but my grandpa is fond of it!\nDid you know I have blue hair?"
      },
      {
         Candidate:"You're saying it's a sport for old people ? 😮\nNo I didn't know ! For a long time?\nLong or short hair ?"
      },
      {
         Judge:"Haha not at all. Long blue hair since this summer!\nBy the way do you know who is the king of france?"
      },
      {
         Candidate:"Haha nice ! Why this change about your hair ?\nIt's Emmanuel Macron the First"
      }
   ],
   objElemPhy:[
      {
         Judge:"Nice one ☝️\nWhat happens if you break a glass bottle of water?"
      },
      {
         Candidate:"It depends. What is the temperature of the water ?"
      },
      {
         Judge:"Room temperature"
      },
      {
         Candidate:"Ok. So if you break the bottle, then you have to clean the floor"
      },
      {
         Judge:"Does a ball naturaly fall up or down a hill?"
      },
      {
         Candidate:"It depends where is the hill and where you drop the ball"
      },
      {
         Judge:"Can you tell me about 3 objects around you?"
      },
      {
         Candidate:"Beer, water and pen"
      }
   ],
   agentGoalDir:[
      {
         Judge:"What am I?"
      },
      {
         Candidate:"I sometimes ask myself the same question"
      },
      {
         Judge:"Why did the chicken cross the road?"
      },
      {
         Candidate:"Is this the beginning of a joke?"
      },
      {
         Judge:"Totally !\nWhy are we here today?"
      },
      {
         Candidate:"So what's the punchline of the joke?\nI sometimes ask myself the same question\nSo what's the punchline of the joke?"
      },
      {
         Judge:"To get to the other side."
      },
      {
         Candidate:"To get to the other side.\nGood one"
      }
   ],
   natuNum:[
      {
         Judge:"Do you know the result of 39023 + 328?"
      },
      {
         Candidate:"If I take out my calculator, yes.\n39351? It's easy by the way"
      },
      {
         Judge:"There is Three cookie in a jar, I eat two of them, how many are left?"
      },
      {
         Candidate:"Only one for me, it's not fair."
      },
      {
         Judge:"Which number would best represent the absence of value?"
      },
      {
         Candidate:"Zero\nThis can also be represented by the heart of my ex."
      }
   ],
   elemGeomTopo:[
      {
         Judge:"If you took a complete turn on yourself, where would you be facing?"
      },
      {
         Candidate:"My computer."
      },
      {
         Judge:"What is the shape of the earth?"
      },
      {
         Candidate:"Surely not flat"
      },
      {
         Judge:"Do you a simple property of a square?"
      },
      {
         Candidate:"4 equal angles"
      },
      {
         Judge:"Which is further from us, the moon or the sun?"
      },
      {
         Candidate:"The heart of my ex again."
      }
   ],
   abilLearnSTM:[
      {
         Judge:"Can you remember What is my name?"
      },
      {
         Candidate:"Of course Martin. Do you know mine ?"
      },
      {
         Judge:"Nope I haven't asked it it's pretty rude..\nDo you remember the color of my hair?"
      },
      {
         Candidate:"😞\nLong blue hair !\nDo you know mine ?\nHaha"
      },
      {
         Judge:"That's harsh\nHow long have we been talking?"
      },
      {
         Candidate:"20 minutes ?\nIt's a good moment, i don't look at my watch"
      },
      {
         Judge:"Can you repeat your last message?"
      },
      {
         Candidate:"It's a good moment, i don't look at my watch"
      },
      {
         Judge:"I enjoy it very much as well !"
      },
      {
         Candidate:"It's a good moment, i don't look at my watch"
      },
      {
         Judge:"Thank you for your time 🙂"
      },
      {
         Candidate:"You're welcome !"
      }
   ]
}

let jsonStr = JSON.stringify(data);

fs.writeFile('js_data.json', jsonStr, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});