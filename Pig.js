//extends is use for the connectivity of the class form the base class or parent class
//super is the constructor of the base class ro parent class
class Pig extends BaseClass {
    constructor(x, y) {
     super(x,y,50,50);
     this.image=loadImage("sprites/enemy.png");
    }
  }