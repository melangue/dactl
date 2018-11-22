---
layout: post
title:  "Basic Instascan"
tags:
  - Portfolio
hero: /../assets/resources/img/ar/arCntentsPreview.png
overlay: red
published: true

---
Instascan.js 구동시켜 보기 
<!–-break-–>
<script type="text/javascript" src="/../assets/resources/lib/instascan/instascan.min.js"></script>
<video id="preview"></video>
<script type="text/javascript">
	let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
  	scanner.addListener('scan', function (content) {
    	console.log(content);
  	});
  	Instascan.Camera.getCameras().then(function (cameras) {
	    if (cameras.length > 0) {
	      scanner.start(cameras[0]);
	    } else {
	      console.error('No cameras found.');
	    }
	}).catch(function (e) {
	    console.error(e);
	});
	console.log(scanner);
	window.InstaScan = scanner;
</script>

