//client side

$(document).ready(function(){
    console.log('app.js is running');




// axios({
//     url: "/events/save",
//     type: "POST",
//     data: {
//         "name": name,
//         "venue": venue,
//         "city": city,
//         "eventDateLocal": eventDateLocal
//     }
// })

//     $.ajax({
//         url: "/events",
//         type: "get",
//         contentType: "application/json"
//     }).done(function(data){
//         data.forEach(function(festival){
//             renderFestival(festival)
//         });
//     })
// })

//     $('form').submit(function(e){
//         e.preventDefault();
    
//     var formdata = $(this).serialize();

//     $(this).trigger("reset");

    $.ajax({
        url: "http://localhost:3000/events/save",
        type: "POST",
        dataType: "JSON",
        data: {
                "name": name,
                "venue": venue,
                "city": city,
                "eventDateLocal": eventDateLocal
                }
    }).done(function(data){
        console.log(data)
        renderFestival(data)
    })
})
// })
