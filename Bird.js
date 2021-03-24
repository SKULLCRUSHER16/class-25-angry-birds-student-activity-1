//extends is use for the connectivity of the class form the base class or parent class
//super is the constructor of the base class ro parent class
// we use super.display(); for using super constructor means displaying super constructor
class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}