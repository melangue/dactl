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
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<video id="preview"></video>
<script type="text/javascript">
	let scanner = new Instascan.Scanner({ video: document.getElementById('preview'),  scanPeriod: 5 });
  	scanner.addListener('scan', function (content, image) {
    	$('#print').empty();
    	$('#print').empty('Scanning content: '+content);
  	});
  	Instascan.Camera.getCameras().then(function (cameras) {
	    if (cameras.length > 0) {
	    	scanner.start(cameras[1]);
	    } else {
	    	console.error('No cameras found.');
	    }
	}).catch(function (e) {
	    console.error(e);
	});
	
</script>
<div id="print"></div>

