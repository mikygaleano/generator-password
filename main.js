import './style.css'



const inputLongiNumber = document.getElementById('number'),
inputLongiRange = document.getElementById('range'),
domTodos = document.getElementById('todos'),
domBtnGenerator = document.getElementById('generator'),
domGenerarpassword = document.getElementById('generarpassword');

const numeros = '0123456789',
mayusculas = 'ABCDFGHIJKMNÑOPQRSWXYZ',
minusculas = 'abcdfghijkmnñopqrswzyz',
simbolos = '-+/*';

let contraseña = '';

const eventNumber = () => {
    inputLongiRange.value = inputLongiNumber.value;
};
const eventRange = ()=> {
    inputLongiNumber.value = inputLongiRange.value;
};

const option = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let caracteres = '';

    checkboxes.forEach(checkbox => {

        if (domTodos.checked) {
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            })
        }; 
        
        if (checkbox.checked) { 
            const id = checkbox.id;
            if (id === 'mayusculas') {
                caracteres += mayusculas;
            } else if (id === 'minusculas') {
                caracteres += minusculas;
            } else if (id === 'simbolos') {
                caracteres += simbolos;
            } else if (id === 'numeros') {
                caracteres += numeros;
            } 
        };

    });

    return caracteres; // Devolver la cadena de caracteres
};


document.addEventListener('DOMContentLoaded', ()=> {
    const defaultValue = '8'; // Valor predeterminado deseado
    inputLongiNumber.value = defaultValue;
    inputLongiRange.value = defaultValue;
    inputLongiNumber.addEventListener('input', eventNumber);
    inputLongiRange.addEventListener('input', eventRange); 
    
    domBtnGenerator.addEventListener('click', () => {
        contraseña = ''; // Restablecer la contraseña
        const caract = option();
        let longitud = parseInt(inputLongiNumber.value, 10);
        console.log(caract);
        console.log(longitud);
        domGenerarpassword.innerHTML = ''; // Borra contenido anterior

        const newInput = document.createElement('input');

        for (let i = 0; i < longitud; i++) {
            const random = caract.charAt(Math.floor(Math.random() * caract.length));
            contraseña += random;
        }

        newInput.value = contraseña;

        newInput.classList.add('w-50', 'rounded-lg', 'border', 'p-1');
        domGenerarpassword.append(newInput);

        newInput.select();

    });
});