function init() {
    console.log('Hello World!');

    let age = 22;
    console.log(age);

    let name = "Victoria Olsen";
    console.log("My name is :" + name)

    mathLib.sayHello("a parameter val"); // exec the fn on the module
    var res = mathLib.sum(21, 21);
    console.log(res);

    var g = mathLib.greater(897123, 89123);
    console.log(g);

    console.log(mathLib.greater(-1, -2));

    console.log("Is even:" + mathLib.isEven(42));
    console.log("Is even:" + mathLib.isEven(333));
    console.log("Is even:" + mathLib.isEven(0));
}

init();
