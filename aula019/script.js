function soma(x = 0, y = 0) {
    return x + y;
}

console.log(soma(2, 2));
console.log(soma());
console.log(soma(2));

const raiz = function(num = 0) {
    return Math.sqrt(num);
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(raiz());

const sub = (x = 0, y = 0) => x - y;

console.log(sub());
console.log(sub(3));
console.log(sub(5, 3));
