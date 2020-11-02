/**
 * @author Franciso Javier González Sabariego
 */
a = { 
    id: 433,
    name: "TV Sony 50\"",
    model: "Bravia KDL50WF665",
    brand: "Sony",
    price: 1856.95,
    description: "asdasfsaas dafefdsasd MUCHO TEXTO gahadaefdsverf gsdv",
    properties: {
        width: 1200,
        height: 700,
        thickness: 63,
        weight: 11.8,
        max_resolution: "1920x1080",
        resolution_video_supported: [ "480i","480p","576i","576p","720p","1080i","1080p" ],
        suppport_3D: false,
        color: "black"
    },
    stock: true,
    opinions: [
        {
            id: 1,
            user: "Perico el de los Palotes",
            opinion: "Una TV cojonuda 10/10",
            value: 5,
            recommend: true,
            value_opinion_by_users: 12
        },
        {
            id: 2,
            user: "Marta Herrera",
            opinion: "Le echo en falta que tenga una entrada más de HDMI pero muy buena tele.",
            value: 4,
            recommend: true,
            value_opinion_by_users: 21
        },
        {
            id: 3,
            user: "TrollDInternet",
            opinion: "Por este precio esperaba que tuviera 3D y 4K, decepcionante... con todo una buena TV si eres de la plebe.",
            value: 2,
            recommend: false,
            value_opinion_by_users: -9
        }
    ]
}

//Creo una copia exacta de 'a' dejando el objeto 'a' para que lo manipule el usuario:
objOriginal = JSON.parse( JSON.stringify(a) );

//Creo un objeto copy, inicialmente vacío, para los ejemplos:
objCopy = {}

//Copias adicionales para el ejemplo del Deep Clone
objOriginal2 = JSON.parse( JSON.stringify(a) );
objCopy2 = {}

/* JSON */
console.log(`      %cJSON`, "font-weight: bold; color: grey;");
console.log(`%c=================\n\n`, "font-weight: bold;");

//Mensaje inicial
console.log(`%cHe creado un objeto de ejemplo al que he llamado 'a', puedes acceder a él en la consola por dicho nombre.`, "font-weight: bold;");
console.log(`%cPara realizar los ejemplos, en caso de alterarlo, he creado una copia independiente de 'a'. Por tanto el objeto 'a' está disponible para ti. Siéntete libre de jugar con él.`, "font-weight: bold;");
console.log(`%ca`, "font-weight: bold; color: red;" , `=>`, a,'\n\n');

//Ejemplo de copia:
console.log(`%cCopiado de objetos con Object.assing() & Spread Operator:`, "font-weight: bold;");
console.log(`Aunque en la presentación solo he hablado del clonado con el Spread Operator también podemos usar el método assign() de la clase Object. Veamos un ejemplo de esto:`);
console.log(`Vamos a realizar una copia con Objetc.assign(). %ccopia = Objetc.assign(original)`, "font-weight: bold;");
objCopy = Object.assign(objOriginal);
console.log(`Esta forma de hacer la copia es exactamente idéntica a la vista en la presentación, es decir, que %ccopia = Objetc.assign(original) == copia = {...original}`, "font-weight: bold;");

console.log(`Partiendo de esta premisa, ¿qué pasaría si yo hiciera un push al atributo 'opinions' de la copia? %cobjCopy.opinions.push(4)`, "font-weight: bold;");
objCopy.opinions.push(4);
console.log(`%ccopia`, "font-weight: bold; color: red;" , `=>`, objCopy);
console.log(`%coriginal`, "font-weight: bold; color: red;" , `=>`, objOriginal);
console.log(`Pues que, como se puede observar, %ctanto la copia como el original se han visto modificados.\n\n`, "font-weight: bold; color: red;");

console.log(`Como puedes ver, estoy usando un JSON más complejo que el de los ejemplos del Spread Operator y el Deep Copy.`);
console.log(`%c¿Te imaginas teniendo que copiar este JSON únicamente con el spread operator y garantizar su reserva de memoria totalmente independiente?`, "font-weight: bold;");
console.log(`%cPues que si te va el heavy metal, sigue usando el spread operator, pero casi mejor te recomiendo hacer uso del deep copy.`, "font-weight: bold;");
console.log(`%cHagámoslo y te dejaré libre de tantos ejemplos... (no me odies, bastante tengo ya con odiarme a mi mismo \u{1F622})\n\n`, "font-weight: bold; color: blue;");

//Deep Clone
console.log(`%cDeep Clone:`, "font-weight: bold;");
console.log(`Veamos qué pasa ahora si yo hago un Deep Clone del objeto original => %ccopia = JSON.parse( JSON.stringify(original) )`, "font-weight: bold;");
console.log(`Ahora hacemos un push, igual que antes, a la propiedad 'opinions' => %ccopia.opinions.push(4)`, "font-weight: bold;");
objCopy2 = JSON.parse( JSON.stringify(objOriginal2) );
objCopy2.opinions.push(4);

console.log(`%ccopia`, "font-weight: bold; color: red;" , `=>`, objCopy2);
console.log(`%coriginal`, "font-weight: bold; color: red;" , `=>`, objOriginal2);
console.log(`Pues que ahora ambos son totalmente independientes. Así de fácil...\n\n`);

console.log(`%cY ya estaría. Enhorabuena has sobrevivido al curso intensivo de String & RegExp & JSON. Felicidades!!\u{1F973}\u{1F973}`, "font-weight: bold;");