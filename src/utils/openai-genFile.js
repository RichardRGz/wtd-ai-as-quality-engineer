import 'dotenv/config';
import OpenAI from "openai";
import Fs from 'fs';
import fs from 'fs/promises';

const openai = new OpenAI({
    apiKey: process.env.API_KEY
});
// Validates that if a folder doesn't exists will create
if (!Fs.existsSync('src/pages') || !Fs.existsSync('src/tests')) {
  if(!Fs.existsSync('src/pages') && !Fs.existsSync('src/tests')){ // If both doesn't exists
    Fs.mkdirSync('src/pages');
    Fs.mkdirSync('src/tests');
  } else if(!Fs.existsSync('src/pages')){ // If "pages" doesn't exists
    Fs.mkdirSync('src/pages');
  } else if(!Fs.existsSync('src/tests')){ // If "tests" doesn't exists
    Fs.mkdirSync('src/tests');
  }
}

async function main() {
    const filter = await fs.readFile("src/utils/rules/genFileRules.txt", 'utf-8');
    const mainFile = await fs.readFile('src/utils/data/automatedCode.txt', 'utf-8');
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          { 
              role: "system", 
              content: "You are a Software Quality Engineer with 12 years' experience in automated test creation using Node.js, Javascript and TestCafe." 
          },
          {
              role: "user", 
              content: filter + mainFile
          }
        ],
        model: "gpt-4o",
      });
      const responses = completion.choices[0].message.content.split('```javascript').slice(1).map(section => section.split('```')[0].trim());
      await fs.writeFile('src/pages/LoginPage.js', responses[0]);
      await fs.writeFile('src/tests/Login.test.js', responses[1]);

  
    } catch (error) {
      console.error("Error message:", error.message);
    }
  }
  
  main();