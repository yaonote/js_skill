

class UploadTool{
    constructor() {
        this.callback = null;
        this.data = null;
    }

    uploadStart(data,callback) {
        this.data = data;
        this.callback = callback;

        setTimeout(() => {
            this.uploadSuccess();
        },500)
    }

    uploadSuccess() {
        this.callback(this.data)
    }
}

const uploadTool = new UploadTool();

uploadTool.uploadStart({fileId: 1},function(data) {
    console.log(data)
})
uploadTool.uploadStart({fileId: 2},function(data) {
    console.log(data)
})