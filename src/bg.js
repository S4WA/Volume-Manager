setInterval(function() {
	chrome.storage.sync.get(null, function(items) {
		items = Object.keys(items);
		for (var i = 0; i < items.length; i++) {
			chrome.tabs.query({
				url: items[i]
			}, function (result) {
				for (var i = 0; i < result.length; i++) {
					if (result[i].active && !result[i].mutedInfo.muted) {
					}
				}
			});
		}
	});
}, 500);