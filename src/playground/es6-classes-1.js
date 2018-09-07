class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${ this.name }!`;
    }
    getDescription() {
        return `${ this.name } is ${ this.age } year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age); // This calls the parent constructor first
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if( this.hasMajor() ){
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

const me = new Student('Rob', 25, 'Computing');

console.log(me.getDescription());
