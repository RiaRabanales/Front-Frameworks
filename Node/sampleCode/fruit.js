const frutas = ['banana', 'manzana', 'pera', 'fresa'];
const colores = ['amarillo', 'rojo', 'verde', 'rosa'];
//console.log(frutas);

//Así exporto manualmente elementos de este archivo como propiedades dentro del objeto
module.exports = {
    frutas: frutas,
    colores: colores
};
//Es lo mismo que: module.exports = {frutas, colores}; por tener igual nombre