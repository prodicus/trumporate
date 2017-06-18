(function() {
	//run once
	$.ajax({
		type: 'GET',
		url: '/api/v1/trump/rant/',
		success: function(data) {					//console.log(data.rant);
			$('.quotes').html('<h1><i class="fa fa-quote-left fa-lg" aria-hidden="true"></i> '+data.rant+' <i class="fa fa-quote-right fa-lg" aria-hidden="true"></i></h1>');
			$('#tweet').html('<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=\"'+data.rant+'\" ~Trumporate. Create your own dank memes at&url=https://trumporate.com$hashtags=meme%2Ctrumporate" data-size="large"><i class="fa fa-twitter fa-3x" aria-hidden="true"></i></a>');
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
				$('#tweet').html('<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=\"'+data.rant+'\" ~Trumporate. Create your own dank memes at&url=https://trumporate.com" data-size="large"><i class="fa fa-twitter fa-3x" aria-hidden="true"></i></a>');
			},
			error: function() {
				alert('Error loading data!');
			}
		});
	});
	
	//open twitter-share in new tab
	$('.twitter-share-button').click(function(event) {
    	e.preventDefault();
    	var width = 500;
    	var height = 300;
    	window.open(this.href , 'twitter', 'width=' + width + ', height=' + height + ', top=' + ((window.innerHeight - height) / 2) + ', left=' + ((window.innerWidth - width) / 2));
  	});
	
})();
