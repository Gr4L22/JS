//Ej a
var number;
number = Math.random();
if (number>=0.5) {
    console.log('Greater than 0,5');
}
else{
    console.log('Lower than 0,5');
}
//Ej b
var age;
age = Math.random()*100;
age= Math.trunc(age);
console.log(age);
if (age<2) {
    console.log('Bebe');
} else {
    if (age<13) {
        console.log('Nino');
    } else {
        if (age<20) {
            console.log('Adolecente');
        } else {
            if (age<31) {
                console.log('Joven');
            } else {
                if (age<61) {
                    console.log('Adulto');
                } else {
                    if (age<76) {
                        console.log('Adulto Mayor');
                    } else {
                        console.log('Anciano');
                    }
                }                
            }
        }        
    }
}