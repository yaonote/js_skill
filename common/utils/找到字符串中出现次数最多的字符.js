let str = 'sid0foklweoioii*3lksjoslksd;oslk;a;lkd0jsocv';

function test(str) {
    let arr = [];
    let obj = {};
    let maxNum = 0;
    let result = [];
    arr = str.split("");
    arr.forEach((element) => {
        if (obj[element]) {
            obj[element] = obj[element] + 1;
        } else {
            obj[element] = 1;
        }
    });

    for (let key in obj) {
        if (obj[key] > maxNum) {
            maxNum = obj[key];
        }
    }

    for (let key in obj) {
        if (obj[key] == maxNum) {
            result.push({
                key: key,
                count: maxNum,
            });
        }
    }
    return result;
}
console.log(test(str));
