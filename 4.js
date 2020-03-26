
function TaskQueue() {
    this._queue = [];
    this.timer = null;
}

TaskQueue.prototype = {
    constructor: taskQueue,
    init: function() {
        this.timer = setInterval(function() {
            this._queue.forEach(task => {
                // 应该换成 时间的区间
                if(task.timestamp == +new Date()){
                    task.taskFun();
                }
            });
        })
    },
    add: function(taskFun, timestamp) {
        this._queue.push({
            taskFun,
            timestamp
        })
    },
    clear: function() {
        this.timer = null;
    }
}