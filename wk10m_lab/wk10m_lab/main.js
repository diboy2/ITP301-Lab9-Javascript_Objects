var image = {
  topPosition:'100px',
  leftPosition:'100px',

  updatePosition: function(){
    $('#img-table').css('left', this.leftPosition);
    $('#img-table').css('top', this.topPosition);
  },

  moveH: function(value){
  	this.leftPosition = parseInt(this.leftPosition, 10) + parseInt(value,10) + "px";
  	this.updatePosition();
  },

  moveV: function(value){
  	this.topPosition = parseInt(this.topPosition, 10) + parseInt(value,10) + "px";
  	this.updatePosition();
  }
};

$("#arrowDown").on("click",function(){
	image.moveV(1);
});
$("#arrowUp").on("click",function(){
	image.moveV(-1);
});

$("#arrowLeft").on("click",function(){
	image.moveH(-1);
});

$("#arrowRight").on("click",function(){
	image.moveH(1);
});