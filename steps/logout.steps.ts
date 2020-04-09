import { When, Then } from 'cucumber';
import {commonsteps} from "./common.steps";
import {elementID} from "../basic/elements";
import {by, element, browser, ExpectedConditions} from "protractor";
import { logoutpage } from '../pages/logout.page';

var EC = ExpectedConditions;

When ('Benutzer klickt auf Button Logout', {timeout: 50*1000}, async () => {
  await element(by.css("a[id = 'pageLoginAnchor']")).element(by.css("div:nth-child(1)")).click();
 // await browser.wait(EC.visibilityOf(element(by.css("div[class = 'uiScrollableAreaContent']"))), 10000, "There is Timeout");
  browser.driver.sleep(30000);
  await element(by.css("ul[class = '_54nf']")).element(by.css("li:nth-child(9)")).click(); 

  /* ODER:
    element.all(element(by.tagName('li'))).last().click(); */
  })

Then ('Die abgemeldete Seite wird angezeigt', {timeout: 40*1000}, async()=>{
  await logoutpage.isVisible(elementID.loginButton);
  })
