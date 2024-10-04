const form = document.querySelector(`.login-form`);

form.addEventListener('submit', handleSubmit);

function handleSubmit(Event) {
    Event.preventDefault();

    const {
    elements: {email, password}
    } = Event.currentTarget;

const trimmedEmail = email.value.trim();
const trimmedPassword = password.value.trim();

if (trimmedEmail === "" || trimmedPassword === "") {
    return alert(`All form fields must be filled in`);
}

const formData = {
    email: trimmedEmail,
    password: trimmedPassword
};

console.log(formData);

form.reset();
}
