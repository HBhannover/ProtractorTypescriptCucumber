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
const protractor_1 = require("protractor");
cucumber_1.When('Benutzer klickt auf Button Logout', { timeout: 10 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    // commonsteps.clickElement(elementID.logoutDropDown);
    // element.all(element(by.tagName('li'))).count().then(function (text) {
    //   console.log(text)
    // })
    protractor_1.element.all(protractor_1.element(protractor_1.by.tagName('li'))).last().click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LnN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcHMvbG9nb3V0LnN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQThCO0FBRzlCLDJDQUF1QztBQUV2QyxlQUFJLENBQUUsbUNBQW1DLEVBQUUsRUFBQyxPQUFPLEVBQUUsRUFBRSxHQUFDLElBQUksRUFBQyxFQUFFLEdBQVMsRUFBRTtJQUN4RSxzREFBc0Q7SUFDdEQsd0VBQXdFO0lBQ3hFLHNCQUFzQjtJQUN0QixLQUFLO0lBQ0wsb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFBIn0=