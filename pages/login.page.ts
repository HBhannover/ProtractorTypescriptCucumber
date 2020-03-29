import {browser, element, by} from 'protractor';
import { elementID } from '../basic/elements';
import { commonsteps } from '../steps/common.steps';

let common = new commonsteps();

export class loginpage {

    getToUrl() {
        browser.get('https://www.facebook.com/');
    }

    async isDisplayed (element: string) {
        return await commonsteps.isVisible(element);
    }

   async fillUsername(username: string) {
        common.clear(elementID.emailField);
        return await element(by.id(elementID.emailField)).sendKeys(username);
    }

   async fillPassword(password: string) {
        common.clear(elementID.passwordField);
        return await element(by.id(elementID.passwordField)).sendKeys(password);
    }
}