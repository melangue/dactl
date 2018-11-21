---
layout: post
title:  "Html in svg evnet test"
tags:
  - svg
  - event
  - test
hero: /../assets/resources/img/test/background.png
overlay: purple
published: true

---
SVG 이벤트 touchstart와 touchend 를 이용해 만든 swpie 함수 테스트 
<!–-break-–>

<script>
	var arr = [
		'btn1',
		'btn2',
		'btn3'
	];
	
	var arrIdx = 0; 
	
	var touchStartPoint = {
		x : 0, 
		y : 0
	};
	
	var touchEndPoint = {
		x : 0, 
		y : 0
	};
	
	var swipe = function(s,e){
		
		console.log('start');
		console.log(s.x+', '+s.y);
		
		console.log('end');
		console.log(e.x+', '+e.y);
		
		var avsX = Math.abs(s.x - e.x);
		var avsY = Math.abs(s.y - e.y);
		
		if(avsX > avsY){
			//x 방향으로 스와이프
			if(s.x > e.x){
				//엔드가 크면 오른쪽 , 작으면 왼쪽 
				console.log('왼쪽으로 스와이프');
				alert('←');
			}else{
			
				console.log('오른쪽으로 스와이프');
				alert('→');
			}
			
			
		}else{
			//y 방향으로 스와이프
			if(s.y > e.y){
				//엔드가 크면 아래 , 작으면 왼쪽 
				console.log('위쪽으로 스와이프');
				console.log('s.y:'+s.y);
				console.log('e.y:'+e.y);
				alert('↑');
			}else{
				console.log('아래쪽으로 스와이프');
				console.log('s.y:'+s.y);
				console.log('e.y:'+e.y);
				alert('↓');
			}
		}
		
		console.log('시작점 x 좌표 차이:'+(s.x - e.x));
		console.log('시작점 y 좌표 차이:'+(s.y - e.y));

	};
	
	$( window ).on( "load", function() {
		var object  = document.getElementById("svgObj");
		console.log(object);
		var svgDoc = object.contentDocument;
		var background = svgDoc.getElementById("background");
		console.log(background);
		
		background.setAttribute("fill", "yellow");
		
		background.addEventListener("click", function(){
			$('body').append('<p>마우스 클릭</p>');
		});
		
		background.addEventListener("mousemove", function(){
			console.log('mouse move');
			$('body').append('<p>마우스 움직임</p>');
		});
		
		background.addEventListener("SVGScroll", function(){
			console.log('SVGScroll');
			$('body').append('<p>마우스 스크롤</p>');
		});
		
		background.addEventListener("touchstart", function(e){
			console.log('touchstart');
			console.log(e);
			touchStartPoint.x = e.changedTouches[0].clientX; 
			touchStartPoint.y = e.changedTouches[0].clientY; 
			
			console.log(touchStartPoint);
			
			$('body').append('<p>터치 스타트</p>');
		});
		
		background.addEventListener("touchend", function(e){
			console.log('touchend');
			console.log(e);
			
			touchEndPoint.x = e.changedTouches[0].clientX; 
			touchEndPoint.y = e.changedTouches[0].clientY; 
			
			console.log(touchEndPoint);
			swipe(touchStartPoint, touchEndPoint);
			
			$('body').append('<p>터치 엔드</p>');
		});
		
		background.addEventListener("ouchenter", function(){
			console.log('ouchenter');
			$('body').append('<p>터치 엔터</p>');
		});
		
		background.addEventListener("touchleav", function(){
			console.log('touchleav');
			$('body').append('<p>터치 리브</p>');
		});
		
		background.addEventListener("touchEnter", function(){
			console.log('touchEnter');
			$('body').append('<p>터치 큰엔터</p>');
		});
		
		background.addEventListener("touchLeav", function(){
			console.log('touchLeav');
			$('body').append('<p>터치 큰엔터</p>');
		});
		
		background.addEventListener("touchmove", function(e){
			
			$('body').append('<p>터치 무브</p>');
		});
		
		background.addEventListener("touchmovup", function(e){
			console.log('touchmoveup');
			$('body').append('<p>터치 무브</p>');
		});
		
	});
	
	function colorChange(btnsObj, btnObj){
		btnsObj.css('background-color', 'gray');
		btnObj.css('background-color', 'red');
	}
	
</script>

<object id="svgObj" width="800" height="600"  type="image/svg+xml" data="/../assets/resources/file/ARS2018299914467.svg" ></object>
<h1 id="result">스와이프를 해주세요.</h1>
