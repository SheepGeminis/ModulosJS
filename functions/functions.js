    var divTexto1
    
    document.addEventListener('DOMContentLoaded', function (){
        
        fetch('https://ddragon.leagueoflegends.com/cdn/10.6.1/data/es_MX/champion.json')
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (myJSON) {
            divTexto1 = "<h2>" + myJSON.data["Tristana"].id + ": " +myJSON.data["Tristana"].title + "</h2>" + "<p>" + myJSON.data["Tristana"].blurb + "</p>";
        })
    });

    var divTexto2

    document.addEventListener ('DOMContentLoaded', function (){
    
        fetch('https://ddragon.leagueoflegends.com/cdn/10.6.1/data/es_MX/champion.json')
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (myJSON) {
            divTexto2 = "<h2>" + myJSON.data["Poppy"].id + ": " +myJSON.data["Poppy"].title + "</h2>" + "<p>" + myJSON.data["Poppy"].blurb + "</p>";
        })
    });

    export {divTexto1, divTexto2}