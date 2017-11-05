$(document).ready(function() {
	updateStats();
	setInterval(updateStats, 30000);
});

function updateStats(){
	$.ajax({
		url: 'https://api.utopian.io/api/stats',
		success: function(data){
			$('#statsAuthorRewards').text('$' + parseInt(data['stats']['total_paid_authors']).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
      $('#statsCuratorRewards').text('$' + parseInt(data['stats']['total_paid_curators']).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
      $('#statsPendingRewards').text('$' + parseInt(data['stats']['total_pending_rewards']).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
      $('#statsTotalRewards').text('$' + (parseInt(data['stats']['total_paid_rewards']) + parseInt(data['stats']['total_pending_rewards'])).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    },
	});
}
