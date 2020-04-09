import { element, by, ExpectedConditions, browser, Key, ElementFinder } from "protractor"
import { elementID } from "../basic/elements";

var EC = ExpectedConditions;

export class commonsteps {

async clear(field: any) {
    await field.sendKeys(Key.chord(Key.CONTROL,'a'));
    await field.sendKeys(Key.BACK_SPACE);
}

static clickElement(elementTemp) {
    element(by.id(elementTemp)).click();
}

static isVisible(elementClick) {
    browser.wait(EC.visibilityOf(element(by.id(elementClick))), 15000,"Element is not visible");
}
}