/* 
 1- Crea un programa que tome un número como argumento y devuelva "par" si el
número es par o "impar" si el número es impar.
*/

const esPar = (num) =>{
    if(num === 0){
        return "No se puede dividir por  0"
    }else{
        if (num % 2 == 0){
            return "Es par"
        }else{
            return "Es impar"
        }
    }
    
}

    /* 
    console.log(esPar(0)) ;
    console.log(esPar(6)) ;
    console.log(esPar(15)) ;
    */




 /*  
2-  Crea un programa que tome un número como argumento y devuelva "positivo" si el
número es mayor que cero o "negativo" si el número es menor que cero. 
*/

const esPositivo = (num) =>{
    if(num === 0){
        return "El numero ingresado fue 0"
    }else{
        if (num > 0){
            return "Es Positivo"
        }else{
            return "Es negativo"
        }
    }
    
}

    /*
    console.log(esPositivo(0)) ;
    console.log(esPositivo(10)) ;
    console.log(esPositivo(-10)) ;
    */


/* 
3-  Crea un programa que tome un string como argumento y devuelva "largo" si el
string tiene más de 10 caracteres o "corto" si el string tiene 10 caracteres o menos 
*/

const esLargo = ( string ) =>{

if(string.length > 10){
    return "El string ingresado es Largo"
}else{
    return "El string ingresado es Corto"
    }
}

/*
console.log(esLargo("Prueba de funcion Largo"));
console.log(esLargo("Corto"));
*/


/* 
4-   *Crea un array con los números del 1 al 10 y muestra cada uno de los elementos en
la consola 
*/

const array = [1,2,3,4,5,6,7,8,9,10]

for ( let i = 0 ; i < array.length ; i ++){
    console.log(array[i])
}

/*
5- Crea un array con los nombres de tus tres mejores amigos y muestra cada uno de
ellos en una lista en tu página web.
*/

/*
       const amigos = ["Pablo" , "Juan" , "Lucas"]
        const ulAmigos = document.getElementById("lista-de-amigos")

        for( let i = 0 ; i < amigos.length ; i ++ ){
            let nuevoAmigo = document.createElement("li")

            nuevoAmigo.textContent = amigos[i];
            ulAmigos.appendChild(nuevoAmigo)
        }
    
*/

/* 
6-   Crea un array con las edades de tus familiares y amigos cercanos y calcula la edad
promedio
*/

    const edades = [ 24 , 29 , 57 , 59]
    let contador = 0;

    for( let i = 0 ; i < edades.length; i++){    
        contador += edades[i]
    }

    const promedio = contador / edades.length

   // console.log(Math.round(promedio))

/*
7-   Crea un array con los nombres de tus cinco colores favoritos y muestra cada uno de
ellos en la consola.
*/

    const colores = ["Negro" , "Azul" , "Amarillo" , "Naranja" , "Bordo"]

    for ( let i = 0 ; i < colores.length ; i ++){
        console.log(colores[i])
    }


/*
8-   Crea un array con los nombres de tus cinco frutas favoritas y muestra cada uno de
ellos en una lista en tu página web.
*/

    /*
    const frutas = ["Manzana" , "Banana" , "Pera" , "Uva" , "Sandia"]
    const ulFruta = document.getElementById("lista-de-frutas")

            for( let i = 0 ; i < frutas.length ; i ++ ){
                let nuevaFruta = document.createElement("li")

                nuevaFruta.textContent = frutas[i];
                ulFruta.appendChild(nuevaFruta)
            }
    */


/*
9-   A partir del array a continuación: [1, 4, 6, 7, 20, 18] crea un programa que los ordena
de menor a mayor recorriendolos. (No usar sort). Pista: for anidado.
*/

   const numeros = [1, 4, 6, 7, 20, 18] ;

    for (let i = 0; i < numeros.length - 1; i++) {
        for (let j = 0; j < numeros.length - i - 1; j++) {
        if (numeros[j] > numeros[j + 1]) {
            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
        }
    }

/* console.log( numeros ) */






/* 
10- Suma de números pares: Escribe una función llamada sumarNumerosPares que
reciba un número entero n y devuelva la suma de todos los números pares desde 1
hasta n. Por ejemplo, si se llama a la función con el argumento 6, debería devolver
12 (2 + 4 + 6).
*/

    const sumarNumerosPares= (numer) => {

        let suma = 0;    
        for (let i = 2; i <= numer; i += 2) {
            suma += i;
        }    
        return suma;
    }
    

    console.log(sumarNumerosPares(6)); 


/*
11 - Calculadora de impuestos: Escribe una función llamada calcularImpuestos que
calcule la cantidad de impuestos a pagar dada una cantidad de dinero monto. La
función debe aplicar un impuesto del 20% a los montos mayores o iguales a 1000 y
un impuesto del 10% a los montos menores a 1000. Por ejemplo, si se llama a la
función con el argumento 1500, debería devolver 300 (20% de 1500).
*/

const calcularImpuestos = ( monto ) =>{
    if(monto >=  1000){
        return monto + ((( monto * 20 ) / 100 ))
    } else{
        return monto + ((( monto * 10 ) / 100 ))
    }
}

/*

console.log(calcularImpuestos(1500))
console.log(calcularImpuestos(900))

*/



/*
12- Contador de vocales: Escribe una función llamada contarVocales que reciba una
cadena de texto y cuente la cantidad de vocales que contiene. La función debe
devolver el número total de vocales encontradas. Puedes asumir que la cadena de
texto solo contiene letras en minúsculas y sin caracteres especiales. Por ejemplo, si
se llama a la función con el argumento 'javascript', debería devolver 3.
*/

const  contarVocales = (cadena) => {
    let contador = 0;
    
    for (let i = 0; i < cadena.length; i++) {
      let caracter = cadena[i];
      
      if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        contador++;
      }
    }
    
    return `Tiene ${contador} vocales`;
  }
  

   // console.log(contarVocales('javascript')); 
  


/*
13- Generador de contraseñas: Escribe una función llamada generarContraseña que
genere una contraseña aleatoria de longitud n. La contraseña debe contener una
combinación de letras mayúsculas, letras minúsculas, números y caracteres
especiales. Puedes usar la función Math.random() para generar valores aleatorios y
el método String.fromCharCode() para convertir códigos de caracteres en caracteres
reales. Por ejemplo, si se llama a la función con el argumento 8, podría devolver
'A2$bF9z%'

*/

   const  generarContraseña =( longitud ) => {
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    var contraseña = '';
    
    for (var i = 0; i < longitud; i++) {
      var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      contraseña += caracteres.charAt(indiceAleatorio);
    }
    
    return contraseña;
  }
  

 // console.log(generarContraseña(8));