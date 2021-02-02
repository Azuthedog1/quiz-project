$(document).ready(function() {
	var q;
	for(q=1; q < 10; q++){

	$("#q" + q).click({num:q},function(x) {
		$("#a" + x.data.num).toggle();
	});

	
	}
});
