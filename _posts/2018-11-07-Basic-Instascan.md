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

<iframe id="instascanIframe" width="100%" height="500px;" src="/../assets/resources/html/instascan.html"></iframe>

<button id="onBtn" onClick="onInstascan();">켜기</button> 
<button id="offBtn" onClick="offInstascan();">끄기</button>
<button id="readBtn" onclick="readInstascan();">읽기</button>

<script type="text/javascript">
function onInstascan (){
	console.log('켜기');
	var istIframe = document.getElementById('instascanIframe');
	istIframe.contentWindow.onCamera();
}

function offInstascan (){
	console.log('끄기');
	var istIframe = document.getElementById('instascanIframe');
	istIframe.contentWindow.offCamera();
}

function readInstascan (){
	console.log('읽기');
	var istIframe = document.getElementById('instascanIframe');
	istIframe.contentWindow.readContent();
}

</script>

<div id="readView">
## 읽어드린 정보
</div>

