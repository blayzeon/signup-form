const form = document.querySelector('form');
const pw1 = form.querySelector('#password');
const pw2 = form.querySelector('#confirm');
const pwError = form.querySelector('#pw-error');

function toggleError(set="off"){
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

form.addEventListener('submit', (e) => {
    const invalid = document.querySelector(':invalid');

    if (pw1.value !== pw2.value) {
        toggleError("on");
        e.preventDefault();
    }

    e.preventDefault();
});