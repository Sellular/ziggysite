const submitButton = document.getElementById('formSubmitButton');
const eatenMessage = document.getElementById('eatenMessage');
const messageField = document.getElementById('messageInput');

submitButton.addEventListener('click', () => {
    eatenMessage.classList.add('active');
    messageField.value = "";
});