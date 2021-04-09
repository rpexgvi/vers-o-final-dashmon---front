function carregarusuario(){
    // Java => Objeto
    // Javascript => Json
    // HTML => String
    
    var usuariostr = localStorage.getItem("usuariologado");

  
    if (usuariostr!=null){
        var usuariojson = JSON.parse(usuariostr);
        
        document.getElementById("foto").innerHTML =
        "<img src=../imagens/" + usuariojson.foto + " width='120'>";

        document.getElementById("dados").innerHTML =
        "<h3>" + usuariojson.nome + " (" + usuariojson.racf + ")" + "<br><br>" +
        usuariojson.email + "</h3>";

//get dos alarmes








    }else{
        window.location="login.html";
    }
}

function logar() {
    //Get ou post? - Post
    var carta = {
        "email": document.getElementById("txtemail").value,
        "racf": document.getElementById("txtemail").value,
        "senha": document.getElementById("txtsenha").value
    }

    //Definindo o envelope
    var envelope = {
        method: "POST",
        body: JSON.stringify(carta),
        headers: {
            "content-type": "application/json"
        }
    }

    fetch("http://localhost:8080/login", envelope)
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("usuariologado",JSON.stringify(res));
            window.location = "usuario.html";
      
        })
        .catch(err => {
            window.alert("Não foi possivel logar.")
        });
}


function filtrar(){

    window.alert("http://localhost:8080/eventos/" + 
    document.getElementById("txtinicio").value + 
    "/" + document.getElementById("txtfim").value)

    fetch("http://localhost:8080/eventos/" + 
    document.getElementById("txtinicio").value + 
    "/" + document.getElementById("txtfim").value)
        .then(res => res.json())
        .then(res => {
            var tabela =
            "<table border='1' align='center'>" +
            "<tr>" +
            "<th>Data Evento</th>" + 
            "<th>Nome Alarme</th>" + 
            "<th>Descrição Alarme</th>" +
            "<th>Hostname do Equipamento</th>" +
            "<th>IP do Equipamento</th>" + 
            "</tr>";
            // preencher a tabela (for)

            for (cont=0;cont<res.length;cont++){
                tabela+=
                "<tr>"+
                "<td>"+ res[cont].data + "</td>" +
                "<td>"+ res[cont].alarme.nome + "</td>" +
                "<td>"+ res[cont].alarme.descricao + "</td>" +
                "<td>"+ res[cont].equip.hostname + "</td>" +
                "<td>"+ res[cont].equip.ipaddr + "</td>" +
                "</tr>"
            }

            tabela+="</table>";
            document.getElementById("resultado").innerHTML = tabela;
        });


}
