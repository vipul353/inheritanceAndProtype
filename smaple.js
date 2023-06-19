
Array.prototype.calculateSum = function() {
    return this.reduce((acc, curr) => acc + curr, 0);
  };
  

  let array1 = [1, 2, 3, 4, 5];
  let array2 = [10, 20, 30, 40, 50];
  let array3 = [2, 4, 6, 8, 10];
  

  let sum1 = array1.calculateSum();
  let sum2 = array2.calculateSum();
  let sum3 = array3.calculateSum();
  
  console.log(sum1); // Output: 15
  console.log(sum2); // Output: 150
  console.log(sum3); // Output: 30
  