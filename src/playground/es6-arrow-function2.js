const add = ( a, b ) => {
        return a + b;
};

console.log( add(55,1) );


const user = {
    name: 'Rob',
    cities: ['leeds', 'manchester', 'dublin'],
    printPlacesLived() {
        return this.cities.map( ( city ) => this.name + ' has lived in ' + city );
    }
};

const multipliers = {
    numbers: [3,6,8],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map( ( digit ) => this.multiplyBy * digit );
    }
};

console.log( multipliers.multiply() );
