// const ppx = "learn"
const ppx = process.argv[1]
console.log('process.argv',process.argv);

if(ppx  == "learn"){
    console.log(" It is good learning");
}else{
    console.log(`is ${ppx} not already`);
}

