/**
 * 
 */
let cadena      = new String("Hola mundo");
let num         = 10;
let patternDni  = /^(\d{8})[\s|\-]?(\w)$/i;
let patternDni2 = new RegExp(/^(\d{8})[\s|\-]?(\w)$/, 'i');
let patternDni3 = new RegExp('^(\\d{8})[\\s|\\-]?(\\w)$', 'i');
let tr          = new RegExp(/tr/,'ig');
let tigres      = "Tres tristes tigres comían trigo en un trigal";

/* String */
console.log(`      %cSTRING`, "font-weight: bold; color: orange;");
console.log(`%c===================\n\n`, "font-weight: bold;");

//Length
console.log(`%cEjemplo '.length':`, "font-weight: bold;");
console.log(`"Hola mundo".length => ${"Hola mundo".length}\n\n`);

//Indexación
console.log(`%cEjemplo de indexación:`, "font-weight: bold;");
console.log(`"Hola mundo"[0] => ${"Hola mundo"[0]}`);
console.log(`"Hola mundo"[6] => ${"Hola mundo"[6]}\n\n`);

//padStart()
console.log(`%cEjemplo padStart():`, "font-weight: bold;");
console.log(`"Hola mundo".padStart(14,'?') => "${"Hola mundo".padStart(14,'?')}"\n\n`);

//padEnd()
console.log(`%cEjemplo padEnd():`, "font-weight: bold;");
console.log(`"Hola mundo".padEnd(14,'?') => "${"Hola mundo".padEnd(14,'?')}"\n\n`);

//trim()
console.log(`%cEjemplo trim():`, "font-weight: bold;");
console.log(`"      Hola mundo      ".trim() => "${"      Hola mundo      ".trim()}"\n\n`);

//trimStart()
console.log(`%cEjemplo trimStart():`, "font-weight: bold;");
console.log(`"      Hola mundo      ".trimStart() => "${"      Hola mundo      ".trimStart()}"\n\n`);

//trimEnd()
console.log(`%cEjemplo trimEnd():`, "font-weight: bold;");
console.log(`"      Hola mundo      ".trimEnd() => "${"      Hola mundo      ".trimEnd()}"\n\n`);

//indexOf()
console.log(`%cEjemplo indexOf():`, "font-weight: bold;");
console.log(`"Hola mundo".indexOf("H") => "${"Hola mundo".indexOf("H")}"`);
console.log(`"Hola mundo".indexOf("l") => "${"Hola mundo".indexOf("l")}"`);
console.log(`"Hola mundo".indexOf("o") => "${"Hola mundo".indexOf("o")}"\n\n`);

//lastIndexOf()
console.log(`%cEjemplo lastIndexOf():`, "font-weight: bold;");
console.log(`"Hola mundo".lastIndexOf("l") => "${"Hola mundo".lastIndexOf("l")}"`);
console.log(`"Hola mundo".lastIndexOf("o") => "${"Hola mundo".lastIndexOf("o")}"\n\n`);

//split()
console.log(`%cEjemplo split():`, "font-weight: bold;");
console.log(`"Hola mundo".split('')  => [${"Hola mundo".split('')}]`);
console.log(`"Hola mundo".split(' ') => [${"Hola mundo".split(' ')}]\n\n`);

//slice()
console.log(`%cEjemplo slice():`, "font-weight: bold;");
console.log(`"Hola mundo".slice(0,3) => "${"Hola mundo".slice(0,3)}"`);
console.log(`"Hola mundo".slice(-3)  => "${"Hola mundo".slice(-3)}"\n\n`);

//startsWith()
console.log(`%cEjemplo startsWith():`, "font-weight: bold;");
console.log(`"Hola mundo".startsWith("Hol")   => "${"Hola mundo".startsWith("Hol")}"`);
console.log(`"Hola mundo".startsWith("mundo") => "${"Hola mundo".startsWith("mundo")}"`);
console.log(`"Hola mundo".startsWith("ol",1)  => "${"Hola mundo".startsWith("ol",1)}"`);
console.log(`"Hola mundo".startsWith("ol",2)  => "${"Hola mundo".startsWith("ol",2)}"\n\n`);

//endsWith()
console.log(`%cEjemplo endsWith():`, "font-weight: bold;");
console.log(`"Hola mundo".endsWith("mun")      => "${"Hola mundo".endsWith("mun")}"`);
console.log(`"Hola mundo".endsWith("Hola")     => "${"Hola mundo".endsWith("Hola")}"`);
console.log(`"Hola mundo".endsWith("mundo",10) => "${"Hola mundo".endsWith("mundo",10)}"`);
console.log(`"Hola mundo".endsWith("mundo",9)  => "${"Hola mundo".endsWith("mundo",9)}"`);
console.log(`"Hola mundo".endsWith("Mundo",10) => "${"Hola mundo".endsWith("Mundo",10)}"\n\n`);

//toUpperCase()
console.log(`%cEjemplo toUpperCase():`, "font-weight: bold;");
console.log(`"Hola mundo".toUpperCase() => "${"Hola mundo".toUpperCase()}"\n\n`);

//toLowerCase()
console.log(`%cEjemplo toLowerCase():`, "font-weight: bold;");
console.log(`"HOLA MUNDO".toLowerCase() => "${"HOLA MUNDO".toLowerCase()}"\n\n`);

//concat()
console.log(`%cEjemplo concat():`, "font-weight: bold;");
console.log(`"Hola".concat(' mundo') => "${"Hola".concat(' mundo')}"\n\n`);

//includes()
console.log(`%cEjemplo includes():`, "font-weight: bold;");
console.log(`"Hola mundo".includes('Hola')   => "${"Hola mundo".includes('Hola')}"`);
console.log(`"Hola mundo".includes('adios')  => "${"Hola mundo".includes('adios')}"`);
console.log(`"Hola mundo".includes('hola')   => "${"Hola mundo".includes('hola')}"`);
console.log(`"Hola mundo".includes('Hola',0) => "${"Hola mundo".includes('Hola',0)}"`);
console.log(`"Hola mundo".includes('Hola',1) => "${"Hola mundo".includes('Hola',1)}"\n\n`);

//substring()
console.log(`%cEjemplo substring():`, "font-weight: bold;");
console.log(`"Hola mundo".substring(0,3) => "${"Hola mundo".substring(0,3)}"\n\n`);

//toString()
console.log(`%cEjemplo toString():`, "font-weight: bold;");
console.log(`cadena = new String("Hola mundo")`);
console.log(`cadena => `, cadena);
console.log(`cadena.toString() => "${cadena.toString()}"\n\n`);

//replace()
console.log(`%cEjemplo replace():`, "font-weight: bold;");
console.log(`"Hola mundo".replace('mundo', 'buenas') => "${"Hola mundo".replace('mundo', 'buenas')}"\n\n`);

//template string
console.log(`%cEjemplo template string:`, "font-weight: bold;");
console.log(`num = 10`);
console.log(`\`El número guardado es \$\{num\}\` => El número guardado es ${num}\n\n`);

/* RegExp */
console.log(`      %cRegExp`, "font-weight: bold; color: green;");
console.log(`%c==================\n\n`, "font-weight: bold;");

//Creación de RegExp
console.log(`%cCreación de RegExp:`, "font-weight: bold;");
console.log(`Literal     => %cpatternDni  = /^(\d{8})[\s|\-]?(\w)$/i`, "font-weight: bold; color: blue;", `=> ${patternDni}`);
console.log(`Constructor => %cpatternDni2 = new RegExp(/^(\d{8})[\s|\-]?(\w)$/, 'i')`, "font-weight: bold; color: blue;", `=> ${patternDni2}`);
console.log(`Constructor => %cpatternDni3 = new RegExp('^(\\\\d{8})[\\\\s|\\\\-]?(\\\\w)$', 'i')`, "font-weight: bold; color: blue;",`=> ${patternDni3} (Duplicad las barras invertidas '\\' si usáis cadenas)\n\n`);

//Character classes
console.log(`%cCharacter classes:`, "font-weight: bold;");
console.log(`%c/\\w/`, "font-weight: bold;", `=> https://regexr.com/5f9v2`);
console.log(`%c/\\W/`, "font-weight: bold;", `=> https://regexr.com/5f9v8`);
console.log(`%c/\\d/`, "font-weight: bold;", `=> https://regexr.com/5f9vb`);
console.log(`%c/\\D/`, "font-weight: bold;", `=> https://regexr.com/5f9ve`);
console.log(`%c/\\s/`, "font-weight: bold;", `=> https://regexr.com/5f9vh`);
console.log(`%c/\\S/`, "font-weight: bold;", `=> https://regexr.com/5f9vk`);
console.log(`%c/\\t/`, "font-weight: bold;", `=> https://regexr.com/5f9vn`);
console.log(`%c/./g`, "font-weight: bold;", `=> https://regexr.com/5f9vq (He usado la flag 'g' para que veáis que el punto acepta cualquier caracter)`);
console.log(`%c/\\n/`, "font-weight: bold;", `=> /\\n/.test('Salto \\n de línea') => ${/\n/.test('Salto \n de línea')}\n\n`);

//Quantifiers
console.log(`%cQuantifiers:`, "font-weight: bold;");
console.log(`%c/a?/`, "font-weight: bold;", `      => https://regexr.com/5fa0f`);
console.log(`%c/a+/`, "font-weight: bold;", `      => https://regexr.com/5fa0i`);
console.log(`%c/a*/`, "font-weight: bold;", `      => https://regexr.com/5fa0l`);
console.log(`%c/a{4}/`, "font-weight: bold;", `    => https://regexr.com/5fa0o`);
console.log(`%c/a{1,3}/`, "font-weight: bold;", `  => https://regexr.com/5fa0r`);
console.log(`%c/a{1,}/`, "font-weight: bold;", `   => https://regexr.com/5fa0u`);
console.log(`%c/a(e|i)+)/`, "font-weight: bold;", `=> https://regexr.com/5fa11\n\n`);

//Groups, sets & ranges
console.log(`%cGroups, sets & ranges:`, "font-weight: bold;");
console.log(`%c/[ei]/g`, "font-weight: bold;", `  => https://regexr.com/5fa2k (Esto es un set, elige un caracter u otro. Con la flag 'g' selecciona todos los caracteres dentro del set.)`);
console.log(`%c/[^ei]/g`, "font-weight: bold;", ` => https://regexr.com/5fa2q (Esto es un set negado, elige cualquier caracter que no esté dentro del set.)`);
console.log(`%c/[A-Z]/g`, "font-weight: bold;", ` => https://regexr.com/5fa30 (Esto es un range, elige cualquier caracter comprendido dentro del rango.)`);
console.log(`%c/[^A-Z]/g`, "font-weight: bold;", `=> https://regexr.com/5fa36 (Esto es un range negado, elige cualquier caracter que no esté comprendido dentro del rango.)`);
console.log(`%c"38946103-F".match(/(\\d{8})[\\s\\-]?(\\w)/i)`, "font-weight: bold;", `=>`,"38946103-F".match(/(\d{8})[\s\-]?(\w)/i));
console.log(`(grupo[0]: '38946103-F' toda la cadena coincidente al patrón, siempre presente por defecto)`);
console.log(`%c/^(\\+\\d{2})(\\s|\\-)?(\\d{3})(\\2)(\\d{2})(\\2)(\\d{2})(\\2)(\\d{2})$/.test("+34 999 99 99 99")`, "font-weight: bold;", `=> ${/^(\+\d{2})(\s|\-)?(\d{3})(\2)(\d{2})(\2)(\d{2})(\2)(\d{2})$/.test("+34 999 99 99 99")} ((\\2): Debe coincidir con lo capturado en el grupo referenciado)`);
console.log(`%c/^(\\+\\d{2})(\\s|\\-)?(\\d{3})(\\2)(\\d{2})(\\2)(\\d{2})(\\2)(\\d{2})$/.test("+34 999-99-99-99")`, "font-weight: bold;", `=> ${/^(\+\d{2})(\s|\-)?(\d{3})(\2)(\d{2})(\2)(\d{2})(\2)(\d{2})$/.test("+34 999-99-99-99")} ((\\2): Debe coincidir con lo capturado en el grupo referenciado)\n\n`);

//Lookaround
console.log(`%cLookaround:`, "font-weight: bold;");
console.log(`%c/\\d(?=px)/g`, "font-weight: bold;", `=> https://regexr.com/5fa3i (Positive lookaround)`);
console.log(`%c/\\d(?!px)/g`, "font-weight: bold;", `=> https://regexr.com/5fa3l (Negative lookaround)\n\n`);

//Anchors
console.log(`%cAnchors:`, "font-weight: bold;");
console.log(`%c/^a/`, "font-weight: bold;", `  => https://regexr.com/5fa3o`);
console.log(`%c/a$/`, "font-weight: bold;", `  => https://regexr.com/5fa3r`);
console.log(`%c/s\\b/g`, "font-weight: bold;", `=> https://regexr.com/5fa3u`);
console.log(`%c/s\\B/g`, "font-weight: bold;", `=> https://regexr.com/5fa44\n\n`);

//Escaped characters
console.log(`%cEscaped characters:`, "font-weight: bold;");
console.log(`%c/\\(\\)\\[\\]\\.\\+\\*\\?\\-\\\\/`, "font-weight: bold;", `=> https://regexr.com/5fa4a\n\n`);

//Flags
console.log(`%cFlags:`, "font-weight: bold;");
console.log(`%c/a/`, "font-weight: bold;", `=> https://regexr.com/5fa4d (Sin flag)`);
console.log(`%c/a/g`, "font-weight: bold;", `=> https://regexr.com/5fa4g (global search)`);
console.log(`%c/a/i`, "font-weight: bold;", `=> https://regexr.com/5fa4j (ignore case)`);
console.log(`%c/a/ig`, "font-weight: bold;", `=> https://regexr.com/5fa4m (ignore case + global search)\n\n`);

//test()
console.log(`%cEjemplo de test():`, "font-weight: bold;");
console.log(`/^(\\+\\d{2})(\\s|\\-)?(\\d{3})(\\2)(\\d{2})(\\2)(\\d{2})(\\2)(\\d{2})$/.test("+34 999 99 99 99") => ${/^(\+\d{2})(\s|\-)?(\d{3})(\2)(\d{2})(\2)(\d{2})(\2)(\d{2})$/.test("+34 999 99 99 99")}`);
console.log(`/^(\\+\\d{2})(\\s|\\-)?(\\d{3})(\\2)(\\d{2})(\\2)(\\d{2})(\\2)(\\d{2})$/.test("+34 999-99-99-99") => ${/^(\+\d{2})(\s|\-)?(\d{3})(\2)(\d{2})(\2)(\d{2})(\2)(\d{2})$/.test("+34 999-99-99-99")}\n\n`);

//exec()
console.log(`%cEjemplo de exec():`, "font-weight: bold;");
console.log(`tr = new RegExp(/tr/,'ig') => ${tr}`);
console.log(`tigres = "${tigres}"`);
console.log(`while( (array = tr.exec(tigres)) !== null ) {
    console.log(\`array[0] => \$\{array[0]\} & tr.lastIndex => \$\{tr.lastIndex\}\`);
}\n\n`);
console.log(`%cResultado:`, "font-weight: bold;");
while( (array = tr.exec(tigres)) !== null ) {
    console.log(`array[0] => ${array[0]} & tr.lastIndex => ${tr.lastIndex}`);
}
console.log('\n\n');

//match()
console.log(`%cEjemplo match() con RegExp:`, "font-weight: bold;");
console.log(`"38946103-F".match(/(\\d{8})[\\s\\-]?(\\w)/i) =>`,"38946103-F".match(/(\d{8})[\s\-]?(\w)/i));
console.log('%c(No hay que usar el global search en caso de querer extraer los grupos de captura)\n\n', "font-weight: bold; color: red;");

//matchAll()
console.log(`%cEjemplo matchAll() con RegExp:`, "font-weight: bold;");
console.log(`[..."38946103-F 46994612L 42271953 B".matchAll(/(\\d{8})[\\s\\-]?(\\w)/ig)] =>`,[..."38946103-F 46994612L 42271953 B".matchAll(/(\d{8})[\s\-]?(\w)/ig)]);
console.log('%c(Es obligatorio usar el global search)\n\n', "font-weight: bold; color: red;");

//replace() con RegExp
console.log(`%cEjemplo replace() con RegExp:`, "font-weight: bold;");
console.log(`"La pizza con piña está buena".replace(/está buena/i,"no es pizza") => "${"La pizza con piña está buena".replace(/está buena/i,"no es pizza")}"`);
console.log(`"La pizza con piña está buena".replace(/con piña\\s/i,"") => "${"La pizza con piña está buena".replace(/con piña\s/i,"")}"\n\n`);

//search() con RegExp
console.log(`%cEjemplo search() con RegExp:`, "font-weight: bold;");
console.log(`"The Matrix".search(/matrix/i) => ${"The Matrix".search(/matrix/i)}`);
console.log(`"The Matrix".search(/casa/i) => ${"The Matrix".search(/casa/i)}\n\n`);

//split() con RegExp
console.log(`%cEjemplo split() con RegExp:`, "font-weight: bold;");
console.log(`"Esternocleidomastoideo".split(/o/ig) =>`,"Esternocleidomastoideo".split(/o/ig));
console.log(`"Yo también me odio por haceros leer tanto... oh tal vez no.".split(/e/ig) =>`,"Yo también me odio por haceros leer tanto... oh tal vez no.".split(/e/ig));
console.log(`\n\n`);


console.log(`Por si queréis saber como aplicar CSS a la consola del navegador => https://dev.to/annlin/consolelog-with-css-style-1mmp`);







