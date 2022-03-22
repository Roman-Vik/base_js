/*setTimeout*/
/* 1.1
const sayHi = (name, age, phone) => {
    alert(name + " " + age + " " + phone)
}
setTimeout(sayHi, 2000, 'Roman', 18, "phone: 55-22-33") // 1:funk, 2 время, 3 аргументы*/
/*Если первый аргумент является строкой, то JavaScript создаст из неё функцию.*/
// setTimeout("alert('Привет')", 1000);
// Но использование строк не рекомендуется. Вместо этого используйте функции.
//setTimeout(() => alert('Привет'), 1000);

/*//1.2 Вложенный setTimeout //Вложенный setTimeout гарантирует фиксированную задержку.
let timeId = setTimeout((function tick(){
    console.log('тик-так')
    timeId = setTimeout(tick, 1000)
}), 1000)*/

/*//1.3 Вложенный setTimeout с условием
let delay = 1000
let timeId = setTimeout(function request() {
    console.log("...отправить запрос...")
    if (2 < 3) {
        console.log("...отправить запрос через...",delay++ )
        delay *= 1
    } else {
        console.log("...отправить запрос через...",delay++  )
        delay *= 2
    }
    timeId = setTimeout(request, delay)
}, delay)*/

/*
//1.4 setTimeout с нулевой задержкой
setTimeout(() => console.log("Мир"));
console.log("Привет");
*/

/* //1.5 Минимальная задержка вложенных таймеров в браузере

let start = Date.now()
let times = []

setTimeout(function run(){
    times.push(Date.now() - start)

    if(start + 100 < Date.now()) console.log(times); else setTimeout(run)
})*/

/*Браузер ограничивает 4-мя мс минимальную задержку между пятью и более вложенными вызовами setTimeout,
    а также для setInterval, начиная с 5-го вызова.
    Обратим внимание, что все методы планирования не гарантируют точную задержку.

    Например, таймер в браузере может замедляться по многим причинам:

    Перегружен процессор.
    Вкладка браузера в фоновом режиме.
    Работа ноутбука от аккумулятора.
    Всё это может увеличивать минимальный интервал срабатывания таймера (и минимальную задержку)
до 300 или даже 1000 мс в зависимости от браузера и настроек производительности ОС.*/
