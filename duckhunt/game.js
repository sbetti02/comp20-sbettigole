function init () {
	var canvas = document.getElementById("game_canvas");
	var ctx = canvas.getContext('2d');
	var image = new Image();
	image.addEventListener("load", function() {
		ctx.drawImage(image, 0, 0);
	})
	image.src = 'duckhunt-background.gif';
	//ctx.drawImage(image, 0,0)
	//ctx.fillStyle = "green";
	//ctx.fillRect(10, 10, 100, 100);
	//ctx.drawImage(duckhunt-background.gif);
	//return;
};
