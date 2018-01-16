//client side

$(document).ready(function(){
    console.log('app.js is running');


    $('#postFest').submit(function(e){
        e.preventDefault();
        console.log(name)

        axios({
            method: "POST",
            url: "/events/save",
            dataType: "application/x-www-form-urlencoded",
            data: {
                name: name,
                venue: venue,
                city: city,
                eventDateLocal: eventDateLocal
            }
        
        })
    })
})