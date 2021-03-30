                                                    // EJERCICIO 1         
// 01 - sobre mi
// Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
// El objeto tiene que tener 3 propiedades: nombre, apellido, edad
// Mostrar en consola el objeto sobreMi

// const sobreMi = {
//     nombre: 'Mariana',
//     apellido: 'Juarez',
//     edad: 32
// }
// console.log(sobreMi);


                                                    // EJERCICIO 2

// 02 - presentar
// Crear una variable llamada user, a la que le vamos a asignar un objeto.
// El objeto tiene que tener 3 propiedades: fullname, email, age
// Mostrar en consola el objeto user
// Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"

// const user = {
//     fullname: ['Mariana', 'Juarez'],
//     email: 'juarezmariana18@gmail.com',
//     age: 32
// }
// console.log(`Hola, mi nombre es ${user.fullname[0]} y tengo ${user.age}`);


                                                    // EJERCICIO 3


// 03 - cancion
// Tenemos un objeto en la variable song con diferentes propiedades que representan una canción de spotify.
// Queremos crear un nuevo objeto, guardandolo en la variable cancion, a partir de las propiedades del objeto que tenemos en song
// El nuevo objeto tiene que tener las propiedades titulo, banda, y duracion (en segundos, ya que en el objeto original song está en milisegundos)

// var song = {
//     title: "Rock and Roll",
//     bandName: "Led Zeppelin",
//     duration: 166000,
//     album: "Led Zeppelin IV"
//   };
//   const {title, bandName, duration} = song

//   var cancion = {
//     titulo: song.title,
//     banda: song.bandName,
//     duracion: song.duration / 1000
//   };
  
//   console.log(cancion); // { titulo: 'Rock and Roll', banda: 'Led Zeppelin', duracion: 166 }


                                                    // EJERCICIO 4

//   04 - base de datos
// Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
// Los datos que tenemos son un id, email, nombre y teléfono
// Crear un objeto para cada persona que nos pasaron
// Mostrar por consola todos los objetos creados


// DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS

// 1,ada@gmail.com,Ada Lovelace,1234567890
// 2,grace@hotmail.com,Grace Hopper,0987654321
// 3,hedy@gmail.com,Hedy Lamarr,6789054321
// 4,radia@yahoo.com,Radia Perlman,1234509876
// 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890

// Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
// var example = {
//   id: 0,
//   nombre: "Ejemplo",
//   email: "ejemplo@terra.com",
//   telefono: "1029384756"
// }

// Escribi aca abajo los objetos para cada uno de las personas que nos enviaron

// const ada = {
//     id: 1,
//     nombre:'Ada Lovelace',
//     email: 'ada@gmail.com',
//     telefono: 1234567890
// }
// const grace = {
//     id: 2,
//     nombre: 'Grace Hopper',
//     email: 'grace@hotmail.com',
//     telefono: 0987654321
// }
// const hedy = {
//     id: 3,
//     nombre: 'Hedy Lamarr',
//     email: 'hedy@gmail.com',
//     telefono: 6789054321
// }
// const radia = {
//     id: 4,
//     nombre: 'Radia Perlman',
//     email: 'radia@yahoo.com',
//     telefono: 1234509876
// }
// const sheryl = {
//     id: 5,
//     nombre: 'Sheryl Sandberg',
//     email: 'Sheryl@facebook.com',
//     telefono:  5432167890
// }

//// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS

// 1. El nombre de Ada:
// console.log(ada.nombre);

// // 2. El ID de Grace
// console.log(grace.id);

// // 3. El email de Hedy
// console.log(hedy.email);

// // 4. El ID y nombre de Radia
// console.log(radia.id, radia.nombre);

// // 5. El telefono de Sheryl
// console.log(sheryl.telefono);


                                                    // EJERCICIO 5

// 05 - correción de datos
// Tenemos la variable datos que tiene un objeto con los datos de una persona
// El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto. El télefono correcto es 0192837465
// También tenemos que modificar la edad, ya que es un string y necesitamos que sea un número.

// var datos = {
//   id: 1,
//   nombre: "Ada",
//   apellido: "Lovelace",
//   email: "ada.lovelace@gmail.com",
//   telefono: "1234567890",
//   edad: "29",
//   programa: true,
// };

// datos.telefono = '0192837465';
// datos.edad = 29;

// // finalmente, mostramos los datos
// console.log(datos);
// { id: 1,
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   telefono: '0192837465',
//   edad: 29,
//   programa: true }


                                                    // EJERCICIO 6

// 06 - lenguaje favorito
// Tenemos la variable datos con un objeto que guarda datos de personas
// Tenemos que programar la siguiente lógica
// SI la propiedad programa es true
// Agregá la propiedad lenguajeFavorito, y asignale "Javascript"

// var datos = {
//   id: 1,
//   nombre: "Ada",
//   apellido: "Lovelace",
//   email: "ada.lovelace@gmail.com",
//   telefono: "1234567890",
//   edad: 29,
//   programa: true,
// };

// if(datos.programa){
//     datos.lenguajeFavorito = 'Javascript'
// }

// // finalmente, mostramos los datos
// console.log(datos);
// { id: 1,
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   telefono: '1234567890',
//   edad: 29,
//   programa: true,
//   lenguajeFavorito: 'Javascript' }


                                                    // EJERCICIO 7

// 07 - lenguaje favorito 2
// Tenemos la variable datos con un objeto que guarda datos de una persona
// Tenemos que programar la siguiente lógica
// SI la propiedad programa es true
// Agregá la propiedad lenguajesFavoritos, y asignale un array con dos lenguajes de programación
// Al final, mostrar en la consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES FAVORITOS]"

// var datos = {
//   id: 1,
//   nombre: "Ada",
//   apellido: "Lovelace",
//   email: "ada.lovelace@gmail.com",
//   telefono: "1234567890",
//   edad: 29,
//   programa: true,
// };

// if(datos.programa){
//         datos.lenguajesFavoritos = ['Javascript', 'go']
//     }

// // aca mostrar la frase
// console.log(
//   `Hola, mi nombre es ${datos.nombre} y programo en ${datos.lenguajesFavoritos.join(' y ')}`
// );
// por ejemplo "Hola, mi nombre es Ada y me programo en Javascript,C++"


                                                    // EJERCICIO 8

// 08 - disco
// Tenemos la variable disco con un objeto que guarda datos de un album musical
// Queremos obtener el nombre y año de lanzamiento del disco y nombre de la banda, para mostrar el mensaje "El disco [NOMBRE DISCO] de la banda [NOMBRE DE LA BANDA] se lanzó en el año [AÑO DE LANZAMIENTO DEL DISCO]"
// Completá el código para lograr el resultado esperado

// var disco = {
//   id: 1,
//   nombre: 'Wasting Light',
//   anioLanzamiento: 2011,
//   cantidadDeTemas: 12,
//   banda: {
//     nombre: 'Foo Fighters',
//     anioFormacion: 1994
//   }
// };

// // codea aca la solucion
// var nombreDisco = disco.nombre;
// var anioDisco = disco.anioLanzamiento;
// var nombreBanda = disco.banda.nombre;

// console.log("El disco " + nombreDisco + " de la banda " + nombreBanda + " se lanzó en el año " + anioDisco);
// Debería mostrar
// El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011


                                                    // EJERCICIO 9

// 09 - skills
// Tenemos la variable user, que es un objeto con datos de una persona en linkedin
// En el objeto hay una propiedad skills, que es un array con las distintas habilidades de la persona
// Necesitamos actualizar el perfil y agregar "Javascript" al array de de skills

// var user = {
//   id: 123456789,
//   name: "Ada Lovelace",
//   url: "https://www.linkedin.com/in/ada-lovelace",
//   skills: ["HTML", "CSS", "SASS"],
// };

// user.skills.push('Javascript');

// // despues de la solucion
// console.log(user);
// deberia mostrar
// { id: 123456789,
//   name: 'Ada Lovelace',
//   url: 'https://www.linkedin.com/in/ada-lovelace',
//   skills: [ 'HTML', 'CSS', 'SASS', 'Javascript' ] }


                                                    // EJERCICIO 10

// 10 - playlist
// Creá un objeto donde vamos a guardar información sobre una playlist de spotify
// El objeto va a tener las propiedades nombre (un string), privada (un booleano) y canciones (un array de strings).
// En líneas separadas (un console.log por cada una), mostrá la información de la lista para que sea vea de la siguiente forma:
// Lista de Nirvana
// Privada: Si
// Canciones:
// Smells Like Teen Spirit
// In Bloom
// Come As You Are
// Privada tiene que mostrar Si en el caso que la propiedad privada sea true, o No si la propiedad es false

// const playlist = {
//     nombre: 'Nirvana',
//     privada: true,
//     canciones: ['Smells Like Teen Spirit', 'In Bloom', 'Come As You Are']
// }

// if(playlist.privada === true){
//     playlist.privada = 'Si'
// }else{
//     playlist.privada = 'No'
// }

// console.log(playlist.nombre);
// console.log(playlist.privada);
// console.log(playlist.canciones);


                                                    // EJERCICIO 11

// 11 - ganadora
// Tenemos un array de objetos, con las ganadoras de algunas temporadas de Rupaul.
// Cada objeto tiene las propiedades nombre, temporada y foto.
// Iterá/Recorré el array utilizando for y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6

var ganadoras = [
  {
    nombre: "Bebe Zahara Benet",
    temporada: "1",
    foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg",
  },
  {
    nombre: "Tyra Sanchez",
    temporada: "2",
    foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg",
  },
  {
    nombre: "Raja",
    temporada: "3",
    foto: "http://www.nokeynoshade.party/images/raja.jpg",
  },
  {
    nombre: "Sharon Needles",
    temporada: "4",
    foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg",
  },
  {
    nombre: "Jinkx Monsoon",
    temporada: "5",
    foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg",
  },
  {
    nombre: "Bianca Del Rio",
    temporada: "6",
    foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg",
  },
];

///// RESULTADO
// Bebe Zahara Benet ganó la temporada 1
// Tyra Sanchez ganó la temporada 2
// Raja ganó la temporada 3
// Sharon Needles ganó la temporada 4
// Jinkx Monsoon ganó la temporada 5
// Bianca Del Rio ganó la temporada 6