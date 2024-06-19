document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const textbox = document.getElementById('textbox');
    const logs = document.getElementById('logs');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        formValidation(textbox);
        saveData(textbox, logs);
    })
})

function formValidation(textbox) {
    const validation = document.getElementById('validation');
    if (textbox.value === '') {
        validation.innerHTML = "Post cannot be blank";
    }
    else {validation.innerHTML = ''};
}

function saveData(textbox, logs) {
    if (textbox.value) {
        // const data = [];
        // data.push({'data':textbox.value});
        // localStorage.setItem('data', JSON.stringify(data))
        logData(textbox, logs);
    }
}

function logData(textbox, logs) {
    let li = document.createElement('li');
    li.textContent = textbox.value;
    logs.insertBefore(li, logs.firstChild); //this will insert the new element before the old one
    textbox.value = '';
}