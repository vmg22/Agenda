document.getElementById(`loginForm`).addEventListener(`submit`, async function (event) {
    event.preventDefault();

    const username = document.getElementById(`username`).value;
    const password = document.getElementById(`password`).value;

    try {
        let response = await axios.get(`http://localhost:3001/usuarios`);
        console.log(response.data);

        let respuesta = response.data.some(user => user.username === username && user.password === password);
        if (respuesta) {
            alert(`login exitoso. Redirigiendo...`);
            window.location.href = `./agenda.html`;

        } else {
            alert(`usuario o pass no encotrados`);
        }
    } catch (error) {
        if (error.response){
        console.error(`error inesperado`,error.response);
    }



}

})