
import fs from 'fs';
import path from 'path';
import { expect, test } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import { readFileSync } from 'node:fs';
import AllureReporter from 'allure-playwright';
const filepath = path.join(__dirname,'../TestData/data.csv');

const records = parse(fs.readFileSync(filepath), {
  columns: true,
  skip_empty_lines: true
});



// for (const record of records) 
// {
//   test(`${record.TestCaseID}`, async ({ page }) => {
//     let iteration = record.Iteration
//     let numberiteration= +iteration
//     console.log(typeof(numberiteration));
    
//     while(record.Run.includes('Yes') && numberiteration==1)
//     {
      
//       console.log(record.TestCaseID,record.URL, record.Username,record.Password,record.Run,record.Iteration);

//       await page.goto(record.URL);
//       let title = await page.title()
//       console.log(title);
      
//       await page.getByPlaceholder('Username').fill(record.Username);
//       await page.getByPlaceholder('Password').fill(record.Password);
//       await page.locator("//button[@type='submit']").click();

//       let profileimage = await page.locator("//img[@alt='profile picture']")
//       await expect(profileimage).toBeVisible();

//       numberiteration-=1;
//     }
    
 
  
  
//   });
// }


  test('Test1', async ({ page }) => {

    for (const record of records) 
    {

    let iteration = record.Iteration
    let numberiteration= +iteration
    console.log(typeof(numberiteration));
    
    while(record.Run.includes('Yes') && record.TestCaseName.includes('Test1') && numberiteration==1)
    {
      
      console.log(record.TestCaseID,record.TestCaseName,record.URL, record.Username,record.Password,record.Run,record.Iteration);

      await page.goto(record.URL);
      let title = await page.title()
      console.log(title);
      
      await page.getByPlaceholder('Username').fill(record.Username);
      await page.getByPlaceholder('Password').fill(record.Password);
      await page.locator("//button[@type='submit']").click();

      let profileimage = await page.locator("//img[@alt='profile picture']")
      await expect(profileimage).toBeVisible();

      numberiteration-=1;
    }
    }  
  });

  test('Test2', async ({ page }) => {

    
    for (const record of records) 
    {

    let iteration = record.Iteration
    let numberiteration= +iteration
    console.log(typeof(numberiteration));
    
    while(record.Run.includes('Yes') && record.TestCaseName.includes('Test3')&& numberiteration==1)
    {
      // test.info().annotations.push(record.TestCaseID,record.TestCaseName,record.URL, record.Username,record.Password,record.Run,record.Iteration);
     
       (record.TestCaseID,record.TestCaseName,record.URL, record.Username,record.Password,record.Run,record.Iteration)
     


      await page.goto(record.URL);
      let title = await page.title()
      console.log(title);
      
      await page.getByPlaceholder('Username').fill(record.Username);
      await page.getByPlaceholder('Password').fill(record.Password);
      await page.locator("//button[@type='submit']").click();

      let profileimage = await page.locator("//img[@alt='profile picture']")
      await expect(profileimage).toBeVisible();

      numberiteration-=1;
    }
    }  
  });

