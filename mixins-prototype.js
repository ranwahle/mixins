// mixin
class A {
  AMethd() {
    console.log("A Methd");
  }
}

const bMixins = {
  BMethod: () => {
    console.log("B Methd");
  },
};

// Copy bMixins functionality
Object.assign(A.prototype, bMixins);

new A().BMethod();
