enum sizes {
    SMALL,
    MEDIUM,
    LARGE
}

enum prices {
    SMALL = 30,
    MEDIUM = 50,
    LARGE = 70
}

type Product = {
    size : sizes,
    price : prices
}

type User = {
    name:string,
    age:string,
    product: Product
}

const user1:User = {
    name:"A",
    age:"21",
    product: {
        size:sizes.SMALL,
        price: prices.SMALL
    }
};

interface Animal {
    name: string;
    sound(msg: string): string; 
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(msg: string): string {
        return `${this.name} barks: ${msg}`;
    }
}

class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(msg: string): string {
        return `${this.name} meows: ${msg}`;
    }
}

class Cow implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(msg: string): string {
        return `${this.name} moos: ${msg}`;
    }
}

const cow1 = new Cow("Cow");
console.log(cow1);
console.log(cow1.sound("Hmm"));