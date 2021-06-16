async function buscarInformacion(){

    const ciudad = document.querySelector('.inputt').value;
    

    const datos = await promesa.json()
    console.log(datos)
    console.log(datos)
    const divTiempo = document.querySelector('.tiempo')
    divTiempo.innerHTML = `la temperatura es de ${datos.main.temp} grados faherenheit`
    divTiempo.hidden = false    
    //asincronica
}


async function traerModelos(){

    const marca = document.querySelector('.inputt').value;

    const promesaModelos = await fetch(`https://motorcycle-specs-database.p.rapidapi.com/model/make-name/${marca}`, {
        headers:{
            "x-rapidapi-key": "661d408355msh1e6fb100202db8ep1a5087jsnd94a80c185a1",
            "x-rapidapi-host": "motorcycle-specs-database.p.rapidapi.com",
            "useQueryString": true
        },
    })

    const modelos = await promesaModelos.json()
    const divModelo = document.querySelector('.divmodelo')
    //console.log(modelos)

    modelos.forEach(function(valor){

        divModelo.innerHTML += `${valor.name} <button id = ${valor.id} onclick = "buscarModelo(this.id)" > Ver modelo </button> <br>`;

    })
    document.querySelector('.input').hidden = true
    document.querySelector('.divModelo').hidden = false

    
    

}

async function buscarModelo(id){

    const promesaModelos = await fetch(`https://motorcycle-specs-database.p.rapidapi.com/article/${id}`, {
        headers:{
            "x-rapidapi-key": "661d408355msh1e6fb100202db8ep1a5087jsnd94a80c185a1",
            "x-rapidapi-host": "motorcycle-specs-database.p.rapidapi.com",
            "useQueryString": true
        },
    })
    const modelo = await promesaModelos.json()

    console.log(modelo.articleImage.link)
  
}