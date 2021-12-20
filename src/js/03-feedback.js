import  throttle  from "lodash.throttle";
const STORAGE_KEY = "form message"

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
}
getFormValue();

const formData = {

};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    console.log('відправили форму')
};

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getFormValue() {
    const savedFormMessage = localStorage.getItem(STORAGE_KEY);
    const formValues = JSON.parse(savedFormMessage)
    const { message, email } = formValues;
    
    if ({ message, email }) {
        console.log(formValues)
        refs.textarea.value = message;
        refs.input.value = email;
    }
}