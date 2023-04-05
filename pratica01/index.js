const contatos = [{nome: "NOME DO CONTATO", fone: "FONE DO CONTATO"}];

const root = document.getElementById(id.main);

function Titulo(nome) {
    const h2 = document.createElement('h2');
    h2.textContent = nome;
    return h2;
}
  
function InputText() {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Nome do contato';
    return input;
}

function InputTel() {
    const input = document.createElement('input');
    input.type = 'tel';
    input.placeholder = 'Fone do contato';
    return input;
}

function InputSubmit() {
    const input = document.createElement('input');
    input.type = 'submit';
    input.value = 'Enviar dados do formulário';
    return input;
}

function FormContato() {
    const form = document.createElement('form');
    const nomeInput = InputText();
    const foneInput = InputTel();
    const submitButton = InputSubmit();
    
    form.appendChild(nomeInput);
    form.appendChild(foneInput);
    form.appendChild(submitButton);
  
    form.addEventListener('submit', handleSubmit);
  
    return form;
}