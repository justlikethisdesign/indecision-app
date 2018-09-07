class Person {
    constructor(name = 'Anon') {
        this.name = name
    }
    getGreeting() {
        //return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${ this.name }!`;
    }
}

const me = new Person();

console.log(me.getGreeting());
