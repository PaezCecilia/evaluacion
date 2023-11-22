const listaPrincipal = []

const crearObjeto = (nombre,error)=>{
    const registro = {
        nombre,
        error
    }
    return registro
}

const registro = (event)=>{
    event.preventDefault()
    let nombre = document.getElementById('nombre')
    let error = document.getElementById("error")
    let registro = crearObjeto(nombre.value,error.value)
    listaPrincipal.push(registro)
    nombre.value = ""
    error.value = ""
    mostrarRegistros()
}

const mostrarRegistros = ()=>{
    let tbody = document.getElementById("tabla")
    tbody.innerHTML = ""
    listaPrincipal.map((e,i)=>{
        tbody.innerHTML += `
        <tr>
        <th>${i}</th>
        <td>${e.nombre}</td>
        <td>${e.error}</td>
        <td><input type="checkbox"></td>
        </tr>
        `
    })
}