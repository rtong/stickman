function StickMan(startX, startY){
    this.startX = startX;
    this.startY = startY;
    this.headSize = 30;
    this.bodyLength = 120;
    this.pelvisX = startX;
    this.pelvisY = startY+this.bodyLength;
    this.stride = 50;
    this.armLength = this.bodyLength/2;


}