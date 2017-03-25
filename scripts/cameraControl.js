var update = function (fi, fi2, r, camera, target, lookAt) {
    camera.position.x = Math.cos(fi) * Math.cos(fi2) * r + target.x;
    camera.position.z = Math.sin(fi) * Math.cos(fi2) * r + target.z;
    camera.position.y = Math.sin(fi2) * r + target.y;
    if (lookAt) camera.lookAt(target);
};
if(module) module.exports = function (element, camera, target, lookAt) {
    element.oncontextmenu = function () {
        event.preventDefault();
    };
    var elem = {};
    elem.r = Math.pow((Math.pow(camera.position.z - target.z, 2) + Math.pow(camera.position.x - target.x, 2) + Math.pow(camera.position.y - target.y, 2)), 1 / 2);
    elem.fi = Math.atan((camera.position.z - target.z) / (camera.position.x - target.x)) != Math.atan((camera.position.z - target.z) / (camera.position.x - target.x)) ? Math.PI / 2 : Math.atan((camera.position.z - target.z) / (camera.position.x - target.x));
    elem.fi2 = Math.atan((camera.position.y - target.y) / (camera.position.x - target.x)) != Math.atan((camera.position.y - target.y) / (camera.position.x - target.x)) ? Math.PI / 2 : Math.atan((camera.position.y - target.y) / (camera.position.x - target.x));
    elem.fi2 = Math.abs(elem.fi2) <= Math.PI / 2 - 0.001 ? elem.fi2 : Math.PI / Math.sign(elem.fi2) * (2 - 0.001);

    element.onmousedown = function (event) {
        event.preventDefault();
        if (event.which == 3) {
            element.onmousemove = function (event) {
                elem.fi += (event.movementX) / 100;
                elem.fi2 = Math.abs(elem.fi2 + (event.movementY) / 100) <= Math.PI / 2 - 0.001 ? elem.fi2 + (event.movementY) / 100 : elem.fi2;
                update(elem.fi, elem.fi2, elem.r, camera, target, lookAt);
            }
        }
    };
    element.onmouseup = function () {
        element.onmousemove = function () {
        }
    };

    element.onmousewheel = function (event) {
        event.preventDefault();
        elem.r = elem.r + event.deltaY / 40 >= 5 ? elem.r + event.deltaY / 40 : 5;
        update(elem.fi, elem.fi2, elem.r, camera, target, lookAt);
    };
    
};

