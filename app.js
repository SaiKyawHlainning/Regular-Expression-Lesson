/* Modifiers */
// let patt;
// // patt = /steven/;
// // patt = /Steven/;
// patt = /steven/i;
// patt = /steven/gi;

// console.log(patt);
// console.log(patt.source);

// Constructor ()
// res = patt.constructor;
// console.log(res);

// Exec()
// const res = patt.exec('Steven Smith');

// console.log(res);
// console.log(res[0]);
// console.log(res.index);
// console.log(res.input);

// Test()
// const res = patt.test('Steven Smith');

// console.log(res);

// Match()
// const str = 'Steven Smith';
// const str = 'Hello, Steven Smith.  Steven, are yu ok?';

// const res = str.match(patt);
// console.log(res);

// Search ()
// const str = 'Hello, Steven Smith';
// const res = str.search(patt);
// console.log(res);

// replace()
// const str = 'Steven Smith';
// const newStr = str.replace(patt, 'John');
// console.log(newStr);

/* Symbols */
// let patt;
// patt = /^h/i; // Must Start with
// patt = / Smith$/; // Must End With
// patt = /^hello$/i;
// patt = /h.llo/i;
// patt = /e+/i;
// patt = /h*llo/i;
// patt = /gre?a?i?y/i;
// patt = /gre?a?y\?/;
// patt = /en(?= Smith)/gi;
// patt = /en(?! Smith)/gi;
// patt = /\d{4}/
// patt = /\d{3,5}/g;
// patt = /\d{5,}/g;

// const str = 'Hello, Steven Smith';
// const str = 'Hello';
// const str = 'Hello, Steven Smith. Hello, Een Johnson en Smith';
// const str = 'grey';
// const str = '100, 1000 or 20000? 3000000000';

// res = str.match(patt);
// console.log(res);

/* Brackets [] Character */
// let patt;
// // patt = /gr[ae]y/i;
// // patt = /[GX]ray/i;
// // patt = /[^GX]ray/i;
// // patt = /[a-z]/;
// // patt = /[A-Z]/;
// // patt = /[a-zA-Z]/;
// // patt = /[0-9][0-9]/;
// // patt = /[0-9]{3}/;
// patt = /[^1-4]/;

/* Braces {} Qusntifiers */
// let patt;
// // patt = /Hel{2}o/i;
// // patt = /Hel{2,5}o/i;
// patt = /Hel{2,}o/i;

/* Paretheses () Grouping */
// let patt = /^([0-9][0-9]){3}$/;

// // const str = 'Hello, Steven Smith';
// // const str = 'Gray';
// const str = '223344';

// const res = str.match(patt);

// console.log(res);

/* Metacharacters */
// let patt;
// // patt = /\w/;
// // patt = /\w+/;
// // patt = /\W/;
// // patt = /\d/;
// // patt = /\d+/;
// // patt = /\D/;
// // patt = /\s/;
// // patt = /\S/;
// patt = /hello\b/gi;
// // patt = /hello/gi;

// /* Assertions */
// // patt = /o(?=n)/;
// patt = /o(?!n)/;

// const str = 'Hello, Steven Smith helloon';
// // // const str = 'Gray';
// // const str = '22 3344';

// const res = str.match(patt);

// console.log(res);
