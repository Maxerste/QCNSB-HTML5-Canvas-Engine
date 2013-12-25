canvasObj = new Object()
canvasObj.init = function(canvasId) {
	this.canvas = document.getElementById(canvasId);
	this.ctx = this.canvas.getContext("2d");
	this.width = this.canvas.width;
	this.height = this.canvas.height;
	this.left = 0;
	this.top = 0;
	this.sprites = new Array();
	this.tmp = this.canvas;
        if (this.tmp.offsetParent) {
          this.left = this.tmp.offsetLeft;
          this.top = this.tmp.offsetTop;
          while (this.tmp = this.tmp.offsetParent) {
           this.left += this.tmp.offsetLeft;
           this.top += this.tmp.offsetTop;
          }
        }
	this.canvas.addEventListener("click", this.click, false);
}
canvasObj.click = function(event) {
	canvasObj.mousex = event.clientX*1 - canvasObj.left;
	canvasObj.mousey = event.clientY*1 - canvasObj.top;
	for (canvasObj.tmp = 0; canvasObj.tmp < canvasObj.sprites.length; canvasObj.tmp++) {
		canvasObj.sprites[canvasObj.tmp].click(canvasObj.mousex, canvasObj.mousey, canvasObj.sprites[canvasObj.tmp]);
	}
}
canvasObj.clear = function() {
	this.ctx.fillStyle="#FFFFFF";
	this.ctx.fillRect(0,0,this.width,this.height);
}
canvasObj.drawall = function() {
  for (canvasObj.tmp = 0; canvasObj.tmp < canvasObj.sprites.length; canvasObj.tmp++) {
    canvasObj.draw(canvasObj.sprites[canvasObj.tmp]);
  }
}
canvasObj.draw = function(spr) {
	switch (spr.type) {
		//Draw all the sprites and other stuff
		case "line":
			this.ctx.beginPath();
			this.ctx.lineWidth="3";
			this.ctx.strokeStyle="black"
			this.ctx.moveTO(spr.left + spr.start[0], spr.top + spr.start[1]);
			this.ctz.lineTO(spr.left + spr.end[0], spr.top + spr.end[1]);
			break;
	}
}
canvasObj.update = function() {
	this.ctx.stroke();
}
