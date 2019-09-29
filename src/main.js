function run(program, input) {
    validateSyntax(program);
    validateInput(input);
    let tokens = tokenizeProgram(program);
    let commands = {
            a: function(){},
            b: function(){},
            c: function(){},
            d: function(){},
            e: function(){},
            f: function(){},
            g: function(){},
            h: function(){},
    };

    for(let token of tokens) {
        console.log(token);
    }
}
