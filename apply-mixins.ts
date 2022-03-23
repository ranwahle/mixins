type AConstructor = new (...args: any[]) => {}

// Each mixin is a traditional ES class
class ALivingRoom {
  playWithKids() {}

  watchTv() {}

  eatDinner() {}
}

class AShower {
  takeAShower() {}
}

// Including the base
class ToiletSeat {
  iDontWannaKnow() {
    console.log(`I don't wanna know`);
  }
}

// Then you create an interface which merges
// the expected mixins with the same name as your base
interface ToiletSeat extends ALivingRoom, AShower {}

// Apply the mixins into the base class via
// the JS at runtime
function applyMixins(derivedCtor: AConstructor, constructors: AConstructor[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

applyMixins(ToiletSeat, [ALivingRoom, AShower])

const myLivongRoom = new ToiletSeat();
myLivongRoom.playWithKids();
myLivongRoom.iDontWannaKnow();

const myShower = new ToiletSeat();
myShower.takeAShower();
myShower.iDontWannaKnow();
