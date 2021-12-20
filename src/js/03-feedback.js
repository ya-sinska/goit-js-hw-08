import  throttle  from "lodash.throttle";
const STORAGE_KEY = "form message"

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
}
const formData = {};

// Виклик функції для отримання даних з локального збереження (з самого початку загрузки)
getFormValue();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
     // забираю перезагрузку сторінки 
    e.preventDefault();
    // Щоб пуста форма не відправлялась
    if (refs.input.value !== '' || refs.textarea.value !== "") {
        // 'виводжу дані які внесені в форму щоб побачити що піде на бекенд прі відправці форми
        console.log(`Ведений емейл:${refs.input.value}`, `Введене повідомлення:${refs.textarea.value}`)
        console.log('відправили форму')
        //    очищаю поля форми
        e.currentTarget.reset();
        // очищаю локальне збереження
        localStorage.removeItem(STORAGE_KEY)
    }
    
};

function onFormInput(e) {
    // Записую дані в об єкт формдата 
    formData[e.target.name] = e.target.value;
    // зберігаю об єкт в локальне збереженняб перед цим перетворюю 
    // об єкт в строку методом стрінгіфай
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
// Функція для отримання даних з локального збереження

function getFormValue() {
    const savedFormMessage = localStorage.getItem(STORAGE_KEY);
    const formValues = JSON.parse(savedFormMessage)
    
    if (formValues) {
        // Якщо заповнені два поля 
        const { message, email } = formValues;
        if ( message && email) {
        refs.textarea.value = message;
        refs.input.value = email;
        }
        // якщо заповнене було лиш одне поле щоб з локального збереження
        // в пусте поле не вставляло undefind
        else if (message) {
            refs.textarea.value = message;
    }
        else if (email) {
        refs.input.value = email;
        }
       
   }
   
}