// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = [];
  for (const clave in objeto) {
    array.push([clave, objeto[clave]]);
  }
  return array;
}

                            // diego
function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var objeto={};
    
    for(var i=0; i<string.length; i++){
      if(!objeto[string[i]]){
         objeto[string[i]]=0;
      }
      objeto[string[i]]= objeto[string[i]]+1;
    }                 
     return objeto 

    }

            



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas="";
  var minusculas="";
  for(var i=0;i<s.length;i++){
    if(s[i]===s[i].toUpperCase()){
      mayusculas=mayusculas+s[i];
    }else{
      minusculas=minusculas+s[i]
    }
  }
    return mayusculas+minusculas
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var espejo=""
  var array=[]
  for(var i=str.length-1;i>=0;i--){
    espejo += str[i];
  }
   espejo=espejo.split(" "); // split para convertir a a array
   for(var i=espejo.length-1; i>=0; i--){
      array.push(espejo[i])
   }
   return array.join(" ") // y se aplica join para volverlo un string
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí  2332
  var numinv =("");// variable para almacenar resultado
  var str=numero.toString();// toString tranforma un numero en string
  for(var i=str.length-1; i>=0; i--){ // sepuede hacer un for porque anteriormente lo convertimos el numero  en string
     numinv+=str[i]; //aca meto el resultado del for en la var 
  }
   numinv=parseInt(numinv);// parseInt vuelve un numero al string
   if(numero===numinv){ // aca se compara 
    return "Es capicua"  // y se retorna lo pedido  
   }else{
      return "No es capicua"
   }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
    var array = cadena.split("")//split convierte en  un array
    array=array.filter(function(elemento){ // filter filtra segun la condicion que se quiera y lo devuelve 
     return elemento !== "a"&& elemento !== "b"&& elemento !== "c";//aca en la funcion se espesifica lo requerido
    });
    return array.join ("")// se retorna el array echo anteriormente 

}



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
    var sort =arr.sort(function(a, b) {
      if(a.length>b.length){
        return 1
      }
      if(a.length<b.length){
        return -1
      }
      return 0
      
   }) 
    return sort
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var inter= []
     for(var i=0;i<arreglo1.length;i++){ 
     for(var j=0;j<arreglo2.length;j++){  
    if(arreglo1[i]==arreglo2[j]){ 
      inter.push(arreglo1[i])   
	   } 
	 }
 }  
    inter.sort(function(a,b){ 
     return a-b
 });
   return inter
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

