let person = [
    { id: 0, name: '小明' },
    { id: 1, name: '小张' },
    { id: 2, name: '小李' },
    { id: 3, name: '小明' },
    { id: 4, name: '小周' },
    { id: 2, name: '小明' },
];

function delReapt(arr, key) {
    let obj = {};
    return arr.reduce((acc, cur) => {
        return obj[cur[key]] ? acc : (obj[cur[key]] = true && [...acc, cur]);
    }, []);
}

console.log(JSON.stringify(delReapt(person, 'id')));
