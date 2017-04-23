var orbitCamera = {};
orbitCamera.update = function () {
    orbitCamera.camera.position.x = Math.cos(orbitCamera.fi) * Math.cos(orbitCamera.fi2) * orbitCamera.r + orbitCamera.target.x;
    orbitCamera.camera.position.z = Math.sin(orbitCamera.fi) * Math.cos(orbitCamera.fi2) * orbitCamera.r + orbitCamera.target.z;
    orbitCamera.camera.position.y = Math.sin(orbitCamera.fi2) * orbitCamera.r + orbitCamera.target.y;
    if (orbitCamera.lookAt) orbitCamera.camera.lookAt(orbitCamera.target);
};
orbitCamera.reset = function (camera, target) {
    let Rxz = Math.pow((Math.pow(camera.position.z - target.z, 2) + Math.pow(camera.position.x - target.x, 2)), 1 / 2);
    orbitCamera.r = Math.pow((Math.pow(camera.position.z - target.z, 2) + Math.pow(camera.position.x - target.x, 2) + Math.pow(camera.position.y - target.y, 2)), 1 / 2);
    orbitCamera.fi = (camera.position.x - target.x) > 0 ? Math.asin((camera.position.z - target.z) / Rxz) : Math.PI - Math.asin((camera.position.z - target.z) / Rxz);
    orbitCamera.fi2 = (camera.position.y - target.y) < 0 ? -Math.acos(Rxz / orbitCamera.r) : Math.acos(Rxz / orbitCamera.r);
    //orbitCamera.fi2 = Math.abs(orbitCamera.fi2) <= Math.PI / 2 - 0.2 ? orbitCamera.fi2 : Math.PI / Math.sign(orbitCamera.fi2) * (Math.PI/2 - 0.2);
};
orbitCamera.init = function (element, camera, target, lookAt) {
    orbitCamera.lookAt = lookAt;
    orbitCamera.target = target;
    orbitCamera.camera = camera;
    orbitCamera.reset(camera, target);
    element.oncontextmenu = function () {
        event.preventDefault();
    };
    element.onmousedown = function (event) {
        event.preventDefault();
        if (event.which == 3) {
            element.onmousemove = function (event) {
                orbitCamera.fi += (event.movementX) / 100;
                //orbitCamera.fi2 = orbitCamera.fi2 + (event.movementY) / 100;
                orbitCamera.fi2 = Math.abs(orbitCamera.fi2 + (event.movementY) / 100) <= Math.PI / 2 - 0.2 ? orbitCamera.fi2 + (event.movementY) / 100 : orbitCamera.fi2;
                orbitCamera.update();
            }
        }
    };
    element.onmouseup = function () {
        element.onmousemove = function () {
        }
    };
    element.onmousewheel = function (event) {
        event.preventDefault();
        orbitCamera.r = orbitCamera.r + event.deltaY / 40 >= 5 ? orbitCamera.r + event.deltaY / 40 : 5;
        orbitCamera.update();
    };
};

if (module) module.exports = orbitCamera;