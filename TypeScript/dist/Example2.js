"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MakeChai(msg) {
    if ("chaiGinger" in msg) {
        return msg.chaiGinger ? "Ginger Chai" : "Plain Chai";
    }
    else if ("type" in msg) {
        return `Masala Chai of type ${msg.type}, amount ${msg.amount}`;
    }
    else if ("quantity" in msg) {
        return `Kulad Chai with quantity ${msg.quantity}, size ${msg.size}`;
    }
    return "Unknown Chai";
}
let msg = {
    type: "Simple",
    amount: "10"
};
let res = MakeChai(msg);
//# sourceMappingURL=Example2.js.map