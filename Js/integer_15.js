let a = prompt("Raqamni kiriting; ");
a = a*1
let birlik = Math.floor( a / 100 );
let onlik = Math.floor(( a / 10) % 10);
let yuzlik = ( a % 100 ) % 10;

let result = onlik * 100 + birlik * 10 + yuzlik * 1;
document.write ( result );