function StickManRenderer(context) {
    this.context = context;
}

StickManRenderer.prototype.drawHead = function(context, stickMan) {
    context.beginPath();
    context.arc(stickMan.startX, stickMan.startY, stickMan.headSize, 0, Math.PI * 2, true);
    context.closePath();
};

StickManRenderer.prototype.drawBody = function(context,stickMan) {
    context.moveTo(stickMan.startX, stickMan.startY + stickMan.headSize);
    context.lineTo(stickMan.pelvisX, stickMan.pelvisY);
};
StickManRenderer.prototype.drawRightLeg = function(context, stickMan) {
    context.lineTo(stickMan.pelvisX - stickMan.stride, stickMan.pelvisY + stickMan.bodyLength);
};

StickManRenderer.prototype.drawLeftLeg = function(context, stickMan) {
    context.moveTo(stickMan.pelvisX, stickMan.pelvisY);
    context.lineTo(stickMan.pelvisX + stickMan.stride, stickMan.pelvisY +stickMan.bodyLength);
};

StickManRenderer.prototype.drawArms = function(context, stickMan) {
    context.moveTo(stickMan.startX - stickMan.armLength, stickMan.startY + (stickMan.bodyLength / 2));
    context.lineTo(stickMan.startX + stickMan.armLength, stickMan.startY + (stickMan.bodyLength / 2));
};

StickManRenderer.prototype.drawStickMan = function(stickMan) {

    this.context.moveTo(stickMan.startX, stickMan.startY);
    this.context.strokeStyle = "#000000";
    this.context.lineWidth = "5.0";
    this.drawHead(this.context, stickMan);
    this.drawBody(this.context, stickMan);
    this.drawRightLeg(this.context, stickMan);
    this.drawLeftLeg(this.context, stickMan);
    this.drawArms(this.context, stickMan);
    this.context.stroke();
  
};
