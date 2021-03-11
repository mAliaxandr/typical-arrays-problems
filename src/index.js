
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
    console.log('max ---', array);
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
  return 0;
}

exports.avg = function avg (array) {
    console.log('avg ---', array);
  return 0;
}
