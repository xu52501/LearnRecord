class Person {
  public static a = 100;

  private static instance: Person;

  public b = 20;

  private constructor() {
    console.log(Person.instance);
    this.b = 100;
  }

  // 这个是挂载到Person.ptrototype原型上面的，所有new过后实例上有这个方法，而没有静态方法
  private method1() {
    console.log(345);
  }

  // 原理是挂载待Person这个方法上面的
  static getInstance() {
    if (!Person.instance) {
      return new Person();
    } else {
      return Person.instance;
    }
  }
}

// Person.getInstance();
// console.log(Person.a);

class Child {
  constructor(
    private person: Person,
    private a: 1,
  ) {}

  private meth1() {
    console.log(this.person);
  }
}

// const c1 = new Child();

// 正式代码的原型继承，不会直接实例父类，而是实例一个空函数，避免重复声明动态属性
const extends = (Child, Super) => {
  const fn = function () {};
  
  fn.prototype = Super.prototype;
  Child.prototype = new fn();
  Child.prototype.constructor = Child;
};

// start c4 c2 c3 c5 c7 c6

// console.log('start');
// setTimeout(() => {
//   console.log('c2');
//   Promise.resolve().then(() => {
//     console.log('c3')
//   })
// }, 0);

// new Promise(function(resolve, reject) {
//   console.log('c4');
//   setTimeout(() => {
//     console.log('c5');
//     resolve('c6')
//   }, 0)
// }).then((res) => {
//   console.log('c7');
//   setTimeout(() => {
//     console.log(res);
//   }, 0)
// })