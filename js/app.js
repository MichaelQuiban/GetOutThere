//Key:d357b7d536712c642322587b5f4719
//GKey:AIzaSyAW4mdIwEJowGz1TnIVLvjSgpdXCQW92Fw

$(document).ready(function() {
    console.log("Ready!");

   //Make a call for this information.
  function getMeetup(search, location) {
    $.ajax({
      //API Server
      url:'https://api.meetup.com/find/groups',
      type: 'GET',
      dataType: 'jsonp',
      data: {
        key:'d357b7d536712c642322587b5f4719',
        text: search,
        location: location
      },
      success: function(data) {
        console.log(data);
        displayResults(data);
      },
      error: function(error) {
        console.log(error);
      }
    })
  };

  //Display that query'd results.
  function displayResults(data) {
    $("#events").empty();
    for (var i = 0; i < 5; i++) {
      var event = "";
      event += "<li>";
      event += "<p class = 'meetup-name'>" + data.data[i].name + "</p>";
      if (data.data[i].key_photo) {
        event += "<img src ='" + data.data[i].key_photo.highres_link +
         "' width='350px' height='250px' border='1px solid black'>";
      }
	      event += "<p class = 'meetup-description'>" + data.data[i].description + "</p>";
	      event += "<p class = 'meetup-state'>" + "State:" + " " + data.data[i].state + "</p>";
	      event += "<p class = 'meetup-state'>" + "City:" + " " + data.data[i].city + "</p>";
	      event += "<a class = 'meetup-link' href = " + "'" + data.data[i].link + "'" + ">" + "Event Page" + "</a><br>";
	      event += "<button class = 'meetup-location' type = 'button'>" + "Grab Location" + "</button>";
	      event += "</li><hr>"; 
	      $("#events").append(event);
    }  
  }

   

  //Submit request performed here...
  $("#search-form").submit(function(e) {
    e.preventDefault();
    //Grab the dropdown search query and store it in a variable.
    var search = $("#event-type option:selected").text();
    var location = $(".address").val();
    $(".address").val("");
    //Debug information.
    console.log(search + " has been searched for...");
    console.log("Getting results...");
    getMeetup(search, location);
    console.log("Results retrieved...");
  });

});
