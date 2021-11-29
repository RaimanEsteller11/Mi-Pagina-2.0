function IniciarSesion(formulario){

    usuario = document.getElementById("txtusuario").value;
    password = document.getElementById("txtpass").value;

    if (usuario == 'admin' && password == '123456'){
        swal({
            title:"Bienvenido",
            text:"Inicio de sesion correcto",
            icon:"success",
        }).then(()=>{
            window.location.href = "./pages/inicio/inicio.html";
        })
    }else{
        swal({
            title:"Datos invalidos",
            text:"El usuario o la contraseña son incorrectas",
            icon:"error",
        })
    }
}