import { Given, When, Then} from "cucumber";
import { loginpage } from "../pages/login.page";
import { Constans } from "../basic/constans";
import { ExpectedConditions, element, by, browser } from "protractor";
import { commonsteps } from "./common.steps";
import { elementID } from "../basic/elements";

let Loginpage = new loginpage();
var EC = ExpectedConditions;
let common = new commonsteps();

Given('Anmeldungsseite wird angezeigt', {timeout:10*1000}, ()=>{
    Loginpage.getToUrl();
})

 When('Benutzer gibt Usename als {string} und Passwort als {string} ein', {timeout: 40*1000}, async(string1, string2)=> {
    await Loginpage.isDisplayed(elementID.emailField);
    await Loginpage.fillUsername(string1);
    await Loginpage.isDisplayed(elementID.passwordField);
    await Loginpage.fillPassword(string2);
    await commonsteps.clickElement(elementID.loginButton);
})

When('Benutzer gibt Usename als {string} ein', {timeout: 40*1000}, async(string)=> {
    await Loginpage.isDisplayed(elementID.emailField);
    await Loginpage.fillUsername(string);

})

When ('Benutzer gibt Passwort als {string} ein', {timeout: 40*1000}, async(string)=> {
    await Loginpage.isDisplayed(elementID.passwordField);
    await Loginpage.fillPassword(string);
})

When('Benutzer klickt auf Button Anmelden', {timeout: 40*1000}, async()=> {
    await commonsteps.clickElement(elementID.loginButton);
})

Then ("Benutzer landet sich in seinem Homepage", {timeout: 40*1000}, async()=>{
    await browser.wait(EC.visibilityOf(element(by.id(elementID.mainContainerID))), 50000);
})

Then ("Anmeldung ist nicht erfolgreich", {timeout: 30*1000}, async ()=> {
    await browser.wait(EC.visibilityOf(element(by.id(elementID.headerblock))), 50000);
})