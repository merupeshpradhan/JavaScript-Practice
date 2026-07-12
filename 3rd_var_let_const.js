// var var can be updated & re-decalare within its scope
// var a = 12;
// var a = 22;
// console.log(a);
// var b = 12;
// var b = "Rupesh Pradhan";
// console.log(b);

// let can be updated but can not be re-declare and it's a Block-scoped
// 1) Update name
// let name = "Rupesh";
// console.log(name);
// name = "Tapas";
// console.log(name);

// 3) re-declare
// let name = "Rupesh";
// let name = "Tapas"
// console.log(name);

// const nither be updated or re-declare and it's a block-scoped
// const v = "Rupesh";
// const z = "Pradhan"
// console.log(v,z);

// const v = "Rupesh";
// const v = "Pradhan";
// console.log(v);

// Primitive Data Type & Object

function SumNumber(number1, number2) {
  const input1 = number1;
  const input2 = number2;

  const big1 = BigInt(input1);
  const big2 = BigInt(input2);

  const total = big1 + big2;

  if (total.toString().length >= 16) {
    return total;
  } else {
    return Number(total);
  }
}

console.log(SumNumber(55484878784, 1245478786466593));
