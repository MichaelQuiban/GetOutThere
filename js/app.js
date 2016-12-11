//Key:d357b7d536712c642322587b5f4719
//<p id = "event-one"></p>
				//<li><img id = "placeholder" src="img/placeholder-img.png" style="width:345px;height:200px;"></li>
				//<!--Event Description-->
				//<p id = "description-one" class ="meetup-description"></p>

$( document ).ready(function() {
    console.log( "Ready!" );

	function getMeetup(search) {
		$.ajax({
			//API Server
			url:'https://api.meetup.com/find/groups',
			type: 'GET',
			dataType: 'jsonp',
			data: {
				key:'d357b7d536712c642322587b5f4719',
				text: search,
			},
			success: function(data) {
				console.log(data);
				for (i = 0; i < 5 ; i++) {
					var event = "";
					event += "<li>";
					event += "<p class = 'meetup-name'>" + data.data[i].name + "</p>";
					if (data.data[i].key_photo) {
						event += "<img src ='" + data.data[i].key_photo.highres_link +
						 "' width='350px' height='250px' border='1px solid black'>";
					}

					event += "<p class = 'meetup-description'>" + data.data[i].description + "</p>";
					event += "<p class = 'meetup-state'>" + "State:" + " " +data.data[i].state + "</p>";
					event += "<p class = 'meetup-state'>" + "City:" + " " +data.data[i].city + "</p>";
					event += "</li><hr>";


					$("#events").append(event);
					$(".meetup-description").readmore();
				}
			},
			error: function(error) {
				console.log(error);
			}
		})
	};

	/* function displayMap() {
		$.ajax ({
			url: 'http://maps.googleapis.com/'
		})
	}
	*/

	//Submit request performed here...
	  $("#search-form").submit(function(e) {
		e.preventDefault();
		//Grab the dropdown search query and store it in a variable.
		var search = $( "#event-type option:selected" ).text();
		//Debug information.
		console.log(search + " has been searched for...");
		console.log("Getting results...");
		getMeetup(search);
		console.log("Results retrieved...");
	});
});
