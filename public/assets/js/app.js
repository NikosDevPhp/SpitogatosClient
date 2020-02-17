$(function() {
     $("#search-form").submit(function(event){
         event.preventDefault();
        $.ajax({
            type: "POST",
            url: config.apiUrl,
            data: $('#search-form').serialize(),
            beforeSend: function() {
                $("#table-body").html('');
            },
             success: function(data){
                var response = data.data; 
                var txt = "";
                if (response.length > 0) {
                    for(var i=0;i<response.length;i++){
                        txt += "<tr><td>" + response[i].location + 
                                "</td><td>" + response[i].type_concat +
                                "</td><td>" + response[i].availability +
                                "</td><td>" + response[i].price +
                                "</td><td>" + response[i].square_meters + "</td></tr>";
                    }
                  
                    $("#table-body").append(txt);
                    $("#table-results").removeClass("hidden");
                    $('html, body').animate({
                        scrollTop: $("#table-results").offset().top
                    }, 1100);
                }
             },
            error: function(xhr, ajaxOptions, thrownError){
                    console.log(xhr.responseText);
                    alert("One of your input fields is incorrect, check console");
            }
        });
     });

     $("#delete-click").click(function() {
        $("#table-results").addClass("hidden");
     });

});
