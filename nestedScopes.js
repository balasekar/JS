function foo() {
    var a = 1;

    function bar() {
        var b = 2;

        function baz() {
            var c = 3;
            console.log( "baz:"+ a, b, c );    // 1 2 3
        }

        baz();
        console.log( "bar:"+ a, b );        // 1 2
    }

    bar();
    console.log( "foo:"+ a );                // 1
}

foo();