let TituloP="Rapido y Furioso"
let Prota1="Brayan Oconner"
let Prota2="Dominic Toreto"
let Prota3="Mia Toreto"

let pelicula= `
<div class="contenedor">
        <div id="imagen">
            <img src="Imagenes/Rapido y furioso.jpg"width="300" weight="350"/>
        </div>
        <div id="Titulo">
           <div class="content">
            <h1>${TituloP}</h1>
        </div>
        <div id="descripcion">
        <div class="content">
            <p>
                <b>Descripcion:</b> La lealtad de un policía de Los Ángeles se pone a prueba cuando se infiltra en un grupo de corredores de autos callejeros que se sospecha organizan robos a gran velocidad.
            </p>
        </div>    
</div>

<br/> <b>Protagonistas</b> <br/>

<table>
    <tr>
        <th>Nombre</th>
        <th>Descripcion</th>
    </tr>
    <tr>
        <td>${Prota1}</td>
        <td>policía encubierto que trabaja para el FBI. Brian ha estado investigando una serie de robos de camiones en Los Ángeles.
         <br/>Tuvo que trabajar de incógnito en el mundo de las carreras callejeras de Los Ángeles, donde se hizo amigo de Mia Toretto y su hermano Dom.</td>    
    </tr>
</table>
<br/>
<table>
    <tr>
        <th>Nombre</th>
        <th>Descripcion</th>
    </tr>
    <tr>
        <td>${Prota2}</td>
        <td> un corredor callejero profesional y líder de los secuestradores. <br/>
        Vive solo con su hermana Mia y su padre era un corredor de automovilismo profesional, 
        <br/>que fue asesinado en una carrera por un compañero piloto llamado Kenny Linder. </td>    
    </tr>
</table>
<br/>
<table>
    <tr>
        <th>Nombre</th>
        <th>Descripcion</th>
    </tr>
    <tr>
        <td>${Prota3}</td>
        <td>es la hija menor de la familia Toretto. Su padre era un conductor profesional que tenía una Dodge Charger R/T de 1970. 
        <br/>Su hermano mayor, Dominic, ayudó a su padre a construir el Dodge Charger. Además, los Toretto eran dueños y tenían un mercado y tienda de café.</td>    
    </tr>
</table>
<br/>

<b>Calificacion IMDB</b><br/>
<span class="material-symbols-outlined">
sentiment_satisfied
</span>

<br/><br/>
<b>Ver trailer</b><br/>
<a href="https://www.youtube.com/watch?v=-oJHZre7XZY">Ver </a><br/>

<br/>
<table>
    <tr>
        <th>Pais</th>
        <th>Titulo</th>
    </tr>
    <tr>
        <td>Mexico</td>
        <td>Rapido y furioso</td> 
    </tr>
    <tr>
        <td>España</td>
        <td>A todo gas</td> 
    </tr>
    <tr>
        <td>USA</td>
        <td>The Fast and the Furious</td> 
    </tr>
</table>
`
console.log(pelicula);
document.body.innerHTML=pelicula;