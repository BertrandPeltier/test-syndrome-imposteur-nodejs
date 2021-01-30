document.addEventListener('DOMContentLoaded', _ => {
    const buttonStartElement = document.getElementById('button-start');
    buttonStartElement.addEventListener('click', _ => {
        buttonStartElement.classList.toggle('hide');
        document.getElementById('test-form').classList.toggle('hide');
    });

});