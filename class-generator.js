class A {
    aMethod() {
        console.log('Hello A')
    }
 }

 class D {
     DMethod() {
        console.log('Hello D')
     }
 }
 function mixins(superClass) {
    return class extends superClass {
        constructor() {
            super();
            console.log('We are extending', superClass);
        }
        bMethod() {
            console.log('Hello from B')
        }
    }
 }
 const cClass = mixins(A);
 const extendDClass = mixins(D);
const dObj = new extendDClass();

 const cObj = new cClass();
 
 cObj.aMethod();
 cObj.bMethod();
 dObj.DMethod();
 dObj.bMethod();
 