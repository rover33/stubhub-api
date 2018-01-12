//client side

$(document).ready(function(){
    console.log('app.js is running');

    $.ajax({
        url: "/events",
        type: "get",
        contentType: "application/json"
    }).done(function(data){
        data.forEach(function(festival){
            renderFestival(festival)
        });
    })
})

    $('form').submit(function(e){
        e.preventDefault();
    
    var formdata = $(this).serialize();

    $(this).trgigger("reset");

    $.ajax({
        url: "/events/save",
        type: "POST",
        data: formdata,
        dataType: "string"
    }).done(function(data){
        console.log("post succuess")
        renderFestival(data)
    })
})
