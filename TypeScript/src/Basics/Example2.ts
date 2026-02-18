type MasalaChai = {
    type: string,
    amount: string
}
type KuladChai = {
    quantity: number,
    size: string
}
type GingerChai = {
    name: string,
    chaiGinger: boolean
}

type Chai = MasalaChai | KuladChai | GingerChai;

function MakeChai(msg: Chai): string {
    if ("chaiGinger" in msg) {
        return msg.chaiGinger ? "Ginger Chai" : "Plain Chai";
    } else if ("type" in msg) {
        return `Masala Chai of type ${msg.type}, amount ${msg.amount}`;
    } else if ("quantity" in msg) {
        return `Kulad Chai with quantity ${msg.quantity}, size ${msg.size}`;
    }
    return "Unknown Chai";
}

let msg:Chai={
    type:"Simple",
    amount:"10"
}

let res = MakeChai(msg);