//1
let body = {
    tagName : "body",
    subTags : [
        {
            tagName : "div",
            subTags : [
                {
                    tagName : "span",
                    text : "Enter a data please:",
                },
                {
                    tagName : "br",
                },
                {
                    tagName : "input",
                    attrs : {
                        type : "text",
                        id : "name",
                    },
                },
                {
                    tagName : "input",
                    attrs : {
                        type : "text",
                        id : "surname",
                    },
                },
            ]
        },
        {
            tagName : "div",
            subTags : [
                {
                    tagName : "button",
                    attrs :{
                        id : "ok"
                    },
                    text : "OK",
                },
                {
                    tagName : "button",
                    attrs :{
                        id : "cancel"
                    },
                    text : "Cancel",
                },
            ]
        }
    ]
}

console.log(body.subTags[1].subTags[1].text)
console.log(body["subTags"][1]["subTags"][1]["text"])
console.log(body.subTags[0].subTags[3].attrs.id)
console.log(body["subTags"][0]["subTags"][3]["attrs"]["id"])

//2
var notebook = {
    brand: prompt("Enter a brand of notebook"),
    type: prompt("Enter a type of notebook"),
    model: prompt("Enter a model of notebook"),
    ram: Number(prompt("Enter a memory size of notebook")),
    size: prompt("Enter display size of the notebook"),
    weight: Number(prompt("Enter a weight of the notebook")),
    resolution: {
        width: Number(prompt("Enter display width resolution")),
        height: Number(prompt("Enter display height resolution")),
    },
};
var phone = {
    brand: prompt("Enter a brand of phone"),
    model: prompt("Enter a model of phone"),
    ram: Number(prompt("Enter a memory size of phone")),
    color: prompt("Enter a color of phone"),
};
var person = {
    name: prompt("Enter a name of person"),
    surname: prompt("Enter a surname of person"),
    married: confirm("Marital status: married or not?"),
}

//3
phone.owner=person
notebook.owner=person
person.smartphone= phone
person.laptop= notebook
console.log(person.smartphone.owner.laptop.owner.smartphone == person.smartphone)

//4
var array = []
array[0] = Number(prompt("Введите первый элемнент массива"))
array[1] = Number(prompt("Введите второй элемнент массива"))
array[2] = Number(prompt("Введите третий элемнент массива"))
console.log(array)

//5
let cycle
while (cycle !== true) {
    cycle = confirm("Для продолжения цикла нажмите отмена, для окончания цикла нажмите Ок")
} 

//6
let arr = []
let arrElement
while (true) {
    arrElement = prompt("Введите элемент массива")
    if (arrElement === null) {
        break;
    } arr.push(+arrElement)
}     

//7
let arr1 = []
let arrElement1
let i=0
while (true) {
    arrElement1 = prompt("Введите элемент массива")
    if (arrElement1 === null) {
        break;
    } arr1[i++] = +arrElement1
}

//8
let randomNumber
let countIterations = 0 
while (true) {
    randomNumber = Math.random()
    if (randomNumber > 0.9) {
        break
    } countIterations += 1
    console.log(randomNumber)
}
alert(`Количество итераций ${countIterations}`)    

//9
 let cyclePrompt
 for (cyclePrompt = prompt("Продолжение - отмена, окончание - Ок"); cyclePrompt !== ""; cyclePrompt = prompt("Продолжение - отмена, окончание - Ок")) {
 }

//10 
let n = +prompt("Введите число N, до которого необходимо подсчитать сумму арифметической прогрессии") 
let sum = 0
for (let g = 1; g <= n; g = g + 3) {
    sum = sum + g
}
console.log(sum)

//11
let j = 11
let str = ""
let m = (j + j % 2)/2
for (m; m > 0; m--){
    str += " "
    if ((m === 1) && (j % 2) === 1) {
        break
    } 
    str += "#";
}
console.log(str)

//12
let str1 = "";  
for (let k = 0; k < 10; k++){      
    for (let d = 0; d < 10; d++){
        str1 += d
        if (d >= 9) {
            str1 += `\n`
        } 
    } 
} 
console.log(str1)

//13
let f 
let str2 = ""
let h
for (f = 10; f > 0; f--) {
    for (h = 6; h > 0; h--){
        if ((f%2) === 1) {
            str2 += "#"
            str2 += "."
        } else {
            str2 += "."
            str2 += "#"
        }
        if (h <= 1) {
            str2 += `\n`
        }
    }
} 
console.log(str2)

//14
let arr2 = []
let s = (+prompt("Введите число элементов массива") - 1)
let l
for (l = 0; l <= s; l++){
    arr2[l] = l**3
}
console.log(arr2)

//15
let arr3 = []
for (let z = 0; z <= 9; z++) {
    arr3[z] = []
     for (let x = 0; x <= 9; x++) {
        arr3[z][x] = z * x
    } 
}
console.log(arr3[3][2])
console.log(arr3[2][5])

//16
let table = `<table>\n`
    for (let z = 0; z < arr3.length; z++){
        table += `<tr>\n`
        for (let x = 0; x < arr3[z].length; x++){
            table += `<td>${arr3[z][x]}</td>\n`
        }
        table += `</tr>\n`
    }
table += `</table>\n`
document.write(table)

//17
let p = 11
let y
let y1
let g
let q
let str4 = ""
if (p%2===1) {
    g = (p + 1)/2
} else {
    g = p/2 + 1
}
for (let c = 0; c < g; c++){
    if (p%2===1) {
        y = y1 = (p - 1)/2
        q = 1
    } else {
        y = y1 = p/2
        q = 0 
    }
    for (y = y - c; y > 0; y--) {
        str4 += "."
    }
    for (q = q + 2 * c; q > 0; q--) {
        str4 += "#"
    }
    for (y1 = y1 - c; y1 > 0; y1--) {
        str4 += "."
    }
    str4 += `\n`
}   
console.log(str4)











