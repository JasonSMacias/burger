$(document).ready(function(){

  $(".mark-eaten").on("click", function() {

    // read id from button
    const burgerId = $(this).attr("data-id");
    $.ajax({
      url: "/api/burgers/" + burgerId,
      method: "PUT"
    }).then(function(data) {
      location.reload();
    });

  });

  $(".delete").on("click", function(){

    // read id from button
    const burgerId = $(this).attr("data-id");
    $.ajax({
      url: "/api/burgers/" + burgerId,
      method: "DELETE"
    }).then(function (data) {
      location.reload();
    });

  }) 

  $("#submit-btn").on("click", function(e) {
    e.preventDefault();

    // package up burgers
    const burgerId = {
      burger_name: $("#burger-input").val().trim()
    };
    console.log(burgerId);

    $.ajax({
      url: "/api/burgers/",
      method: "POST",
      data: burgerId // req.body
    })
    .then(function(data) {
      location.reload();
    });
  });

});