const doSomethingAsync =() =>{
    return new Promise((resolve,reject)=> {
        (true)
            ? setTimeout(()=> resolve('Do Something Async'),3000)
            :reject ( new Error('TEST error '))
    });
}

const doSomenthing = async() => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomenthing();
console.log('after');


const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error){
        console.error(error)
    }

}
console.log('Before1');
anotherFunction();
console.log('after1');