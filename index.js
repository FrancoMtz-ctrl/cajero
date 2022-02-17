var nombre ="";
var objPersonas = [

    {
        user: "Mali",
        pass: "Helloworld",
        saldo: 100
    },
    {
        user: "Gera",
        pass: "133t",
        saldo: 200

    },
    {
        user: "Maui",
        pass:"123",
        saldo: 300
    }
]
document.getElementById("usuarioNombre").innerText= localStorage.getItem("User");
document.getElementById("saldoCuenta").innerText= localStorage.getItem("Saldo");
function login() {
    var user = document.getElementById("user").value
    var pass = document.getElementById("pass").value
    let hola= 0

    for(i = 0; i < objPersonas.length; i++){
        if(user == objPersonas[i].user && pass == objPersonas[i].pass){
            //console.log(user + " Accesaste a tu banca personal");
            hola = 1;

            localStorage.setItem("User", user);
            //localStorage.setItem("Saldo", saldo);

            localStorage.setItem("Saldo", saldo);
        } 
    }
    if(hola == 1){
        location="principal.html";
        traerUsuario();
        
    }
    else{
        alert("Usuario o pass erroneo")
    }

}



function traerUsuario(){
    
    document.getElementById("saldoCuenta").innerHTML = nombre;
}
