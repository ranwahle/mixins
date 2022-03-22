// mixin
class A {
  AMethd() {
    console.log("A Methd");
  }
}

class B {
  BMethod() {
    console.log("B Methd");
  }
}

// Copy B prototype functionality (doesn't work)
Object.assign(A.prototype, B.prototype);

new A().BMethod();
