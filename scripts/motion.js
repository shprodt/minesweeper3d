var Motion = function (object, property, parameters) {
    this.x = object[property];
    this.object = object;
    this.property = property;
    this.stopped = true;
    this.lastTime = 0;
    this.V = 0;
    this.E = 0;
    this.t = 0;
    this.dt = 2;
    if (parameters) {
        this.T1 = parameters.T1;
        this.T2 = parameters.T2;
    } else {
        this.T2 = 0;
        this.T1 = 0.5;
    }
    this.stop = function () {
        this.V = 0;
        this.E = 0;
        this.stopped = true;
    };
    this.checkStopCondition = function (toPoint) {
        if (Math.abs(this.x - toPoint) < 0.01 && Math.abs(this.V) < 0.05) {
            this.x = toPoint;
            this.apply(toPoint);
            this.V = 0;
            this.stopped = true;
        }
    };
    this.apply = function () {
        this.object[this.property] = this.x;
    };
    this.checkStanding = function () {
        if (this.stopped == true) {
            this.stopped = false;
            this.lastTime = this.t;
        }
    };
    this.step = function (toPoint) {
        if (this.object[this.property] != toPoint) {
            this.t = (new Date()).getTime();
            this.checkStanding();
            if (this.T2 == 0) {
                this.de1(toPoint);
            } else {
                this.de2(toPoint);
                this.speedStep();
            }
            this.lineStep();
            this.checkStopCondition(toPoint);
            this.lastTime = this.t;
            this.apply();
        }
    };
    this.stepFixed = function (toPoint) {
        if (this.object[this.property] != toPoint) {
            if (this.stopped) this.t = (new Date()).getTime();
            this.checkStanding();
            while (((new Date()).getTime() - this.t) > 2 * this.dt) {
                this.t = this.lastTime + this.dt;
                if (this.T2 == 0) {
                    this.de1(toPoint);
                } else {
                    this.de2(toPoint);
                    this.speedStep();
                }
                this.lineStep();
                this.checkStopCondition(toPoint);
                this.lastTime = this.t;
                this.apply();
            }
        }
    };
    this.de2 = function (toPoint) {
        this.E = (toPoint - this.x - this.T1 * this.V) / Math.pow(this.T2,2);
    };
    this.speedStep = function () {
        this.V = this.V + this.E * (this.t - this.lastTime) / 1000;
    };
    this.de1 = function (toPoint) {
        this.V = (toPoint - this.x) / this.T1;
    };
    this.lineStep = function () {
        this.x = this.x + this.V * (this.t - this.lastTime) / 1000;
    }
};

var MotionGroup = function (object, properties, parameters) {
    this.motions = [];
    this.add = function (object, property, parameters) {
        this.motions.push(new Motion(object, property, parameters));
    };
    if (object && properties && parameters) {
        for (let i = 0; i < properties.length; i++) {
            this.add(object, properties[i], parameters);
        }
    }
    this.stepFixed=function (toPoints) {
        this.motions.forEach(function (motion, i) {
            motion.stepFixed(toPoints[i]);
        });
    };
    this.step=function (toPoints) {
        this.motions.forEach(function (motion, i) {
            motion.step(toPoints[i]);
        });
    };
};
if(module) module.exports=MotionGroup;