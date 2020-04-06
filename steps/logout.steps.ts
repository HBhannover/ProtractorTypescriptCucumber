import {When} from "cucumber";
import {commonsteps} from "./common.steps";
import {elementID} from "../basic/elements";
import {by, element} from "protractor";

When ('Benutzer klickt auf Button Logout', {timeout: 10*1000}, async () => {
  commonsteps.clickElement(elementID.logoutDropDown);
  element.all(element(by.tagName('li'))).count().then(function (text) {
    console.log(text)
  })
  element.all(element(by.tagName('li'))).last().click();
})
