document.addEventListener("DOMContentLoaded",function (){
    const form = document.querySelector("form");
    const button = document.querySelector("button");

    form.addEventListener('input', () => {
        if(form.checkValidity()){
            button.removeAttribute('disabled');
            button.classList.add('active')
        } else {
            button.setAttribute('disabled', 'true');
            button.classList.remove('active')
        }
    })
})