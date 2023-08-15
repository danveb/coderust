// Fibonacci Numbers 
// find the nth number in fibonacci sequence 

f0 = 0
f1 = 1
fn = fn-1 + fn-2 

f8 = f7 + f6
output = 13

function getFibonacci(n) {
  if(n === 0) return 0
  if(n === 1) return 1 
  return getFibonacci(n - 1) + getFibonacci(n - 2); 
}