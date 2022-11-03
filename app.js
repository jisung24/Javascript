'use strict';
const express = require('express');
// console.log(express); // return application객체! 
const app = express(); // express객체의 인스턴스 app객체!! (new 생략된거임..!)

// app과 application비교!
console.log(`app >> ${app}`);
console.log(`application >> ${express.application}`);
// app.listen(3000, async() => console.log(`3000port is open!`));