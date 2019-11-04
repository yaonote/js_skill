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


const test = (data,action = console.log) => {
    let _stack = [];
    if(data.type === 'dir'){
        data.files.forEach(element => {
            _stack.push(element)
        });
    }
    while(_stack.length){
        let _curr = _stack.shift();
       _curr.type === 'file' &&  action(_curr.name);
        if(_curr.files){
            _stack = _curr.files.concat(_stack)
        }
    }
}

test(data)