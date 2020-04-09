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
const elements_1 = require("../basic/elements");
const protractor_1 = require("protractor");
const logout_page_1 = require("../pages/logout.page");
var EC = protractor_1.ExpectedConditions;
cucumber_1.When('Benutzer klickt auf Button Logout', { timeout: 50 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.css("a[id = 'pageLoginAnchor']")).element(protractor_1.by.css("div:nth-child(1)")).click();
    // await browser.wait(EC.visibilityOf(element(by.css("div[class = 'uiScrollableAreaContent']"))), 10000, "There is Timeout");
    protractor_1.browser.driver.sleep(30000);
    yield protractor_1.element(protractor_1.by.css("ul[class = '_54nf']")).element(protractor_1.by.css("li:nth-child(9)")).click();
    /* ODER:
      element.all(element(by.tagName('li'))).last().click(); */
}));
cucumber_1.Then('Die abgemeldete Seite wird angezeigt', { timeout: 40 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield logout_page_1.logoutpage.isVisible(elements_1.elementID.loginButton);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LnN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcHMvbG9nb3V0LnN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXNDO0FBRXRDLGdEQUE0QztBQUM1QywyQ0FBb0U7QUFDcEUsc0RBQWtEO0FBRWxELElBQUksRUFBRSxHQUFHLCtCQUFrQixDQUFDO0FBRTVCLGVBQUksQ0FBRSxtQ0FBbUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUMsSUFBSSxFQUFDLEVBQUUsR0FBUyxFQUFFO0lBQ3hFLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEcsNkhBQTZIO0lBQzVILG9CQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXhGOytEQUMyRDtBQUMzRCxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUosZUFBSSxDQUFFLHNDQUFzQyxFQUFFLEVBQUMsT0FBTyxFQUFFLEVBQUUsR0FBQyxJQUFJLEVBQUMsRUFBRSxHQUFPLEVBQUU7SUFDekUsTUFBTSx3QkFBVSxDQUFDLFNBQVMsQ0FBQyxvQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQSxDQUFDLENBQUEifQ==