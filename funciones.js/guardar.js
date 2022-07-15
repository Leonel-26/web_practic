
function guardar()
{

db.collection("calculo").add({

    nombre: document.getElementById("nombre").value,
    edad: document.getElementById("edad").value,
    sexo: document.getElementById("sexo").value,
    kilos: document.getElementById("kilos").value,
    metros: document.getElementById("metros").value,
    centimetros: document.getElementById("centimetros").value,
    imc: document.getElementById("imc").value,
    
  
})
.then((docRef) => {
    console.log("Datos de IMC calculados", docRef.id);
    alert("Datos de IMC calculados")
})
.catch((error) => {
    console.error("ERROR AL CALCULAR IMC", error);
    alert("ERROR AL CALCULAR IMC")
});

}
const resultadosFirebase = document.getElementById("formulario");
function consultar()
{
  resultadosFirebase.innerHTML=""
    db.collection("calculo").get().then((Datos) => 
    {
        Datos.forEach((doc) => 
        {
            const filas = doc.data();
         

            resultadosFirebase.innerHTML += `
           <div class="card card-body mt-3 border-primary">
                <h3 class="h5">Cálculo IMC:</h3>
                <p>nombre:${filas.nombre}</p>
                <p>edad:${filas.edad}</p>
                <p>sexo: ${filas.sexo}</p>
                <p>kilos: ${filas.kilos}</p>
                <p>metros: ${filas.metros}</p>
                <p>centimetros: ${filas.centimetros}</p>
                <p>imc: ${filas.imc}</p>
                 
                <div>
                <button class="btn btn-primary btn-delete" data-id="${doc.id}">
                     Borrar
                </button>
                <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
                    Editar
                </button>
                <button class="btn btn-warning btn-history" data-id="${doc.id}">
                    Regresar
                </button>
                </div>
            </div>`;

        });
    });
  
}