(function() {
	//run once
	$.ajax({
		type: 'GET',
		url: '/api/v1/trump/rant/',
		success: function(data) {					//console.log(data.rant);
			$('.quotes').html('<h1><i class="fa fa-quote-left fa-lg" aria-hidden="true"></i> '+data.rant+' <i class="fa fa-quote-right fa-lg" aria-hidden="true"></i></h1>');
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
			},
			error: function() {
				alert('Error loading data!');
			}
		});
	});
	
	//open twitter-share in new tab
	$('.tweet_this').click(function(event) {
    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    
    window.open(url, 'twitter', opts);
 
    return false;
  });
	
})();
