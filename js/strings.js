//Ej a
var min ='honomatopeya', mayus;
mayus= min.toUpperCase();
console.log(mayus);
//Ej b
var pal='HTML_rules', first5;
first5= pal.substring(0,5);
console.log(first5);
//Ej c
var frase='CSS_is_nice_to', last3;
last3= frase.substring(frase.length-3,frase.length);
console.log(last3);
//Ej d
var frase1='honomatopeyas', firtsupper;
firtsupper=frase1.substring(0,1).toUpperCase()+frase1.substring(1,frase1.length).toLowerCase();
console.log(firtsupper);
//Ej e
var blanco='Rep Argentina',posblanc;
posblanc= blanco.indexOf(' ');
console.log(posblanc);
//Ej f
var largo='acariciando honomatopeyas',$largo,$largoblanc,largomayus;
$largo=largo.length;
$largoblanc=largo.indexOf(' ');
largomayus=largo.substring(0,1).toUpperCase()+largo.substring(1,$largoblanc)+largo.substring($largoblanc,$largoblanc+1)+largo.substring($largoblanc+1,$largoblanc+2).toUpperCase()+largo.substring($largoblanc+2,$largo);
console.log(largomayus);
