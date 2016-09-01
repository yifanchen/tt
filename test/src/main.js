import "babelify/polyfill"; // Needed for Babel's experimental features.
import * as math from "./module";
//import $ from 'jquery';

async function anwser() {
  return 42;
}

(function main() {
  anwser().then((v) => {
    console.info(v);
  });

  console.log(math.sum(5, 5));
})();

let n = 'george';
console.log(`this is ${n}`);

//let p = new Promise((resolve, reject) => {
  //if(true){
    //resolve('123');
  //}else {
    //reject('none');
    //console.log('this');
  //}
//})

console.log('123');
