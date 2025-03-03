let numero= Math.floor(Math.random()*151)+1;
console.log(numero);
let numero2= Math.floor(Math.random()*151)+1;
console.log(numero2);
var uri=`https://pokeapi.co/api/v2/pokemon/${numero}`;
var uri2=`https://pokeapi.co/api/v2/pokemon/${numero2}`;
 
fetch(uri)
.then(response=>response.json())
.then(data=>CargarDatos(data));

fetch(uri2)
.then(response=>response.json())
.then(data=>CargarDatos2(data));
 
function CargarDatos(pokemon)
{
    const nombre=document.getElementById("nombre-pokemon");
    console.log(pokemon);
    nombre.textContent=pokemon.name;
    const foto=document.getElementById("img-pokemon");
    foto.src=pokemon.sprites.front_default;
 
    const tipo= document.getElementById("descripcion-pokemon");
    tipo.textContent=pokemon.types[0].type.name;
}
function CargarDatos2(pokemon)
{
    const nombre=document.getElementById("nombre-pokemon 2");
    console.log(pokemon);
    nombre.textContent=pokemon.name;
    const foto=document.getElementById("img-pokemon 2");
    foto.src=pokemon.sprites.front_default;
 
    const tipo= document.getElementById("descripcion-pokemon 2");
    tipo.textContent=pokemon.types[0].type.name;
}
 