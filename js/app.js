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
				var results = data.items;
				var resultsLength = data.length;
				for (i=0; i < resultsLength; i++) {
					console.log(resultsLength + "Hello World!");
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
