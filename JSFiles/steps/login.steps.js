"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const login_page_1 = require("../pages/login.page");
const protractor_1 = require("protractor");
const common_steps_1 = require("./common.steps");
const elements_1 = require("../basic/elements");
let Loginpage = new login_page_1.loginpage();
var EC = protractor_1.ExpectedConditions;
let common = new common_steps_1.commonsteps();
cucumber_1.Given('Anmeldungsseite wird angezeigt', { timeout: 10 * 1000 }, () => {
    Loginpage.getToUrl();
});
cucumber_1.When('Benutzer gibt Usename als {string} und Passwort als {string} ein', { timeout: 40 * 1000 }, (string1, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield Loginpage.isDisplayed(elements_1.elementID.emailField);
    yield Loginpage.fillUsername(string1);
    yield Loginpage.isDisplayed(elements_1.elementID.passwordField);
    yield Loginpage.fillPassword(string2);
    yield common_steps_1.commonsteps.clickElement(elements_1.elementID.loginButton);
}));
cucumber_1.When('Benutzer gibt Usename als {string} ein', { timeout: 40 * 1000 }, (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield Loginpage.isDisplayed(elements_1.elementID.emailField);
    yield Loginpage.fillUsername(string);
}));
cucumber_1.When('Benutzer gibt Passwort als {string} ein', { timeout: 40 * 1000 }, (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield Loginpage.isDisplayed(elements_1.elementID.passwordField);
    yield Loginpage.fillPassword(string);
}));
cucumber_1.When('Benutzer klickt auf Button Anmelden', { timeout: 40 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield common_steps_1.commonsteps.clickElement(elements_1.elementID.loginButton);
}));
cucumber_1.Then("Benutzer ist jetzt in seinem Homepage", { timeout: 40 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.id(elements_1.elementID.mainContainerID))), 50000);
}));
cucumber_1.Then("Anmeldung ist nicht erfolgreich", { timeout: 30 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.id(elements_1.elementID.headerblock))), 50000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwcy9sb2dpbi5zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE0QztBQUM1QyxvREFBZ0Q7QUFFaEQsMkNBQXNFO0FBQ3RFLGlEQUE2QztBQUM3QyxnREFBOEM7QUFFOUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7QUFDaEMsSUFBSSxFQUFFLEdBQUcsK0JBQWtCLENBQUM7QUFDNUIsSUFBSSxNQUFNLEdBQUcsSUFBSSwwQkFBVyxFQUFFLENBQUM7QUFFL0IsZ0JBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFDLE9BQU8sRUFBQyxFQUFFLEdBQUMsSUFBSSxFQUFDLEVBQUUsR0FBRSxFQUFFO0lBQzNELFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN6QixDQUFDLENBQUMsQ0FBQTtBQUVELGVBQUksQ0FBQyxrRUFBa0UsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBTSxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFDbkgsTUFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLG9CQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEQsTUFBTSxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sU0FBUyxDQUFDLFdBQVcsQ0FBQyxvQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxNQUFNLDBCQUFXLENBQUMsWUFBWSxDQUFDLG9CQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLGVBQUksQ0FBQyx3Q0FBd0MsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBTSxNQUFNLEVBQUMsRUFBRTtJQUM5RSxNQUFNLFNBQVMsQ0FBQyxXQUFXLENBQUMsb0JBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRCxNQUFNLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFekMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLGVBQUksQ0FBRSx5Q0FBeUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBTSxNQUFNLEVBQUMsRUFBRTtJQUNoRixNQUFNLFNBQVMsQ0FBQyxXQUFXLENBQUMsb0JBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRCxNQUFNLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLGVBQUksQ0FBQyxxQ0FBcUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUMsSUFBSSxFQUFDLEVBQUUsR0FBTyxFQUFFO0lBQ3JFLE1BQU0sMEJBQVcsQ0FBQyxZQUFZLENBQUMsb0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsZUFBSSxDQUFFLHVDQUF1QyxFQUFFLEVBQUMsT0FBTyxFQUFFLEVBQUUsR0FBQyxJQUFJLEVBQUMsRUFBRSxHQUFPLEVBQUU7SUFDeEUsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxvQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxRixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsZUFBSSxDQUFFLGlDQUFpQyxFQUFFLEVBQUMsT0FBTyxFQUFFLEVBQUUsR0FBQyxJQUFJLEVBQUMsRUFBRSxHQUFRLEVBQUU7SUFDbkUsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxvQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN0RixDQUFDLENBQUEsQ0FBQyxDQUFBIn0=