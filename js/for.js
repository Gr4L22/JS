//Ej a
var words = ['tomate', 'lechuga', 'cebolla', 'papa', 'huevos'];
for (let index = 0; index < words.length; index++) {
    console.log(words[index]);    
}
//Ej b
var newlist
for (let index = 0; index < words.length; index++) {
    newlist=words[index].substring(0,1).toUpperCase()+words[index].substring(1,words[index].length).toLowerCase();
    console.log('Se paso a mayuscula la letra '+newlist.substring(0,1));    
}
//Ej c
var sentence ='';
for (let index = 0; index < words.length; index++) {
    sentence=sentence+words[index];
}
console.log(sentence);
//Ej d
var arreglo= [];
for (let index = 0; index < 10; index++) {
    arreglo[index]=index;
}
console.log(arreglo);