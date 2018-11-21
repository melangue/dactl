---
layout: post
title:  "Html svg evnet test"
tags:
  - svg
  - event
  - test
hero: /../assets/img/test/background.png
overlay: red
published: true

---
Html으로 불러온 svg에서 svg관련 event가 동작하는지 테스트 
<!–-break-–>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://code.jquery.com/mobile/1.5.0-alpha.1/jquery.mobile-1.5.0-alpha.1.min.js"></script>

<script>
	var arr = [
		'btn1',
		'btn2',
		'btn3'
	];
	
	var arrIdx = 0; 
	$( window ).on( "load", function() {
		var object  = document.getElementById("svgObj");
		console.log(object);
		var svgDoc = object.contentDocument;
		var background = svgDoc.getElementById("background");
		console.log(background);
		
		background.setAttribute("fill", "yellow");
		
		background.addEventListener("click", function(){
			console.log('mouse move');
			$('body').append('<p>마우스 클릭</p>');
			alert('클릭');
		});
		
		background.addEventListener("mousemove", function(){
			console.log('mouse move');
			$('body').append('<p>마우스 움직임</p>');
			alert('움직임');
		});
		
		background.addEventListener("SVGScroll", function(){
			console.log('SVGScroll');
			$('body').append('<p>마우스 스크롤</p>');
			alert('스크롤');
		});
		
	});
	
	function colorChange(btnsObj, btnObj){
		btnsObj.css('background-color', 'gray');
		btnObj.css('background-color', 'red');
	}
	
</script>
<style>
	#background{
		width: 100%;
		height: 500px;
		background-color: antiquewhite;
	}

	.btn{
		width: 50%;
		height: 50px;
		background-color: gray;
		position: relative;
		left: 120px;
	}

	#btn1{
		top: 100px;
	}

	#btn2{
		top: 200px;
	}

	#btn3{
		top: 300px;
	}
</style>

<object id="svgObj" width="100%" height="600"  type="image/svg+xml" data="/../assets/resources/file/ARS2018299914467.svg" ></object>
