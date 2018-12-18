       	var boxX = 20;		
		var boxY = 30;
		var boxWidth = 350;
		var boxHeight = 250;
		
		var ballRadius = 10;
		
		var boxBoundLeft = boxX + ballRadius;					
		var boxBoundRight = boxX + boxWidth - ballRadius;		
		var boxBoundTop = boxY + ballRadius;					
		var boxBoundBottom = boxY + boxHeight - ballRadius;	
		
		var ballX = 50;
		var ballY = 50;
	
		var ballDx = 4;
		var ballDy = 8;
		
		var ctx ;
		
		var img = new Image();
		img.src="./img/pear1.jpg";
		
		var grad ;
		
		var hue = [
			[255,0,0],
			[255,255,0],
			[0,255,0],
			[0,255,255],
			[0,0,255],
			[255,0,255]
		];
		function init()
		{
			ctx = document.getElementById("canvas").getContext("2d");
			ctx.lineWidth = ballRadius;
			
			grad = ctx.createLinearGradient(boxX,boxY,boxX+boxWidth,boxY+boxHeight);
			
			for(var h=0;h<hue.length;h++)
			{
				var color = "rgb("+hue[h][0]+","+hue[h][1]+","+hue[h][2]+")";
				grad.addColorStop(h/6,color);
			}
			
			ctx.fillStyle = grad;
			moveball();
			setInterval(moveball,30);	
		}
		
		function moveball()
		{
			// 清空画布
			ctx.clearRect(boxX,boxY,boxWidth,boxHeight);
			// 绘制墙体
			// 绘制左墙
			ctx.fillRect(boxX,boxY,ballRadius,boxHeight);
			// 绘制右墙
			ctx.fillRect(boxBoundRight,boxY,ballRadius,boxHeight);
			// 绘制上墙
			ctx.fillRect(boxX,boxY,boxWidth,ballRadius);
			// 绘制下墙
			ctx.fillRect(boxX,boxBoundBottom,boxWidth,ballRadius);
			//ctx.strokeRect(boxX,boxY,boxWidth,boxHeight);
			// 碰撞检测
			boundCheck();
			
			ctx.beginPath();
			// 绘制小球
			//ctx.arc(ballX,ballY,ballRadius,0,2 * Math.PI,true);
			ctx.drawImage(img,ballX-ballRadius,ballY-ballRadius,2 * ballRadius, 2 * ballRadius);
			ctx.fill();
			
			ctx.closePath();
		}
		
		function boundCheck()
		{
			// 计算小球的新位置
			var tmpBallX = ballX + ballDx;
			var tmpBallY = ballY + ballDy;
			
			// 到达左边界
			if(tmpBallX < boxBoundLeft)
			{
				ballDx = -ballDx;			// 改变水平移动的位置
				tmpBallX = boxBoundLeft;	// 小球水平的位置为左边界位置	
			}
			// 到达右边界
			if(tmpBallX > boxBoundRight)
			{
				ballDx = -ballDx;			// 改变水平移动的位置
				tmpBallX = boxBoundRight;	// 小球的水平位置为左边界位置		
			}
			// 到达上边界
			if(tmpBallY < boxBoundTop)
			{
				ballDy = -ballDy;			// 改变垂直移动的位置
				tmpBallY = boxBoundTop;		// 小球的垂直位置为上边界
			}
			// 到达下边界
			if(tmpBallY > boxBoundBottom)
			{
				ballDy = -ballDy;			// 改变垂直移动的位置
				tmpBallY = boxBoundButtom;	// 小球的垂直位置为下边界
			}
			
			ballX = tmpBallX;
			ballY = tmpBallY;
		}
		
		function change()
		{
			ballDx = Number(document.getElementById("hv").value);
			ballDy = Number(document.getElementById("vv").value);
			
			return false;	
		}
