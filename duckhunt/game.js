function init () {
	var canvas = document.getElementById("game_canvas");
	var ctx = canvas.getContext('2d');
	var image = new Image();
	var image2 = new Image();
	alert('ayyyy');
	image.addEventListener("load", function() {
		ctx.drawImage(image, 0, 0);
		ctx.drawImage(image2, 167, 150, 40, 45, 100, 70, 50, 50);
		ctx.drawImage(image2,  0, 150, 40, 45, 150, 30, 50, 50);
	});
	image.src = 'duckhunt-background.gif';
	image2.src = 'duckhunt_various_sheet.png';
};