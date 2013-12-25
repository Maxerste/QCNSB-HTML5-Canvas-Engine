line = function(sx, sy, ex, ey) {
	this.start = [sx, sy];
	this.end = [ex, ey];
	ffindposition();
	this.start[0] -= this.left;
	this.start[1] -= this.top;
	this.end[0] -= this.left;
	this.end[1] -= this.top;
	this.type = "line";
	canvasObj.sprites.push(this);
	this.move = fmove;
	this.click = fclickline;
	this.funzOnClick = function() {};
	this.setclick = fsetclick;
}
function ffindposition() {
  if (this.start[0] < this.end[0]) {this.left = this.start[0]*1; this.width = this.end[0] - this.start[0];}
	else {this.left = this.end[0]*1; this.width = thisstart[0] - this.end[0];}
	if (this.start[1] < this.end[1]) {this.left = this.start[1]*1; this.width = this.end[1] - this.start[1];}
	else {this.left = this.end[1]*1; this.width = thisstart[1] - this.end[1];}
}
function fclickline(x, y, l) {
	if (((l.left < x) && (x < l.width)) && ((l.top < y) && (y < l.height))) {
		if (((x / y) > ((l.start[0] - l.end[0] + 6) / (l.start[1] - l.end[1] + 6))) && ((x / y) < ((l.start[0] - l.end[0] - 6) / (l.start[1] - l.end[1] - 6)))) {
			this.funzOnClick()
		}
	}
}
