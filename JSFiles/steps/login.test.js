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
cucumber_1.Then("Benutzer landet sich in seinem Homepage", { timeout: 40 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.id(elements_1.elementID.mainContainerID))), 50000);
}));
cucumber_1.Then("Anmeldung ist nicht erfolgreich", { timeout: 30 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.id(elements_1.elementID.headerblock))), 50000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4udGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBzL2xvZ2luLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEM7QUFDNUMsb0RBQWdEO0FBRWhELDJDQUFzRTtBQUN0RSxpREFBNkM7QUFDN0MsZ0RBQThDO0FBRTlDLElBQUksU0FBUyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO0FBQ2hDLElBQUksRUFBRSxHQUFHLCtCQUFrQixDQUFDO0FBQzVCLElBQUksTUFBTSxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO0FBRS9CLGdCQUFLLENBQUMsZ0NBQWdDLEVBQUUsRUFBQyxPQUFPLEVBQUMsRUFBRSxHQUFDLElBQUksRUFBQyxFQUFFLEdBQUUsRUFBRTtJQUMzRCxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDekIsQ0FBQyxDQUFDLENBQUE7QUFFRCxlQUFJLENBQUMsa0VBQWtFLEVBQUUsRUFBQyxPQUFPLEVBQUUsRUFBRSxHQUFDLElBQUksRUFBQyxFQUFFLENBQU0sT0FBTyxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQ25ILE1BQU0sU0FBUyxDQUFDLFdBQVcsQ0FBQyxvQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxNQUFNLFNBQVMsQ0FBQyxXQUFXLENBQUMsb0JBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRCxNQUFNLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsTUFBTSwwQkFBVyxDQUFDLFlBQVksQ0FBQyxvQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixlQUFJLENBQUMsd0NBQXdDLEVBQUUsRUFBQyxPQUFPLEVBQUUsRUFBRSxHQUFDLElBQUksRUFBQyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDOUUsTUFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLG9CQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEQsTUFBTSxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXpDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixlQUFJLENBQUUseUNBQXlDLEVBQUUsRUFBQyxPQUFPLEVBQUUsRUFBRSxHQUFDLElBQUksRUFBQyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDaEYsTUFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLG9CQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckQsTUFBTSxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixlQUFJLENBQUMscUNBQXFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsRUFBRSxHQUFDLElBQUksRUFBQyxFQUFFLEdBQU8sRUFBRTtJQUNyRSxNQUFNLDBCQUFXLENBQUMsWUFBWSxDQUFDLG9CQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLGVBQUksQ0FBRSx5Q0FBeUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUMsSUFBSSxFQUFDLEVBQUUsR0FBTyxFQUFFO0lBQzFFLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsb0JBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDMUYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLGVBQUksQ0FBRSxpQ0FBaUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUMsSUFBSSxFQUFDLEVBQUUsR0FBUSxFQUFFO0lBQ25FLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsb0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdEYsQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9