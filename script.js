//let num = 20; // переходит в функции и получает изменения которая в фукции ( 10)

//function showFirstMessage (text) { // .. имя (параметры ( что сделала)
  //  alert(text);   //действия
//let num = 10 ; //переменая в функции видна только в функции 
  //   console.log(num); // покажет переменую которая внутри , если нет в фукнции переменой будет искать ее 
//}

//showFirstMessage("Hello world"); //вызов функции (текст любой какой захочу)
//console.log(num); // покажет переменую которая вне функции 

//function calc (a,b) {   // это те цифры что внизу ФАНКШЕН ДЕКОРЕЙШЕН работает не зависит от места 
// return (a+b);   //возврат сложение двух перменых
//}



//let calc = function (a,b){  //фанкшен эксперешен , только когда код до нее доходит , вызвать не можем 
 //   return ( a+ b );
//}

 let calc = (a,b) => a+b; // стелочная функция , аналог экспрешен
console.log(calc(3,4));  // вывод сдлжения даных цифр

console.log(calc(8,4));

function retVar (){
 let num = 50 ;   // даем переменую
 return num; // для возвраша в внешний мир
}

let anotherNum= retVar(); // переменая равна 50

console.log(anotherNum); //вывод 50 

let str = "test";
console.log(str.length); //свойство , получение длинны переменой str

console.log(str.toUpperCase()); // метод ЗАГЛАВНЫЕ ЬБУКВЫ 
console.log(str.toLowerCase());// метод все маленькие буквы 

let twelwe = "12.2px";

//console.log(Math.round(twelwe)) ; // ( метод(переменая)) округления числа

console.log(parseInt(twelwe)); // округление до целого числа 
console.log(parseFloat(twelwe)); // возврат десятичного числа 