// GAME OF THRONES CHARACTERS AND HOUSES
// Grab a list of all characters
// Print out their name and what house they belong to
// Make the house clickable
// When clicked, print the house information to the page



$(function(){

    let url = 'https://www.anapioficeandfire.com/api/characters/?pageSize=200';
    
    $.get(url).done(function(response){
        for(i = 0; i < response.length; i++){
            let name = response[i].name;
            if(name == "" || response[i].allegiances == ""){
                
            } else {
                $.get(response[i].allegiances).done(function(house){
                    let houses = house.name
                    $('#houses').append(`<li id='name${i}'>${name} of house <a href="${house.url}">${houses}</a></li>`);
                    $(`#name${i}`).append(`<li>${name} - <a href="${house.url}">${houses}</a></li>`);
                })
            }
        }
    })

}); 