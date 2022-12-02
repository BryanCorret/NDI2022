$(document).ready(function(){
    $.getJSON("DATA/detailsData.json", function(data){
        console.log(data); // Prints: Harry
    }).fail(function(){
        console.log("An error has occurred.");
    });
});