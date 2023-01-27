

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge1(other) {
        // Write code here!
        if (p2.age > p1.age) {
            console.log(`${p2.name} is older than me`);
        } else if (p1.age < p2.age) {
            console.log(`${p2.name} is younger than me`);
        } else {
            console.log(`${p2.name} the same age as me`)
        }

    }

    compareAge2(other) {
        // Write code here!
        if (p1.age > p2.age) {
            console.log(`${p1.name} is older than me`);
        } else if (p1.age < p2.age) {
            console.log(`${p1.name} is younger than me`);
        } else {
            console.log(`${p1.name} the same age as me`)
        }

    }

    compareAge3(other) {
        // Write code here!
        if (p3.age > p2.age) {
            console.log(`${p3.name} is older than me`);
        } else if (p3.age < p2.age) {
            console.log(`${p3.name} is younger than me`);
        } else {
            console.log(`${p3.name} the same age as me`)
        }

    }

    compareAge4(other) {
        // Write code here!
        if (p2.age > p3.age) {
            console.log(`${p2.name} is older than me`);
        } else if (p2.age < p3.age) {
            console.log(`${p2.name} is younger than me`);
        } else {
            console.log(`${p2.name} the same age as me`)
        }

    }

    compareAge5(other) {
        // Write code here!
        if (p3.age > p1.age) {
            console.log(`${p3.name}is older than me`);
        } else if (p3.age < p1.age) {
            console.log(`${p3.name} is younger than me`);
        } else {
            console.log(`${p3.name} the same age as me`)
        }

    }

    compareAge6(other) {
        // Write code here!
        if (p1.age > p3.age) {
            console.log(`${p1.name} is older than me`);
        } else if (p1.age < p3.age) {
            console.log(`${p1.name} is younger than me`);
        } else {
            console.log(`${p1.name} the same age as me`)
        }

    }
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1.compareAge1(p2));
console.log(p2.compareAge2(p1));
console.log(p2.compareAge3(p3));
console.log(p3.compareAge4(p2));
console.log(p1.compareAge5(p3));
console.log(p3.compareAge6(p1));
