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
var EC = protractor_1.ExpectedConditions;
class commonsteps {
    clear(field) {
        return __awaiter(this, void 0, void 0, function* () {
            yield field.sendKeys(protractor_1.Key.chord(protractor_1.Key.CONTROL, 'a'));
            yield field.sendKeys(protractor_1.Key.BACK_SPACE);
        });
    }
    static clickElement(elementTemp) {
        protractor_1.element(protractor_1.by.id(elementTemp)).click();
    }
    static isVisible(elementClick) {
        protractor_1.browser.wait(EC.visibilityOf(protractor_1.element(protractor_1.by.id(elementClick))), 15000, "Element is not visible");
    }
}
exports.commonsteps = commonsteps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcHMvY29tbW9uLnN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlGO0FBR3pGLElBQUksRUFBRSxHQUFHLCtCQUFrQixDQUFDO0FBRTVCLE1BQWEsV0FBVztJQUVsQixLQUFLLENBQUMsS0FBVTs7WUFDbEIsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFHLENBQUMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXO1FBQzNCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVk7UUFDekIsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Q0FDQTtBQWRELGtDQWNDIn0=