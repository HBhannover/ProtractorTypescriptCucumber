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
const protractor_1 = require("protractor");
const elements_1 = require("../basic/elements");
const common_steps_1 = require("../steps/common.steps");
let common = new common_steps_1.commonsteps();
class loginpage {
    getToUrl() {
        protractor_1.browser.get('https://www.facebook.com/');
    }
    isDisplayed(element) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield common_steps_1.commonsteps.isVisible(element);
        });
    }
    fillUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            common.clear(elements_1.elementID.emailField);
            return yield protractor_1.element(protractor_1.by.id(elements_1.elementID.emailField)).sendKeys(username);
        });
    }
    fillPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            common.clear(elements_1.elementID.passwordField);
            return yield protractor_1.element(protractor_1.by.id(elements_1.elementID.passwordField)).sendKeys(password);
        });
    }
}
exports.loginpage = loginpage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL2xvZ2luLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Q7QUFDaEQsZ0RBQThDO0FBQzlDLHdEQUFvRDtBQUVwRCxJQUFJLE1BQU0sR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQztBQUUvQixNQUFhLFNBQVM7SUFFbEIsUUFBUTtRQUNKLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVLLFdBQVcsQ0FBRSxPQUFlOztZQUM5QixPQUFPLE1BQU0sMEJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsQ0FBQztLQUFBO0lBRUksWUFBWSxDQUFDLFFBQWdCOztZQUM5QixNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkMsT0FBTyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxvQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7S0FBQTtJQUVJLFlBQVksQ0FBQyxRQUFnQjs7WUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsb0JBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RSxDQUFDO0tBQUE7Q0FDSjtBQW5CRCw4QkFtQkMifQ==