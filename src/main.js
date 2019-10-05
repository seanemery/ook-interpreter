let tokenize = require('./tokenizer.js');
let parser = require('./parser.js');

function run(program, input) {
    const tapePtr = [];
    parser.checkSyntax(program);
    parser.checkInput(input);
    let tokens = tokenize(program);
    tokens = "abc";
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
        commands[token]();
    }
}

run("hello", "goodbye");