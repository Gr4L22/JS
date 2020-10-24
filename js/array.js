//Ej a
var meses =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4]);
console.log(meses[10]);
//Ej b
var mesesord =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
mesesord.sort();
console.log(mesesord);
//Ej c
var meses1;
meses1 = meses;
meses1.unshift("Osvaldo");
meses1.push("Juernes");
console.log(meses1);
//Ej d
meses1.shift();
meses1.pop();
console.log(meses1);
//Ej e
meses1.reverse();
console.log(meses1);
//Ej f
meses =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var union;
union=meses.join(['_']);
console.log(union);
//Ej g
var winter;
winter = meses.slice(4,11);
console.log(winter);

