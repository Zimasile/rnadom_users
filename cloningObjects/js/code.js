let user = {
    name: 'Asekho',
}
// assign()
let newUser = Object.assign({}, user, {
    surname: 'Ngcukana',
    email : 'asekhongcukana@gmail.com'
});

// console.log(user);
// console.log(newUser);

// Spread operator
// let newUser = {...user,  ...{
//     surnane: 'Ngcukana',
//     email: 'asekhongcukana@gmail.com'
// }};
// console.log(newUser);

// JSON.parse(JSON.stringify())
// let newUser = JSON.parse(JSON.stringify(user));
// console.log(newUser);

// Garbage collection (GC)
/*
It purpose is to monitor memory allocation and determine when a 
block of allocated memory is no longer needed and reclaim it.
*/
// 0 comments on commit cda8bdf
// @Zimasile
 