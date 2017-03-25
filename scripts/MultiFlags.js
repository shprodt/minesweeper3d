var MultiFlags = function (n, func, cx) {
    var result = function () {
        number--;
        if (number == 0) {
            exec.apply(context);
        }
    };
    var number = n;
    var exec = func;
    var context = cx ? cx : (window ? window : (process ? process : this));
    return result;
};

if (module) module.exports = MultiFlags;