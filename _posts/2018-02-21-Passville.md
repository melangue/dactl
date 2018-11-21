---
layout: post
title:  "Html svg evnet test"
tags:
  - Portfolio
hero: /../assets/resources/img/pass/img4.png
overlay: red
published: true

---
하이브리드 웹 앱 문제풀이, 패스빌
<!–-break-–>

<div class="container">
	<div id="slides">
		<img src="{{ site.url }}/assets/resources/img/pass/img.png" alt="1">
		<img src="{{ site.url }}/assets/resources/img/pass/img2.png" alt="2">
		<img src="{{ site.url }}/assets/resources/img/pass/img3.png" alt="3">
		<img src="{{ site.url }}/assets/resources/img/pass/img4.png" alt="4">
		<img src="{{ site.url }}/assets/resources/img/pass/img5.png" alt="5">
		<img src="{{ site.url }}/assets/resources/img/pass/img6.png" alt="6">
		<img src="{{ site.url }}/assets/resources/img/pass/img7.png" alt="7">
		<img src="{{ site.url }}/assets/resources/img/pass/img8.png" alt="8">
		<img src="{{ site.url }}/assets/resources/img/pass/img9.png" alt="9">
		<img src="{{ site.url }}/assets/resources/img/pass/img10.png" alt="10">
		<img src="{{ site.url }}/assets/resources/img/pass/img11.png" alt="11">
		<img src="{{ site.url }}/assets/resources/img/pass/img12.png" alt="12">
		<img src="{{ site.url }}/assets/resources/img/pass/img13.png" alt="13">
		<img src="{{ site.url }}/assets/resources/img/pass/img14.png" alt="14">
		<img src="{{ site.url }}/assets/resources/img/pass/img15.png" alt="15">
		<img src="{{ site.url }}/assets/resources/img/pass/img16.png" alt="16">
		<img src="{{ site.url }}/assets/resources/img/pass/img17.png" alt="17">
		<img src="{{ site.url }}/assets/resources/img/pass/img18.png" alt="18">
	</div>
</div>

<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="{{ site.url }}/assets/slider/js/jquery.slides.min.js"></script>
<script>
	$(function() {
		$('#slides').slidesjs({
        width: 940,
        height: 528,
        play: {
        		active: true,
          		auto: true,
          		interval: 1000,
          		swap: true
        	}
      	});
    });
</script>

자격증 문제풀이 앱 패스빌 

<h3>구현기능</h3>
<ol>
  <li>문제풀이</li>
  <li>모의고사</li>
  <li>오답노트</li>
  <li>문자발송 연동</li>
</ol>

<figure>
	<iframe width="388" height="585" src="https://www.youtube.com/embed/x79gUNFlBBE" frameborder="0" allowfullscreen></iframe>
 	<figcaption>패스빌(Passville) 구동</figcaption>   
</figure>
