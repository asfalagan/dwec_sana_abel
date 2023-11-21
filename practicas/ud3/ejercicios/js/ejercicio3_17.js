/**
 * Crea una función generateUsername(arr) 
 * que tome como parámetro un array de objetos 
 * con las propiedades name y surname y 
 * añada a cada elemento una propiedad nickname 
 * cuyo valor será la primera letra del nombre 
 * seguida del apellido (todo en minúsculas) 
 * y dos dígitos aleatorios.

Ten en cuenta que nickname se tiene que añadir 
al mismo array y no crear uno nuevo.
 */

let arr = [
    {   name: 'Victor',
        surname: 'González',
    },
    {
        name: 'Pepe',
        surname: 'Pérez',
    }]

function generateUsername(arr){
    arr.forEach(usuario => {
        usuario.nickname = 
            usuario.name.toLowerCase() +
            usuario.surname.toLowerCase() + 
            (Math.random()* 100).toFixed(0).padStart(2, '0'); 
    });
}
generateUsername(arr);
console.log(arr);