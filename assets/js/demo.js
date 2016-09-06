$.ajax({
	method: "GET",
	beforeSend: function(xhr, settings) { 
		xhr.setRequestHeader('Authorization','Token ' + "b217f55495e67b45164b5d82627775d3368285dd"); 
	},
	url: "https://api.packd.org/locations/16/,
	error: function (jqXHR, textStatus, errorThrown) {
		alert("PROBLEM!");
	},
	success: function (data) {
		// Do something here with the data
		var data = JSON.parse(data);
	}
	var $data = $('data');
})