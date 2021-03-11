
exports.min = function min (array) {
    if (array) {
        if (array.length == 0) {
            return 0
        }
        const arr = array;
        let result = arr[0];
        arr.forEach( i => {
            if (i < result) {
                result = i;
            }
        })
         return result;
    }
    return 0;  
}

exports.max = function max (array) {
    if (array) {
        if (array.length == 0) {
            return 0
        }
        const arr = array;
        let result = arr[0];
        arr.forEach( i => {
            if (i > result) {
                result = i;
            }
        })
         return result;
    }
    return 0;  
}

exports.avg = function avg (array) {
    console.log('avg ---', array);
    if (array) {
        if (array.length == 0) {
            return 0
        }
        const arr = array;
        let result = 0;
        arr.forEach( i => {
            result = result + i;
        })
         return result / arr.length;
    }
    return 0;  
}
