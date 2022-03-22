type AClassConstructor= new(...args: any[]) => {};

const mix: (superclass) => MixBuilder<typeof superclass>  = (suprtclass) => new MixBuilder(suprtclass);

/**
 * The idea for this class is taken from https://github.com/justinfagnani/mixwith.js
 */
class MixBuilder<T extends AClassConstructor>  {
    constructor(private superClass: T ) {     
    }

    with(...mixins) {
        return mixins.reduce((accumolatingClass, currentmixins) => currentmixins(accumolatingClass), this.superClass);
      }
}
class MySuperClass {
    foo() {
        console.log('I am fooing')
    }
}

const MyOtherClassMixins = () => class extends MySuperClass {
    bar()  {
        console.log('I am baring') 
    }
}

const AnotherDerivedClassMixins = () => class extends MyOtherClassMixins() {
    bar2()  {
        console.log('I am also baring') 
    }
}

class MyClass extends mix(MySuperClass).with(MyOtherClassMixins, AnotherDerivedClassMixins) {

} 

const myObj = new MyClass();

myObj.foo();
myObj.bar();
myObj.bar2();