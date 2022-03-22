type AClass = new (...args: any[]) => {}

function AddToiletSeat<TBase extends AClass>(Baseclass: TBase) {
    return class Toileting extends Baseclass {
        iDontWantToKnow() {
            console.log('This is private you don\'t wanna know')
        }
    }
}

class LivingRoom {
    playWithKids() {}

    watchTv() {}

    eatDinner() {

    }
}

class Shower {
    takeAShower() {}
}

const RequirementsClass = AddToiletSeat(LivingRoom);
const AMoreApropriateClass = AddToiletSeat(Shower);

const obj = new RequirementsClass();
obj.playWithKids();
obj.iDontWantToKnow();

const aMoreApropriateObject = new AMoreApropriateClass();
aMoreApropriateObject.takeAShower();
aMoreApropriateObject.iDontWantToKnow();


