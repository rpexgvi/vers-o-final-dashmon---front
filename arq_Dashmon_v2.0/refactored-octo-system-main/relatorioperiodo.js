
function filtrar(){

    fetch("http://localhost:8080/eventos/" + 
    document.getElementById("txtinicio").value + 
    "/" + document.getElementById("txtfim").value)
        .then(res => res.json())
        .then(res => {
            var tabela =

            "<table class='table table-striped'>" +
            "<thead>" +
            "<tr>" +
            "<th scope='col'>Data Evento</th>" + 
            "<th scope='col'>Nome Alarme</th>" + 
            "<th scope='col'>Descrição Alarme</th>" +
            "<th scope='col'>Hostname do Equipamento</th>" +
            "<th scope='col'>IP do Equipamento</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";
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

            tabela+="</tbody></table>";
            document.getElementById("resultado").innerHTML = tabela;
        });


}
