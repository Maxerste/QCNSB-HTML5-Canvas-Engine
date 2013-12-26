line = function(sx, sy, ex, ey) {
  if (sx < ex) {this.left = sx*1; this.width = ex - sx;}
	else {this.left = ex*1; this.width = sx - ex;}
	if (sy < ey) {this.top = sy*1; this.height = ey - sy;}
	else {this.top = ey*1; this.height = sy - ey;}
	this.start = [sx - this.left, sy - this.top];
	this.end = [ex - this.left, ey - this.top];
	this.type = "line";
	canvasObj.sprites.push(this);
	this.move = fmove;
	this.click = fclickline;
	this.funzOnClick = function(){};
	this.setclick = fsetclick;
}
function fclickline(x, y, l) {
	if (((l.left < x) && (x < l.width)) && ((l.top < y) && (y < l.height))) {
		if (((x / y) > ((l.start[0] - l.end[0] + 6) / (l.start[1] - l.end[1] + 6))) && ((x / y) < ((l.start[0] - l.end[0] - 6) / (l.start[1] - l.end[1] - 6)))) {
			if (this.funzOnClick != 0) {this.funzOnClick()}
		}
	}
}
