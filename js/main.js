const form = document.getElementById('form');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const numero = document.getElementById('numero');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	validate();
});

function validate() {
	// elimination des espaces avant et apres chaque mot
	const nomValue = nom.value.trim();
	const prenomValue = prenom.value.trim();
	const emailValue = email.value.trim();
	const numeroValue = numero.value.trim();
	
	if(nomValue === '') {
		setErrorFor(nom, 'Veuillez renseigner ce champ');
	}else if(!isName(nomValue)){
        setErrorFor(nom, 'Votre nom doit contenir uniquement les lettres');
    } else {
		setSuccessFor(nom);
	}

    if(prenomValue === '') {
		setErrorFor(prenom, 'Veuillez renseigner ce champ');
	}else if(!isName(prenomValue)){
        setErrorFor(prenom, 'Votre prenom doit contenir uniquement les lettres');
    } else {
		setSuccessFor(prenom);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Veuillez renseigner ce champ');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Votre email est invalide');
	} else {
		setSuccessFor(email);
	}
	
	if(numeroValue === '') {
		setErrorFor(numero, 'Veuillez renseigner ce champ');
	} else if(!isNumb(numeroValue)){
        setErrorFor(numero, 'Votre numero est mal forme');
    } else {
		setSuccessFor(numero);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^[A-Za-z0-9._-]+@[a-zA-Z0-9.-]{2,}\+.[a-zA-Z]{2,3}$/.test(email);
}

function isName(nom){
    return /^[a-zA-Z]*$/.test(nom);
}
function isNumb(numero){
    return /^[0-9]*$/.test(numero);
}