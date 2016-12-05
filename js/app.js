//Key:d357b7d536712c642322587b5f4719

$( document ).ready(function() {
    console.log( "Ready!" );

    $("#search-form").submit(function(e) {
		e.preventDefault();
		var search = $( "#event-type option:selected" ).text();
		console.log(search + " has been searched for...");
		console.log("Getting results...");
		getMeetup(search);
		console.log("Results retrieved");
	});

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
			success: function(data){
				console.log(data);
			},
			error: function(error){
				console.log(error);
			} 
		})
	};
});