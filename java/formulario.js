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
        let capturaNombre = document.getElementById("nombre").value;
        let capturaCedula = document.getElementById("cedula").value;
        let capturaCorreo = document.getElementById("email").value;
        let capturaTelefono = document.getElementById("tele").value;
        document.getElementById("verNombre").innerHTML = capturaNombre;
        document.getElementById("verEdad").innerHTML = capturaEdas;
        document.getElementById("verCorreo").innerHTML = capturaCorreo;
        document.getElementById("verTelefono").innerHTML = capturaTelefono;
        
    }