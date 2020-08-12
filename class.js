var Person = /** @class */ (function () {
    function Person() {
        this.b = 20;
        console.log(Person.instance);
        this.b = 100;
    }
    // 这个是挂载到Person.ptrototype原型上面的，所有new过后实例上有这个方法，而没有静态方法
    Person.prototype.method1 = function () {
        console.log(345);
    };
    // 原理是挂载待Person这个方法上面的
    Person.getInstance = function () {
        if (!Person.instance) {
            return new Person();
        }
        else {
            return Person.instance;
        }
    };
    Person.a = 100;
    return Person;
}());
// Person.getInstance();
// console.log(Person.a);
var Child = /** @class */ (function () {
    function Child(person, a) {
        this.person = person;
        this.a = a;
    }
    Child.prototype.meth1 = function () {
        console.log(this.person);
    };
    return Child;
}());
// const c1 = new Child();
