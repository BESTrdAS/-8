var boxX=20;
var boxY=30;

var boxWidth=1680;
var boxHeight=850;

var ballRadius=10;

var boxBoundLeft=boxX+ballRadius;
var boxBoundRight=boxX+boxWidth-ballRadius;
var boxBoundTop=boxY+ballRadius;
var boxBoundBottom=boxY+boxHeight-ballRadius;

var ballX=50;
var ballY=50;

var ballDx=2;
var ballDy=2;

var ctx;

var img=new Image();
img.src="./img/pear1.jpg";

var grad;

function init(){
	ctx=document.getElementById("canvas").getContext("2d");
	ctx.lineWidth=ballRadius;
	 
	moveball();
	setInterval(moveball,50);
}


function moveball(){
	ctx.clearRect(boxX,boxY,boxWidth,boxHeight);
	
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
var arrMusic=[
			"1.mp3","2.mp3","3.mp3","4.mp3","5.mp3","6.mp3","7.mp3","8.mp3","9.mp3","10.mp3",
			"11.mp3","12.mp3","13.mp3","14.mp3","15.mp3","16.mp3","17.mp3","18.mp3","19.mp3","20.mp3",
			"21.mp3","22.mp3","23.mp3","24.mp3","25.mp3","26.mp3","27.mp3","28.mp3","29.mp3","30.mp3",
			"31.mp3","32.mp3","33.mp3","34.mp3","35.mp3","36.mp3","37.mp3","38.mp3","39.mp3","40.mp3",
			"41.mp3","42.mp3","43.mp3","44.mp3","45.mp3","46.mp3","47.mp3","48.mp3","49.mp3","50.mp3",
			"51.mp3","52.mp3","53.mp3","54.mp3","55.mp3","56.mp3","57.mp3","58.mp3","59.mp3","60.mp3",
			"61.mp3","62.mp3","63.mp3","64.mp3","65.mp3","66.mp3","67.mp3","68.mp3","69.mp3","70.mp3",
			"71.mp3","72.mp3","73.mp3","74.mp3","75.mp3","76.mp3","77.mp3","78.mp3","79.mp3","80.mp3",
			"81.mp3","82.mp3","83.mp3","84.mp3","85.mp3","86.mp3","87.mp3","88.mp3"
]

var countMus=0;
var curMusic=document.getElementById("mp3");


function boundCheck(){
	var tmpBallX=ballX+ballDx;
	var tmpBallY=ballY+ballDy;
	
	countMus++;
	if(countMus>88)
		countMus=1;
	if(tmpBallX<boxBoundLeft){
		ballDx=-ballDx;
		tmpBallX=boxBoundLeft;
		countSpr++;
		countSpr%=4;
		document.body.style.background="url(img/"+key[countSpr]+")";
		document.body.style.backgroundSize="100% 1200px";
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
	//curMusic.src=arrMusic[countMus];
	//curMusic.play();
}

function change(){
	ballDx=Number(document.getElementById("hv").value);
	ballDy=Number(document.getElementById("vv").value);
	return false;
}

