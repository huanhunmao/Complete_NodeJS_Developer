const {
    isMainThread,
    workerData,
    Worker
} = require('worker_threads')

if(isMainThread) {
    console.log(`Main thread! Process ID: ${process.pid}`);
    new Worker(__filename,{
        workerData: [7,61,21,3] // 排大数字 不靠谱
    })
    new Worker(__filename,{
        workerData: [3,71,6,5]
    })
}else{
    console.log(`Worker! Process ID: ${process.pid}`);
    console.log(`${workerData} sorted is ${workerData.sort((a,b) => a - b)}`);
}