(function() {
	//run once
	$.ajax({
		type: 'GET',
		url: '/api/v1/trump/rant/',
		success: function(data) {					//console.log(data.rant);
			$('.quotes').html('<h1><i class="fa fa-quote-left fa-lg" aria-hidden="true"></i> '+data.rant+' <i class="fa fa-quote-right fa-lg" aria-hidden="true"></i></h1>');
			$('#tweet').html('<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=\'\''+data.rant+'\'\' ~&url=https://trumporate.com&hashtags=meme%2Ctrumporate" data-size="large" target="_blank"><i class="fa fa-twitter fa-3x" aria-hidden="true"></i></a>');
		},
		error: function() {
			alert('Error loading data!');
		}
	});
	
	//refresh rants when #new_rant button is pressed
	$('#new_rant').click(function() {
		$.ajax({
			type: 'GET',
			url: '/api/v1/trump/rant/',
			success: function(data) {
				$('.quotes').html('<h1><i class="fa fa-quote-left fa-lg" aria-hidden="true"></i> '+data.rant+' <i class="fa fa-quote-right fa-lg" aria-hidden="true"></i></h1>');
				$('#tweet').html('<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=\'\''+data.rant+'\'\' ~&url=https://trumporate.com&hashtags=meme%2Ctrumporate" data-size="large" target="_blank"><i class="fa fa-twitter fa-3x" aria-hidden="true"></i></a>');
			},
			error: function() {
				alert('Error loading data!');
			}
		});
	});
	
})();
