(function() {
	
	$.ajax({
		type: 'GET',
		url: 'https://crossorigin.me/http://35.160.0.244/api/v1/trump/rant',
		success: function(data) {
			//console.log(data.rant);
			$('.quotes').html('<h1><i class="fa fa-quote-left fa-lg" aria-hidden="true"></i> '+data.rant+' <i class="fa fa-quote-right fa-lg" aria-hidden="true"></i></h1>');
		},
		error: function() {
			alert('Error loading data!');
		}
	});
	
})();
