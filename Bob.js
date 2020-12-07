class Bob{

    constructor(x,y, r){
        var options={
            isStatic:false,
            restitution: 1,
            friction:0,
            density:0.7
        }
    this.x=x
    this.y=y
    this.r=r
        this.body= Bodies.circle(this.x, this.y, this.r, options)
  World.add(world, this.body)
    }
 display(){
     ellipseMode(RADIUS)
     ellipse(this.body.position.x, this.body.position.y, this.r, this.r)
 }

}