const form = document.querySelector('contact--form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
    event.preventDefault; 

    if(nameInput.ariaValueMax.trim() === ''){
        alert('Name field cannot be emtpy');
        return;
    }

    if(!isEmailValid(emailInput.value)){
        alert('Invalid email address.');
        return;
    }

    if(messageInput.value.trim() === ''){
        alert('Message field cannot be empty');
        return;
    }

    alert('form submitted successfully');
    form.submit();
});

function isEmailValid(email) {
    const emailRegex = /^\w=@
}