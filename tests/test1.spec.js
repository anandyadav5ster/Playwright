import {test} from '@playwright/test'



test('login', async({page})=>{
	await page.goto('https://www.saucedemo.com/v1/')
})


test.afterEach(async({page})=>{
	page.close();
	console.log("close all")
})