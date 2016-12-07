//Key:d357b7d536712c642322587b5f4719

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
				for (i = 0; i < 1 ; i++) {
					console.log(data.data[i].name);
					//Event Names
					$("#event-one").append("" + data.data[0].name + "");
					$("#event-two").append("" + data.data[1].name + "");
					$("#event-three").append("" + data.data[2].name + "");
					$("#event-four").append("" + data.data[3].name + "");
					$("#event-five").append("" + data.data[4].name + "");
				}
			},
			error: function(error) {
				console.log(error);
			}
		})
	};

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
