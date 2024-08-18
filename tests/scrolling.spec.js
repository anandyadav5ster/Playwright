const{test, expect} = require ('@playwright/test')

test("scrollingIntoView", async({browser,page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
	let web_table = page.locator("//table[@name='BookTable']");
	

})