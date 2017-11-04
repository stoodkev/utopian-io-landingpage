$(document).ready(function() {
	updateStats();
	setInterval(updateStats, 5000);
});

function updateStats(data){
	$.ajax({
		url: 'https://utopian.io/api/stats',
		error: function(err, data){
		  // This will occur if CORS header not set on Utopian.IO website. (Eg: localhost)
			var stubbedData = {"stats":{"total_paid_rewards":7146.430000000002,"total_pending_rewards":7660.816999999994,"total_paid_authors":5460.309000000003,"total_paid_curators":1686.121000000001}};
			$('#statsTotalRewards').text('$' + parseInt(stubbedData['stats']['total_paid_rewards']).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
			$('#statsAuthorRewards').text('$' + parseInt(stubbedData['stats']['total_paid_authors']).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
			$('#statsCuratorRewards').text('$' + parseInt(stubbedData['stats']['total_paid_curators']).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
			$('#statsPendingRewards').text('$' + parseInt(stubbedData['stats']['total_pending_rewards']).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
		},
		success: function(data, status){
			$('#statsTotalRewards').text('$' + parseInt(data['stats']['total_paid_rewards']).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
			$('#statsAuthorRewards').text('$' + parseInt(data['stats']['total_paid_authors']).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
			$('#statsCuratorRewards').text('$' + parseInt(data['stats']['total_paid_curators']).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
			$('#statsPendingRewards').text('$' + parseInt(data['stats']['total_pending_rewards']).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
		},
	});
}
