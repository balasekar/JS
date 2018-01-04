function makeAdder(x){
	function add(y){
		return x+y;
	}
	return add;
}

var addOne = makeAdder(1);
var addTen = makeAdder(10);

console.log(addOne(2));
console.log(addOne(42));
console.log(addTen(2));