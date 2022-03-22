//new Promise(executor) исполнитель

/*//1.1 Это был пример успешно выполненной задачи, в результате мы получили «успешно выполненный» промис.
const promise = new Promise(function (resolve, reject){ //resolve и reject — это функции, встроенные в JavaScript,
    // поэтому нам не нужно их писать. Нам нужно лишь позаботиться, чтобы исполнитель вызвал одну из них по готовности.
    setTimeout(()=> console.log('done'), 3000)
})*/

/*//1.2 пример, в котором исполнитель сообщит, что задача выполнена с ошибкой:
const promise = new Promise(function (resolve, reject){
    setTimeout(()=> reject(new Error('Whoops!')), 1000) // 'эми
})*/

/*//1.3Может быть что-то одно: либо результат, либо ошибка

const promise = new Promise(function (resolve, reject){
    resolve(setTimeout(()=> console.log("DONE")))

    reject(new Error('???')) //Вызывайте reject с объектом Error
    setTimeout(()=> new Error('&&&') )
})*/

/*Свойства state и result – внутренние
Свойства state и result – это внутренние свойства объекта Promise и мы не имеем к ним прямого доступа.
 Для обработки результата следует использовать методы .then/.catch/.finally, про них речь пойдёт дальше.*/
//1.4 Потребители: then, catch, finally
/*
const promise = new Promise(function (resolve, reject){

    setTimeout(()=> resolve('Сделано'), 2000)
})
promise.then(
    result => alert(result),
    err => alert(err),
)*/

/*
const errPromise = new Promise(function (resolve, reject){
    setTimeout(()=> reject(new Error('Woops!!!')), 1500)
})
errPromise.then(
    result => alert(result),
    err => alert(err),
)*/

/* //Catch
 //Если мы заинтересованы только в результате успешного выполнения задачи, то в then можно передать только одну функцию:
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Ошибка!")), 1000);
});

// .catch(f) это то же самое, что promise.then(null, f)
promise.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду*/


// Finally