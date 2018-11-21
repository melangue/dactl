---
layout: post
title:  "Grid Plane"
tags:
  - Threejs
hero: /../assets/resources/lib/threejs/screenshot/gridPlane.png
overlay: red
published: true

---
Threejs grid plane example test 
<!–-break-–>

<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="/../assets/resources/lib/threejs/build/three.js"></script>
<script type="text/javascript" src="/../assets/resources/lib/threejs/js/Detector.js"></script>
<script type="text/javascript" src="/../assets/resources/lib/threejs/js/libs/stats.min.js"></script>
<script src="/../assets/resources/lib/threejs/js/controls/TransformControls.js"></script>
<script src="/../assets/resources/lib/threejs/js/controls/OrbitControls.js"></script>
<script src="/../assets/resources/lib/threejs/js/libs/dat.gui.min.js"></script>

<style type="text/css">
#threejsView > div > canvas{
	width:100% !important;
	height: 500px !important;
}
</style>

<div id="threejsView"></div>
<script type="text/javascript">
	if(!Detector.webgl){
		Detector.addGetWebGLMessage();
	}
	var container, camera, scene, renderer, boxMesh;
	var transformControl; 	//트랜스폼 컨트롤러 
	var stats; 
	var params = {
			xRotate : false,
			yRotate : false,
			zRotate : false
	}
	function onWindowResize(){
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}
	//초기화 함수 
	function init(){
		container = document.createElement('div');
		container.style.width = '100%';
		$('#threejsView').append(container);
		// stats 
		stats = new Stats(); 								//stats 객채 생성 
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.position = 'relative !important';
		stats.domElement.style.position = 'fit-content';
		stats.domElement.style.top = $('.post').offset().top;
		container.appendChild(stats.dom);		//container에 stats dom append
		//카메라 
		camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.set(500,800,1300);
		camera.lookAt(new THREE.Vector3());
		//씬
		scene = new THREE.Scene();
		scene.background = new THREE.Color(0xf0f0f0);
		//그리드 
		var gridHelper = new THREE.GridHelper(1000, 20);
		scene.add(gridHelper);	
		//지오메트리 
		var geometry = new THREE.PlaneBufferGeometry(1000, 1000);
		geometry.rotateX(-Math.PI/2);
		//박스 생성
		var boxTexture = new THREE.TextureLoader().load('/../assets/resources/lib/threejs/textures/crate.gif');		//박스 텍스쳐 가져오기 
		var boxGeometry = new THREE.BoxBufferGeometry(200, 200, 200);																						//박스 지오메트리
		var boxMaterial  = new THREE.MeshBasicMaterial({map:boxTexture});																				//박스 메터리얼
		boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
		scene.add(boxMesh);
		//바닥 메시 생성 
		plane = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({visible:false}));
		scene.add(plane);
		//directional Light 조명 
		var directionalLight = new THREE.DirectionalLight(0xffffff);
		directionalLight.position.set(1,0.75,0.5).normalize();
		scene.add(directionalLight);
		//랜더러
		renderer = new THREE.WebGLRenderer({antialias:true});
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize($('.post').innerWidth(), $('.post').innerWidth() * 2);
		container.appendChild(renderer.domElement);
		//TransformControls 생성
		transformControl = new THREE.TransformControls(camera, renderer.domElement);
		transformControl.addEventListener('change', render);
		scene.add(transformControl);
		//OrbitControls 생성 - 마우스 조작 컨트롤러
		var controls = new THREE.OrbitControls(camera, renderer.domElement);
		controls.damping = 0.2;
		transformControl.attach(boxMesh);
		//GUI 생성 
		var gui = new dat.GUI();
		gui.add(params, 'xRotate');
		gui.add(params, 'yRotate');
		gui.add(params, 'zRotate');
		gui.domElement.id = gui;
		console.log(gui);
		gui.open();
		//윈도우 리사이즈 이벤트 리스너 등록
		window.addEventListener('resize', onWindowResize, false);
	}
	// 그리기 함수 
	function render(){
		renderer.render(scene,camera);
	}
	function animate(){
		requestAnimationFrame(animate);
		if(params.xRotate){
			boxMesh.rotation.x += 0.01;	
		}
		if(params.yRotate){
			boxMesh.rotation.y += 0.01;	
		}
		if(params.zRotate){
			boxMesh.rotation.z += 0.01;	
		}
		renderer.render(scene,camera);
		stats.update();
		transformControl.update();
	}
	init();
	animate();
</script>