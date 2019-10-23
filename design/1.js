class eventEntity {
    constructor() {
        this.eventEntity = {};
    }
    on(name,callback) {
        if(!this.eventEntity[name]){
            this.eventEntity[name] = [];
        }
        this.eventEntity[name].push(callback)
    }
    event(eventName) {
        this.eventEntity[eventName].forEach(callback => {
            callback()
        });
    }   
}

const eventBus = new eventEntity();

eventBus.on('test', () => {
    console.log('on test')
})


eventBus.event('test')