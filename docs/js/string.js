/**
 * 
 */
console.log(`STRING`);
console.log(`======\n\n`);

//Length
console.log(`Ejemplo '.length':`);
console.log(`"Hola mundo".length => ${"Hola mundo".length}\n\n`);

//Indexación
console.log(`Ejemplo de indexación:`);
console.log(`"Hola mundo"[0] => ${"Hola mundo"[0]}`);
console.log(`"Hola mundo"[6] => ${"Hola mundo"[6]}\n\n`);

//padStart()
console.log(`Ejemplo padStart():`);
console.log(`"Hola mundo".padStart(14,'?') => "${"Hola mundo".padStart(14,'?')}"\n\n`);

//padEnd()
console.log(`Ejemplo padEnd():`);
console.log(`"Hola mundo".padEnd(14,'?') => "${"Hola mundo".padEnd(14,'?')}"\n\n`);

//trim()
console.log(`Ejemplo trim():`);
console.log(`"      Hola mundo      ".trim() => "${"      Hola mundo      ".trim()}"\n\n`);

//trimStart()
console.log(`Ejemplo trimStart():`);
console.log(`"      Hola mundo      ".trimStart() => "${"      Hola mundo      ".trimStart()}"\n\n`);

//trimEnd()
console.log(`Ejemplo trimEnd():`);
console.log(`"      Hola mundo      ".trimEnd() => "${"      Hola mundo      ".trimEnd()}"\n\n`);

//indexOf()
console.log(`Ejemplo indexOf():`);
console.log(`"Hola mundo".indexOf("H") => "${"Hola mundo".indexOf("H")}"`);
console.log(`"Hola mundo".indexOf("l") => "${"Hola mundo".indexOf("l")}"`);
console.log(`"Hola mundo".indexOf("o") => "${"Hola mundo".indexOf("o")}"\n\n`);

//lastIndexOf()
console.log(`Ejemplo lastIndexOf():`);
console.log(`"Hola mundo".lastIndexOf("l") => "${"Hola mundo".lastIndexOf("l")}"`);
console.log(`"Hola mundo".lastIndexOf("o") => "${"Hola mundo".lastIndexOf("o")}"\n\n`);

//split()
console.log(`Ejemplo split():`);
console.log(`"Hola mundo".split('') => [${"Hola mundo".split('')}]`);
console.log(`"Hola mundo".split(' ') => [${"Hola mundo".split(' ')}]\n\n`);

//slice()
console.log(`Ejemplo slice():`);
console.log(`"Hola mundo".slice(0,3) => "${"Hola mundo".slice(0,3)}"`);
console.log(`"Hola mundo".slice(-3) => "${"Hola mundo".slice(-3)}"\n\n`);

//startsWith()
console.log(`Ejemplo startsWith():`);
console.log(`"Hola mundo".startsWith("Hol") => "${"Hola mundo".startsWith("Hol")}"`);
console.log(`"Hola mundo".startsWith("mundo") => "${"Hola mundo".startsWith("mundo")}"`);
console.log(`"Hola mundo".startsWith("ol",1) => "${"Hola mundo".startsWith("ol",1)}"`);
console.log(`"Hola mundo".startsWith("ol",2) => "${"Hola mundo".startsWith("ol",2)}"\n\n`);

//endsWith()
console.log(`Ejemplo endsWith():`);
console.log(`"Hola mundo".endsWith("mun") => "${"Hola mundo".endsWith("mun")}"`);
console.log(`"Hola mundo".endsWith("Hola") => "${"Hola mundo".endsWith("Hola")}"`);
console.log(`"Hola mundo".endsWith("mundo",10) => "${"Hola mundo".endsWith("mundo",10)}"`);
console.log(`"Hola mundo".endsWith("mundo",9) => "${"Hola mundo".endsWith("mundo",9)}"`);
console.log(`"Hola mundo".endsWith("Mundo",10) => "${"Hola mundo".endsWith("Mundo",10)}"\n\n`);

//toUpperCase()
console.log(`Ejemplo toUpperCase():`);
console.log(`"Hola mundo".toUpperCase() => "${"Hola mundo".toUpperCase()}"\n\n`);

//toLowerCase()
console.log(`Ejemplo toLowerCase():`);
console.log(`"HOLA MUNDO".toLowerCase() => "${"HOLA MUNDO".toLowerCase()}"\n\n`);

//concat()
console.log(`Ejemplo concat():`);
console.log(`"Hola".concat(' mundo') => "${"Hola".concat(' mundo')}"\n\n`);

//Replace (RegExp)
console.log(`Ejemplo replace() con RegExp:`);
console.log(`"Mi moto alpina derrapante".replace(/[aiou]/g,"e") => "${"Mi moto alpina derrapante".replace(/[aiou]/g,"e")}"`);
console.log(`"La pizza con piña está buena".replace(/está buena/i,"no es pizza") => "${"La pizza con piña está buena".replace(/está buena/i,"no es pizza")}"`);
console.log(`"La pizza con piña está buena".replace(/con piña\\s/i,"") => "${"La pizza con piña está buena".replace(/con piña\s/i,"")}"`);
console.log(`/--------------------/`);







