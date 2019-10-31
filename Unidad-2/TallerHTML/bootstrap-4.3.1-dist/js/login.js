$(document).ready(function () {
    $( "#btnLogin" ).click(function() {
    	//-- Declarar variables
    	vUserName = $("#UserName").val();
    	vClave = $("#PassWord").val();
    	
    	if (vUserName == '' || vClave == '') {
    		alert('Debe diligenciar los campos del Formulario');
    	}
    	else{
    		if (vClave == 'CarlosArevalo'){
    		  window.location.href = "file:///D:/AppInHouse/EjercicioHTML/TemplateWEB/index.html";
    		}
    		else {
    			alert('La clave no es correcta');
    		}
    	}
});
});