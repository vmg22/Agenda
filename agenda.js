const contactos = [];

function addContactRow(contacto) {
    const tbody = document.querySelector('#contacts-table tbody');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${contacto.nomyApe}</td>
        <td>${contacto.telefono}</td>
        <td>${contacto.direccion}</td>
        <td>${contacto.email}</td>
    `;
    tbody.appendChild(tr);
}

function showSuccessMessage() {
    const messageDiv = document.getElementById('success-message');
    messageDiv.style.display = 'block';
    setTimeout(() => messageDiv.style.display = 'none', 3000);
}

function addContact(event) {
    event.preventDefault();

    const nomyApe = document.querySelector('#nomyape').value.trim();
    const telefono = document.querySelector('#telefono').value.trim();
    const direccion = document.querySelector('#direccion').value.trim();
    const email = document.querySelector('#email').value.trim();

    if (!nomyApe || !telefono || !direccion || !email) {
        alert('Complete todos los campos.');
        return;
    }

    const nuevoContacto = { nomyApe, telefono, direccion, email };
    contactos.push(nuevoContacto);
    addContactRow(nuevoContacto);
    showSuccessMessage();
    document.querySelector('#formulario_contactos').reset();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#formulario_contactos').addEventListener('submit', addContact);
});
