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

const flat = (data) => {
    return data.type === 'dir'
        ? flatTree(data)
        : Promise.resolve([data])
}

const flatTree = (data) => {
    return Promise.all(data.files.map(flat)).then(res => {
        return res.reduce((acc,curr) => {
            return [...acc,...curr]
        },[])
    })
}

flat(data).then(res => {
    console.log('yao-coding res =>',JSON.stringify(res))
})