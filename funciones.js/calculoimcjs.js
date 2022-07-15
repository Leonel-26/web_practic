// JavaScript Document
function CalcularIMC() {
    		var formulario= document.getElementById("formulario")
    		var kilos= +formulario.kilos.value;
    		var metros= +formulario.metros.value;
    		var centimetros= +formulario.centimetros.value;
    		var altura = (metros * 100 + centimetros) / 100;
    		
    		var imc = kilos / (altura * altura);
    		formulario.imc.value = imc.toFixed(2);
    		
    		if(imc < 18.5)
    		{
    			alert('Bajo peso');
    		} 
    		else if(imc >=18.5 && imc <= 24.9)
    		{
    			alert("Adecuado o Normal");
    		}
    		else if(imc >=25.0 && imc <= 29.9)
    		{
    			alert("Sobrepeso");
    		}
    		else if(imc >=30.0 && imc <= 34.9)
    		{
    			alert("Obesidad Grado I");
    		}
    		else if(imc >=35.0 && imc <= 39.9)
    		{
    			alert("Obesidad Grado II");
    		}
    		else if(imc >=40 && imc <= 49.9)
    		{
    			alert("Obesidad Grado III");
    		}
			else if(imc >=50)
    		{
    			alert("Obesidad Grado IV");
    		}
    	}