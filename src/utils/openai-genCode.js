import 'dotenv/config';
import OpenAI from "openai";
import fs from 'fs/promises';

const openai = new OpenAI({
    apiKey: process.env.API_KEY
});


async function main() {
    const tcFile = await fs.readFile('src/utils/data/example.txt', 'utf-8');
    const rulesFile = await fs.readFile('src/utils/rules/genCodeRules.txt', 'utf-8');
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          { 
              role: "system", 
              content: "You are a Software Quality Engineer with 15 years' experience in automated test creation using Node.js, Javascript and TestCafe." 
          },
          {
              role: "user", 
              content: "Create an automated test with the following steps: " + tcFile + rulesFile
          }
        ],
        model: "gpt-4o",
      });
      const cResponse = completion.choices[0].message.content;


      fs.writeFile('src/utils/data/automatedCode.txt', cResponse, (err) => {
        if (err) {
          console.error('An error ocurred creating the file:', err);
        } else {
          console.log('File "automatedCode.txt" saved sucessfully.');
        }
      });
  
    } catch (error) {
      console.error("An Error ocurred:", error.message);
    }
  }
  
  main();