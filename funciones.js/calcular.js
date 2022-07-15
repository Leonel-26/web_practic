
function CalcularIMC()
{

db.collection("calculo").add({
    
    kilos: document.getElementById("kilos").value,
    metros: document.getElementById("metros").value,
    centimetros: document.getElementById("centimetros").value,
    imc: document.getElementById("imc").value,
  
})
.then((docRef) => {
    console.log("Datos de IMC calculados", docRef.id);
    ("Datos de IMC calculados")
})
.catch((error) => {
    console.error("ERROR AL CALCULAR IMC", error);
    ("ERROR AL CALCULAR IMC")
});

}