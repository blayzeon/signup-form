const form = document.querySelector('form');
const pw1 = form.querySelector('#password');
const pw2 = form.querySelector('#confirm');

// toggles password error visuals on/off
function toggleError(set="off"){
    const pwError = form.querySelector('#pw-error');
    if (set === "on") {
        pw1.classList.add('invalid');
        pw2.classList.add('invalid');
        pwError.style.visibility = "visible";    
    } else {
        pw1.classList.remove('invalid');
        pw2.classList.remove('invalid');
        pwError.style.visibility = "hidden";    
    }
}

pw1.addEventListener('change', toggleError);
pw2.addEventListener('change', toggleError);

form.querySelector('button').addEventListener('click', (e) => {
    // ensures that the passwords match
    if (pw1.value !== pw2.value) {
        toggleError("on");
        e.preventDefault();
    }

    // prevent empty fields from being submitted
    form.querySelectorAll('input').forEach((field) => {
        if (field.value === "") {
            field.setAttribute('required', "required");
        }
    });

    const invalid = document.querySelector(':invalid');

    if (invalid === true) {
        e.preventDefault();
    }
});