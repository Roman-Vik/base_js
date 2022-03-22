// написать функцию которая из массива делает объект.
// Задание 1
// const obj = {
//     name1: 1,
//     name2: 2,
//     name3: 3,
//     name4: 4,
// }

/*const convertToAnObject = (arr) => {
    const obj = arr.map(i => ["name"+i, i])
        return Object.fromEntries(obj)
}
console.log(convertToAnObject([1, 2, 3, 4],))*/

/*const filterArr = (arr) => {
const newArr =  arr.map(item => {
    let key = "name" + item
    return[key: key}]
}
)

const obj = {...arr, name:"rr"}


    return newArr
}
console.log(filterArr(arr))*/
/*====================================================*/

// const arr = [3,7,3,4]
// const obj = {
//     name1: 3,
//     name2: 7,
//     name3: 3,
//     name4: 4,
// }
/*const convertToAnObject = (arr,) => {
    const obj = arr.map((item, i) => ["name" + ++i, item])
    return Object.fromEntries(obj)
}
console.log(convertToAnObject([3,7,3,4]))*/
/*===================================================================*/

// задание 2

// const arr = [3,7,2,4]
// const obj = {
//     name3: 3,
//     name7: 7,
//     name2: 2,
//     name4: 4,
// }
/*const convertToAnObject = (arr) => {
    const obj = arr.map(item => ["name"+item, item])
    return Object.fromEntries(obj)
}
console.log(convertToAnObject([3,7,2,4]))*/
/*=========================================================*/

/*const convertToAnObject = (arr) => {
    return arr
}
console.log(convertToAnObject([3,7,3,4]))*/

// задание 3
// const arr = [3,7,3,4]
// const obj = {
//     name3: 3,
//     name7: 7,
//     name4: 4,
// }
/*const convertToAnObject = (arr) => {
    let unique = [...new Set(arr)].map(item => ['name' +item, item])
    return Object.fromEntries(unique)
}
console.log(convertToAnObject([3,7,3,4]))*/
/*=======================================================================*/


// задание 4
// Из массива сделать объект который найдет количество совпадений
/*const classList = [
    {
        name: 'alex',
    },
    {
        name: 'roman',
    },
    {
        name: 'anna',
    },
    {
        name: 'alex',
    },
    {
        name: 'alex',
    },
    {
        name: 'roman',
    },
]*/
//
// const obj = {
//     alex: 3,
//     roman: 2,
//     anna: 1,
// }
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
// const convertToAnObject = (arr) => {
//     const arrValue = arr.map(item => item.name) // 5 элем
//     const unicalArr = [...new Set(arrValue)].map(item => [item,])// уникальные
//     let state = []
//
//     arrValue.forEach(item => {
//         console.log(item)
//         switch (item) {
//             case "roman":
//                 break;
//             case 'anna':
//                 unicalArr.push([item])
//             case 'alex':
//                 unicalArr.push([item])
//         }
//     })
//
//
//     //инстинкт
//     // let namesAlex = arrValue.match(/(alex)alex/g)
//     // let namesRoman = arrValue.match(/(roman)/g).length;
//     // let namesAnna = arrValue.match(/(anna)/g).length;
//     // уникальные
//
//
//     return 'test test'
// }
// console.log(convertToAnObject([
//     {
//         name: 'alex',
//     },
//     {
//         name: 'roman',
//     },
//     {
//         name: 'anna',
//     },
//     {
//         name: 'alex',
//     },
//     {
//         name: 'alex',
//     },
//     {
//         name: 'roman',
//     },
// ]))
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/

const convertToAnObject = (arr) => {
    const arrValue = arr.map(item => item.name) // 5 элем
    const names = {};
    arrValue.forEach(item => {
        names[item] = (names[item] || 0) +1
    });
    return names;

}
console.log(convertToAnObject([
    {
        name: 'alex',
    },
    {
        name: 'roman',
    },
    {
        name: 'anna',
    },
    {
        name: 'alex',
    },
    {
        name: 'alex',
    },
    {
        name: 'roman',
    },
]))



