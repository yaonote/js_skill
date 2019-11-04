// 树的深度优先遍历
var data = {
    type: 'dir',
    name: '123',
    files: [{
        type: 'file',
        name: '1'
    }, {
        type: 'file',
        name: '2'
    }, {
        type: 'dir',
        name: '1',
        files: [{
            type: 'file',
            name: '3'
        }, {
            type: 'dir',
            name: '2',
            files: [{
                type: 'file',
                name: '4'
            }, {
                type: 'file',
                name: '5'
            }]
        }, {
            type: 'dir',
            name: '3',
            files: [{
                type: 'file',
                name: '6'
            }, {
                type: 'file',
                name: '7'
            },{
                type: 'dir',
                name: '2',
                files: [{
                    type: 'file',
                    name: '-1'
                }, {
                    type: 'file',
                    name: '-2'
                }]
            }]
        }]
    }]
}
const deep = (data,result = []) => {
    if(data.type === 'file'){
        result.push(data)
    }else if(data.type === 'dir'){
        data.files.forEach(file => {
            deep(file,result)
        });
    }
    return result
}
const res = deep(data);

/**
 * 感觉不太好 就是利用了引用类型可以改值的缺点还是用 promise 来写牛逼
 */
console.log('yao-coding  =>',JSON.stringify(res))