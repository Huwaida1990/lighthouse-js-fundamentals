// function loopyLighthouse(range, multiples, words){
//   const result = []; 
//   for (let i = range[0]; i < range[1]; i++) {
//     if (i % multiples[0] === 0  && i % multiples[1] !== 0){
//       result.push(words[0])
//       // console.log(words[0])
//     }else if (i % multiples[1] ===0 && i % multiples[0] !== 0){
//       result.push(words[1])
//       // console.log(words[1])
//     }
//     else if (i % multiples[0] === 0 && i % multiples[1] === 0){
//       result.push(words[0]+ words[1])
//       // console.log(words[0]+ words[1])
//     }
//     else{
//       result.push(i);
//       // console.log(i)
//     }

//   }
//   return result;
// }

function loopyLighthouse(range, multiples, words){
  var a = range[0]
  var b = range[1]
  var c = multiples[0]
  var d = multiples[1]
  var e = words[0]
  var f = words[1]

  for (var i = a; i <= b; i++) {
    if (i % (c * d) === 0)
      console.log(e + f);
    else if(i % c === 0 )
      console.log(e);
    else if (i % d === 0)
      console.log(f);
    else
      console.log(i)
  }
}
console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
console.log()