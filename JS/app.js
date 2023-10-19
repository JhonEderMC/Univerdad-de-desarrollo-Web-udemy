function sum() {
    console.log('hi');
    const form = document.forms['form'];
    //const sum = Number(form['number1'].value) + Number(form['number2'].value);
    const sum = +form['number1'].value + +form['number2'].value;

    console.log('number1: ',form['number1'].value);
    console.log('number2: ',form['number2'].value);
    const result = document.getElementById('result');
    result.innerHTML = `El resultado es: ${sum}`;
}
