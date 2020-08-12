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