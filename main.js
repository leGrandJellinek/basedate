let people = +prompt('Введите количество людей')


let basedate = {
}


for(let i = 1; i <= people; i++){
    basedate['user' + i] = {
        name: prompt('Введите имя'),
        age: +prompt('Введите возраст')
    }
}


for(let key in basedate){
    for(let newKey in basedate[key]){
        console.log(basedate[key][newKey]);
    }
}
