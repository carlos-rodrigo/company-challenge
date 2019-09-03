export default class Animal {
    constructor(sound){
        this.sound = ` ${sound} `;
    }

    speak(phrase) {
        let phraseWithAnimalSound = phrase.replace(/ /g, this.sound) + this.sound;
        return phraseWithAnimalSound.trim();
    }
}
