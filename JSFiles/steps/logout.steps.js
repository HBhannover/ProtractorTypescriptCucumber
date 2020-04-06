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
const common_steps_1 = require("./common.steps");
const elements_1 = require("../basic/elements");
const protractor_1 = require("protractor");
cucumber_1.When('Benutzer klickt auf Button Logout', { timeout: 10 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    common_steps_1.commonsteps.clickElement(elements_1.elementID.logoutDropDown);
    protractor_1.element.all(protractor_1.element(protractor_1.by.tagName('li'))).count().then(function (text) {
        console.log(text);
    });
    protractor_1.element.all(protractor_1.element(protractor_1.by.tagName('li'))).last().click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LnN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcHMvbG9nb3V0LnN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQThCO0FBQzlCLGlEQUEyQztBQUMzQyxnREFBNEM7QUFDNUMsMkNBQXVDO0FBRXZDLGVBQUksQ0FBRSxtQ0FBbUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUMsSUFBSSxFQUFDLEVBQUUsR0FBUyxFQUFFO0lBQ3hFLDBCQUFXLENBQUMsWUFBWSxDQUFDLG9CQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkQsb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkIsQ0FBQyxDQUFDLENBQUE7SUFDRixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3hELENBQUMsQ0FBQSxDQUFDLENBQUEifQ==