//Ej a
var num1=5, num2=7, num3;
function suma(num1,num2) {
    return num1+num2;
}
num3=suma(num1,num2);
console.log(num3);
//Ej b
var num1='a', num2=7, num3;
function suma(num1,num2) {
    if (typeof(num1)!='number'||typeof(num2)!='number') {
        console.log('Uno de los datos no es un numero');
    } else {
        return num1+num2;
    }    
}
num3=suma(num1,num2);
console.log(num3);
//Ej c
function validate_integer (a) {
    if (a%1==0) {
        console.log('Es entero');
        return 0;
    }
}
validate_integer(num2);
//Ej d
var num4=6.3, num7;
function suma(num1,num2) {
    if (typeof(num1)!='number'||typeof(num2)!='number') {
        console.log('Uno de los datos no es un numero');
    } else {
        if (validate_integer(num1)==0 && validate_integer(num2)==0) {
            return num1+num2;
        } else {
            console.log('Hay numeros con coma');
            num1=Math.round(num1);
            num2=Math.round(num2);
            return num1+num2;
        }
    }    
}
num7=suma(num4,num2);
console.log(num7);
//Ej e
var num5=3, num6=6, num8;
function notanumber (num) {
    if (typeof(num5)!='number'||typeof(num6)!='number') {
        console.log('Uno de los datos no es un numero');
        return 0;
    } else {
        return num;
    }   
}
function suma(num1,num2) {
    if (notanumber(num1)==0 || notanumber(num2)==0) {
        console.log('Hay un dato que no es numerico');
    } else {
        return num1+num2;
    }
}
num8= suma(num5,num6);
console.log(num8);