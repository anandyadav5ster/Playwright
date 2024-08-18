import {test,expect} from '@playwright/test'
const locatorspage = require('../pages/locatorsPage')
const generic_function = require('../generic_functions')
const cfg = JSON.parse(JSON.stringify(require('../config.json')))
import path from 'path'
import readXlsxFile from 'read-excel-file';
const filepath = path.join(__dirname,'../data.csv');
const xlsxFile = require('read-excel-file/node');
import fs from 'fs';
import { parse } from 'csv-parse'
const records=null;


test.beforeEach(async({page})=>{
	// const page = browser.newContext()
	await page.goto('https://www.saucedemo.com/v1/')
	console.log("Before all")
	
})




test('assertion title', async({page})=>{
	
	let title = await page.title()
	await console.log(title)
	await expect(page).toHaveTitle("Swag Labs")
	await page.screenshot({path:'.\\screenshots\\test1.png'})
})

test('login', async({page})=>{
	await page.goto('https://www.saucedemo.com/v1/')
	// let element = await page.locator("//input[@id='user-name']");
	// let elementusername = await page.locator('#username')
	// await element.waitFor({state:"attached"})
	// await element.fill('standard_user')
	// await elementpassword.fill('secret_sauce')
	// await login_btn.click()
	// let elementpassword = await page.locator("#password");
	// let login_btn = await page.locator("#login-button");

	// create object
	const lop= new locatorspage(page)
	const gf =new generic_function(page)
	let elementusername = await page.locator(lop.username)
	let elementpassword = await page.locator(lop.password);
	await elementusername.waitFor({state:"attached"})
	await elementusername.fill('standard_user')
	// await elementpassword.fill('secret_sauce')
	await elementpassword.fill(cfg.password)
	// await page.click(lop.login_btn)
	await elementpassword.highlight()
	await page.screenshot({
		path:'.\\screenshots\\test1.png',
		mask:[elementusername],
		omitBackground:true,
		maskColor:'#FFFFCC'
	})
	await gf.click_function(lop.login_btn)
	
	
	
})




test.afterEach(async({page})=>{
	page.close();
	console.log("close all")
})