var dat = require('./../node_modules/dat.gui/build/dat.gui.min.js');
var cameraControl = require('./cameraControl.js');
var Motion = require('./motion.js');
var MineCore = require('./MineCore.js');
var MultiFlags = require('./MultiFlags.js');
var findParentBefore = require('./findParentBefore');
var div = document.getElementById('canvas_container');

var canvas = document.getElementById('canvas3d');
var global = window;
var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize(global.innerWidth, global.innerHeight);
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xbbbbbb);
var camera = new THREE.PerspectiveCamera(75, global.innerWidth / global.innerHeight, 0.1, 5000);
var target_camera = new THREE.PerspectiveCamera(75, global.innerWidth / global.innerHeight, 0.1, 5000);
camera.position.set(100, 100, 100);
target_camera.position.set(100, 100, 100);
var cameraMotion = new Motion(camera.position, ['x', 'y', 'z'], {T2: 0, T1: 0.2});
var ambient = new THREE.AmbientLight(0x444444);
scene.add(ambient);
var directionalLight = new THREE.DirectionalLight(0xffffff);
var directionalLight1 = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(-1, 1, 1).normalize();
directionalLight1.position.set(1, 1, 1).normalize();
scene.add(directionalLight, directionalLight);
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var intersects = [];
var a = 5, b = 5, c = 5;
var basis = 10;


var explode = function () {
    cube.children[0].material.opacity = 0.6;
    cube.children[0].material.transparent = true;
};
var win = function () {
    cubeMine.children[0].material.color.set(0x00ff00);
};
var cube = new THREE.Group();
var cubeMine = new THREE.Group();
var cubeLight = new THREE.Group();
var cubeMarker = new THREE.Group();
var indicator = new Array(26);
var mineObj = undefined;
var mines = undefined;

var mainScript = function () {
    var pickedGroup = new THREE.Group();
    pickedGroup.add(cubeLight, indicator[0]);
    //console.dir(pickedGroup);
    //scene.add(dot);
    var mineParameters = {
        explode: explode,
        win: win,
        a: a,
        b: b,
        c: c,
        group: scene,
        picked: pickedGroup,
        basic: cube,
        numbers: indicator,
        interval: basis,
        random: 10,
        marker: cubeMarker,
        mine: cubeMine
    };
    mines = new MineCore(mineParameters);
    var cameraTarget = mines.center;
    cameraControl(canvas, target_camera, cameraTarget);
    render();

};

function render() {
    raycaster.setFromCamera(mouse, camera);
    intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects[0]) {
        mines.pickCellOnPosition(findParentBefore(scene, intersects[0].object).position);
    }
    cameraMotion.stepFixed([target_camera.position.x, target_camera.position.y, target_camera.position.z]);
    camera.lookAt(mines.center);
    indicator[0].lookAt({x: camera.position.x, z: camera.position.z, y: 0});
    renderer.render(scene, camera);
    if (mines.question) {
        mines.question.children[1].rotation.y += 0.25;
        mines.question.children[1].rotation.x = 0;
        mines.question.children[1].rotation.z = 0;
    }

    requestAnimationFrame(render);
}

function onMouseMove(event) {
    mouse.x = ( event.clientX / global.innerWidth ) * 2 - 1;
    mouse.y = -( event.clientY / global.innerHeight ) * 2 + 1;
}
function onMouseClick(event) {
    mouse.x = ( event.clientX / global.innerWidth ) * 2 - 1;
    mouse.y = -( event.clientY / global.innerHeight ) * 2 + 1;
    intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects[0]) {
        if (!event.altKey) {
            mines.checkCellOnPosition(findParentBefore(scene, intersects[0].object).position);
        } else {
            mines.setMarkerOnPosition(findParentBefore(scene, intersects[0].object).position);
        }
    }
}

function onResize() {
    camera.aspect = global.innerWidth / global.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(global.innerWidth, global.innerHeight);
}
global.addEventListener('mousemove', onMouseMove, false);
global.addEventListener('click', onMouseClick, false);
global.addEventListener('resize', onResize, false);


var afterLoaders = new MultiFlags(4, mainScript, this);


//-----------------------------------LOADING MANAGERS---------------------------------//


var manager = new THREE.LoadingManager();
manager.onProgress = function (item, loaded, total) {
    console.log(item, loaded, total);
};
var onProgress = function (xhr) {
    if (xhr.lengthComputable) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log(Math.round(percentComplete, 2) + '% downloaded');
    }
};
var onError = function (xhr) {
};
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('/Rollermine/');
mtlLoader.texturePath = '/Rollermine/Texture/';
mtlLoader.load('Rollermine.mtl', function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load('./Rollermine/Rollermine.obj', function (object) {
        mineObj = object;
        afterLoaders();
    }, onProgress, onError);
});

new THREE.FontLoader(manager).load('../fonts/optimer_regular.typeface.json', function (res) {
    var font = {
        font: res,
        size: .6 * basis,
        height: .1 * basis,
        curveSegments: 10,
        bevelThickness: 1,
        bevelSize: 1,
        bevelEnabled: false
    };
    for (let i = 1; i < 10; i++) {
        let mesh = new THREE.Mesh(new THREE.TextGeometry(i, font), new THREE.MeshStandardMaterial());
        mesh.position.set(.3 * basis, .2 * basis, .5 * basis);
        mesh.material.color.set(0x66FF00);
        indicator[i] = new THREE.Group().add(mesh);
    }
    for (let i = 10; i < 26; i++) {
        let mesh = new THREE.Mesh(new THREE.TextGeometry(i, font), new THREE.MeshStandardMaterial());
        mesh.position.set(0.05 * basis, .2 * basis, .5 * basis);
        mesh.material.color.set(0x66FF00);
        indicator[i] = new THREE.Group().add(mesh);
    }
    mesh = new THREE.Mesh(new THREE.TextGeometry('?', font), new THREE.MeshStandardMaterial());
    mesh.position.set(.5 * basis, .2 * basis, .5 * basis);
    mesh.material.color.set(0xFFA100);
    indicator[0] = mesh;
    afterLoaders();
});

new THREE.TextureLoader().load("textures/crate_1.jpg", function (tex) {
    let box = new THREE.BoxGeometry(basis, basis, basis);
    let mesh = new THREE.Mesh(box, new THREE.MeshBasicMaterial({
        map: tex,
        transparent: false,
        opacity: 0.1,
        color: 0xE9B097
    }));
    mesh.position.set(basis / 2, basis / 2, basis / 2);
    cube.add(mesh);
    let mesh1 = new THREE.Mesh(box, new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 0.7,
        color: 0x005555
    }));
    mesh1.position.set(basis / 2, basis / 2, basis / 2);
    cubeLight.add(mesh1);
    let mesh2 = new THREE.Mesh(box, new THREE.MeshBasicMaterial({
        map: tex,
        transparent: false,
        opacity: 0.7,
        color: 0xff0000
    }));
    mesh2.position.set(basis / 2, basis / 2, basis / 2);
    cubeMine.add(mesh2);
    let mesh3 = new THREE.Mesh(box, new THREE.MeshBasicMaterial({
        map: tex,
        transparent: false,
        opacity: 0.7,
        color: "yellow"
    }));
    mesh3.position.set(basis / 2, basis / 2, basis / 2);
    cubeMarker.add(mesh3);
    afterLoaders();
});

new THREE.CubeTextureLoader().setPath('./cubemap/').load([
    'posx.jpg',
    'negx.jpg',
    'posy.jpg',
    'negy.jpg',
    'posz.jpg',
    'negz.jpg'
], function (res) {
    scene.background = res;
    afterLoaders();
});

//var Stats = require('./stats.min.js');
//var stats = new Stats();
//stats.showPanel(0);
//div.appendChild(stats.dom);
//stats.update();
