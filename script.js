document.addEventListener('keydown',function(event){    /* when a number is pressed it will be displayed on the screen */
    const display=document.querySelector('input[name="display"]');
    const key=event.key;
    if(!isNaN(key) && key!='.'){
        if (!(display.value === '0' && key !== '.')) {
            display.value += key;
        } 
        else {
            display.value = key;
        }
    }
    switch(key){
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            if(display.value !== '' && !/[+\-*/.%]$/.test(display.value)){
                display.value+=key;
            }
            break;
        case '.':
            if(!display.value.includes('.')){
                display.value+=key;
            }
            break;
        case '=':
        case 'Enter':
            display.value=eval(display.value.replace('x','*')); /* performs the operation */
            break;
        case 'Backspace':
            display.value=display.value.slice(0,-1); /* erases one digit */
            break;
        case 'Escape':
            display.value=''; /* whole content is erased */
            break;
    }
});