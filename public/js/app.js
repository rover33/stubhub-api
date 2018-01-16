//client side

$(document).ready(function(){
    console.log('app.js is running');


    $('#festsubmit').submit(function(e){
        e.preventDefault();
    
    // var data = $(this).serialize();

    // $(this).trigger("reset");


axios({
    url: "http://localhost:3000/api/events/save",
    type: "POST",
    data: {
        "name": name,
        "venue": venue,
        "city": city,
        "eventDateLocal": eventDateLocal
    }
})
})
})



//     $.ajax({
//         url: "/api/events",
//         type: "get",
//         contentType: "application/json"
//     }).done(function(data){
//         data.forEach(function(festival){
//             renderFestival(festival)
//         });
//     })
// })



//     $.ajax({
        // url: "http://localhost:3000/api/events/save",
//         type: "POST",
//         dataType: "JSON",
//         data: {
//                 name: name,
//                 venue: venue,
//                 city: city,
//                 eventDateLocal: eventDateLocal
//                 }
//     }).done(function(data){
//         console.log(data)
//         renderFestival(data)
//     })
// })
// })
