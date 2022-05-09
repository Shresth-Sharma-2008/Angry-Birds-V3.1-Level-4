class Log extends BaseClass{
  constructor(x,y,t,height,angle){
    super(x,y,t,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  }
}