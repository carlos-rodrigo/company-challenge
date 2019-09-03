import Lion from '../animals/lion';
import Tiger from '../animals/tiger';

var lion;
var tiger;

beforeEach(() => {
    lion = new Lion();
    tiger = new Tiger();
});


test('when lion speak he also use roar in what he says', () => {
    expect(lion.speak("I'm a lion")).toBe("I'm roar a roar lion roar");
})

test("when lion says 'Hi!' must says roar too", () => {
    expect(lion.speak("Hi!")).toBe("Hi! roar")
})

test("when tiger says 'Hi!' must grrr too", () => {
    expect(tiger.speak("Hi!")).toBe("Hi! grrr")
})

test("when tiger says 'Lion suck' must add grrr to spaces", () => {
    expect(tiger.speak("Lion suck")).toBe("Lion grrr suck grrr")
})
