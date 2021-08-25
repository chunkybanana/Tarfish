module.exports = function interpret(code, inputs){
    let x = 0, y = 0, dir = 0, running = true, stack = [], skipping = false, output = '';
    let codebox = code.split(`\n`)
    while(running){
        if(skipping){
            skipping = false
        } else {
            let char = (codebox[y]&&codebox[y][x]) || ' ';
            switch(char){
                case '>': dir = 0; break;
                case 'v': dir = 1; break;
                case '<': dir = 2; break;
                case '^': dir = 3; break;
                case ';': running = false; break;
                case 'x': stack.push(x); break;
                case 'y': stack.push(y); break;
                case '=': skipping = stack.pop() === stack.pop(); break;
                case '+': stack.push(stack.pop()+1); break;
                case '-': stack.push(stack.pop()-1); break;
                case '{': stack.unshift(stack.pop()); break;
                case '}': stack.push(stack.shift()); break;
                case ':': let popped = stack.pop(); stack.push(popped, popped); 
                break;
                case '?': 
                    let input = inputs.pop();
                    if(typeof input == 'string'){
                        let [first, ...rest] = input;
                        stack.push(first.charCodeAt())
                        if(rest.length) inputs.push(rest.join(''))
                    } else stack.push(input);
                    break;
                case '.': output += String.fromCharCode(stack.pop()||32); break;
                case ',': output += (stack.pop()||'') + '\n'; break
            }
        }
        switch(dir){
            case 0: if(!codebox[y][++x]) x = 0; break;
            case 1: if(!codebox[++y]) y = 0; break;
            case 2: if(!codebox[y][--x]) x = codebox[y].length-1; break;
            case 3: if(!codebox[--y]) y = codebox.length - 1; break;
        }
        //console.log(x,y)
    }
    return output;
}