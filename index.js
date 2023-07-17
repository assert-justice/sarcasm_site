function sarcasm(line){
    line = line.toLowerCase();
    const res = [];
    let wordIdx = 0;
    for (let i = 0; i < line.length; i++) {
        let code = line.charCodeAt(i);
        // if(code > 96 && code < 123 && i % 2 === 0) code -= 32;
        if(i === 0 || line[i-1] === ' ') wordIdx = 0;
        if(code > 96 && code < 123 && wordIdx % 2 === 1) {
            code -= 32;
        }
        wordIdx++;
        res.push(code);
    }
    return String.fromCharCode(...res);
}

function main(){
    const form = document.querySelector('form');
    const input = document.querySelector('#input');
    const output = document.querySelector('#output');
    function onSubmit(e){
        e.preventDefault();
        const text = input.value;
        input.value = "";
        console.log(text);
        const TeXt = sarcasm(text);
        output.innerHTML = TeXt;
    }
    form.addEventListener('submit', onSubmit);
}

main();

console.log(sarcasm("look bitch fucking work"));
