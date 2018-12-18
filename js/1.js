var boxX=20;
var boxY=30;

var boxWidth=1680;
var boxHeight=850;

var ballRadius=10;

var boxBoundLeft=boxX+ballRadius;
var boxBoundRight=boxX+boxWidth-ballRadius;
var boxBoundTop=boxY+ballRadius;
var boxBoundBottom=boxY+boxHeight-ballRadius;

var ballX=0;
var ballY=0;

var ballDx=10;
var ballDy=10;

var ctx;

var img=new Image();
img.src="./img/pear1.jpg";

var grad;

function init(){
	ctx=document.getElementById("canvas").getContext("2d");
	ctx.lineWidth=ballRadius;
	
	grad=ctx.createLinearGradient(boxX,boxY,boxX+boxWidth,boxY+boxHeight);
	
	 
	ctx.fillStyle=grad;
	moveball();
	setInterval(moveball,50);
}
function moveball(){
	ctx.clearRect(boxX,boxY,boxWidth,boxHeight);
	
	ctx.fillRect(boxX,boxY,ballRadius,boxHeight);
	
	ctx.fillRect(boxBoundRight,boxY,ballRadius,boxHeight);
	
	ctx.fillRect(boxX,boxY,boxWidth,ballRadius);
	
	ctx.fillRect(boxX,boxBoundBottom,boxWidth,ballRadius);
	
	boundCheck();
	
	ctx.beginPath();
	
	ctx.drawImage(img,ballX-ballRadius,ballY-ballRadius,2*ballRadius,2*ballRadius);
	
	ctx.fill();
	
	ctx.closePath();
}

var countSpr=0;
var countSum=0;
var countAut=0;
var countWin=0;


var key= [
			"spring1.jpg","spring2.jpg","spring3.jpg","spring4.jpg",
			"summer1.jpg","summer2.jpg","summer3.jpg","summer4.jpg",	
			"autumn1.jpg","autumn2.jpg","autumn3.jpg","autumn4.jpg",
			"winter1.jpg","winter2.jpg","winter3.jpg","winter4.jpg"
];

function boundCheck(){
	var tmpBallX=ballX+ballDx;
	var tmpBallY=ballY+ballDy;
	
	if(tmpBallX<boxBoundLeft){
		ballDx=-ballDx;
		tmpBallX=boxBoundLeft;
		countSpr++;
		countSpr%=4;
		document.body.style.background="url(img/"+key[countSpr]+")";
		document.body.style.backgroundSize="100% 1200px"
	}
	
	if(tmpBallX>boxBoundRight){
		ballDx=-ballDx;
		tmpBallX=boxBoundRight;
		countSum++;
		countSum%=4;
		document.body.style.background="url(img/"+key[countSum+4]+")";
		document.body.style.backgroundSize="100% 1200px"
	}
	
	if(tmpBallY<boxBoundTop){
		ballDy=-ballDy;
		tmpBallY=boxBoundTop;
		countAut++;
		countAut%=4;
		document.body.style.background="url(img/"+key[countAut+4*2]+")";
		document.body.style.backgroundSize="100% 1200px"
	}
	
	if(tmpBallY>boxBoundBottom){
		ballDy=-ballDy;
		tmpBallY=boxBoundBottom;
		countWin++;
		countWin%=4;
		document.body.style.background="url(img/"+key[countWin+4*3]+")";
		document.body.style.backgroundSize="100% 1200px"
	}
	ballX=tmpBallX;
	ballY=tmpBallY;
}

function change(){
	ballDx=Number(document.getElementById("hv").value);
	ballDy=Number(document.getElementById("vv").value);
	return false;
}
