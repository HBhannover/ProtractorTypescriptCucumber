import { elementID } from "../basic/elements";
import { commonsteps } from "../steps/common.steps";

export class logoutpage {
    static isVisible(visibleElement){
        commonsteps.isVisible(elementID.loginButton);
    }
}