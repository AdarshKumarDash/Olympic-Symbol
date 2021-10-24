canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue";

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(190, 163, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(290, 230, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(390, 230, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(490, 230, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(340, 270, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(440, 270, 40, 0, 2*Math.PI);
ctx.stroke();