/* Estructura función JS:
Tipo 1 estandar:
    function nombreFuncion(param1, param2...){
        ...
    }
    
Tipo 2 función anónima o clousure:
    const funcionAnonima = function(param1, param2...){
        ...
    }
    
Tipo 3 funcion flecha
    const funcionFlecha = (param1, param2...)=>{
        ...
    }*/

    function capturaValoresInput() {
        let capturaNombre = document.getElementById("user_name").value;
        let capturaEdad = document.getElementById("user_age").value;
        let capturaCorreo = document.getElementById("user_email").value;
        let capturaTelefono = document.getElementById("user_tel").value;
        document.getElementById("verNombre").innerHTML = capturaNombre;
        document.getElementById("verEdad").innerHTML = capturaEdas;
        document.getElementById("verCorreo").innerHTML = capturaCorreo;
        document.getElementById("verTelefono").innerHTML = capturaTelefono;
        
    }