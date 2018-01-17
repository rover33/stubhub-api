//client side

$(document).ready(function(){
    console.log('app.js is running');

    
    $.ajax({
        url: "/events/search",
        type: "get",
        contentType: "application/x-www-form-urlencoded",
    }).done(function(data){
        data.forEach(function(festival){
            renderFestival(festival)
        })
    })
   
    //submit button to send data to db
    $('#postFest').submit(function(e){
        e.preventDefault();

    var formData = $(this).serialize();

    $(this).trigger("reset");

    //post route to save data from front end to backend
    $.ajax({
        url: "/events/save",
        type: "post",
        contentType: "application/x-www-form-urlencoded",
        data: formData
    }).done(function(data){
        console.log(data)
        });
    })
})
