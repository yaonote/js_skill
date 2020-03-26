var obj = {
    foo: 'bar',
    func: function() {
        var self = this;
        console.log('1',this.foo)
        console.log('2',self.foo)
        ;(function() {
            console.log('3',this.foo)
            console.log('4',self.foo)
        })()
}}

obj.func()