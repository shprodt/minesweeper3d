findParentBefore = function (father, obj) {
    let current = obj;
    while (current.parent) {
        if (current.parent == father) {
            //console.dir(current);
            return current;
        }
        current = current.parent;
    }
    console.warn('The parent is not found');
};
if (module)module.exports = findParentBefore;