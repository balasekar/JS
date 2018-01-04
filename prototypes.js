var foo = {
	a : "world"
}

var bar = Object.create(foo);

bar.b="Hello";

console.log(bar.b);
console.log(bar.a);