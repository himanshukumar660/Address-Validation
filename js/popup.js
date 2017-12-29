function submit() {
	var API_KEY = "AIzaSyAudSXVjI46g33t5ZIqXooorQSECVe6veM";
	var AddressLoc = document.getElementById('AddressLoc').value;

	var adr_url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + AddressLoc + "&key=" + API_KEY;

	console.log(adr_url);

	var Detail = "";



	$.getJSON(adr_url, function(data) {

		String.prototype.capitalize = function() {
			return this.charAt(0).toUpperCase() + this.slice(1);
		}

		var jsonStr = JSON.stringify(data);

		regeStr = '', // A EMPTY STRING TO EVENTUALLY HOLD THE FORMATTED STRINGIFIED OBJECT
			f = {
				brace: 0
			}; // AN OBJECT FOR TRACKING INCREMENTS/DECREMENTS,
		// IN PARTICULAR CURLY BRACES (OTHER PROPERTIES COULD BE ADDED)

		regeStr = jsonStr.replace(/({|}[,]*|[^{}:]+:[^{}:,]*[,{]*)/g, function(m, p1) {

			var rtnFn = function() {
					return '<div style="text-indent: ' + (f['brace'] * 20) + 'px;">' + p1 + '</div>';
				},
				rtnStr = 0;
			if (p1.lastIndexOf('{') === (p1.length - 1)) {
				rtnStr = rtnFn();
				f['brace'] += 1;
			} else if (p1.indexOf('}') === 0) {
				f['brace'] -= 1;
				rtnStr = rtnFn();
			} else {
				rtnStr = rtnFn();
			}
			return rtnStr;
		});


		if (data.status == "OK") {

			var address_components = "Formatted address : " + data.results[0].formatted_address + "<br>";

			for (var each in data.results[0].address_components) {
				address_components = address_components +
					JSON.stringify(data.results[0].address_components[each].types[0]).replace(/["]/g, "").replace(/[_]/g, " ").capitalize() + " : " +
					JSON.stringify(data.results[0].address_components[each].long_name).replace(/["_]/g, " ") + "<br>";
			}




			var GeoLocationLat = data.results[0].geometry.location.lat;
			var GeoLocationLng = data.results[0].geometry.location.lng;



			Detail = '<div class="text-center" ><p style="font-size:43px;color:#474b4f"></p><i class="fa fa-check" style="\
                              font-size:7em;color:green;" aria-hidden="true"></i><br><br></div>' + address_components;

			$('.map_btn').click(function() {
				var uluru = {
					lat: GeoLocationLat,
					lng: GeoLocationLng
				};
				var map = new google.maps.Map(document.getElementById('details'), {
					zoom: 15,
					center: uluru
				});
				var marker = new google.maps.Marker({
					position: uluru,
					map: map
				});
			});



			$('.json_btn').click(function() {
				document.getElementById('details').innerHTML = "<pre id='scrollable-content' style='overflow:none;position:absolute;z-index:200000;width: 100%; height: 100%;'><code>" +
					regeStr + "</code></pre>";
				$('pre code').each(function(i, block) {
					hljs.highlightBlock(block);
				});
			});

		} else {
			Detail = '<div class="text-center"><i class="fa fa-close" style="font-size:7em;color:red" aria-hidden="true"></i><br><br>' + "<h>No Valid Address Found!</h></div>"
			$('.map_btn').click(function() {
				document.getElementById('details').innerHTML = Detail;
			});



			$('.json_btn').click(function() {
				document.getElementById('details').innerHTML = Detail;
			});

		}


		document.getElementById('details').innerHTML = Detail;

		$('.detail_btn').click(function() {
			document.getElementById('details').innerHTML = Detail;
		});
	});
};

$(document).ready(function() {
	$('.search').click(function() {
		submit();
	});
});

// HAD TO REMOVE THE FOLLOWING FUNCTION DUE TO CONFLICT WITH TEST AREA

document.onkeydown = function(){
    if (window.event.keyCode == '13') {
      submit();
    }
};
