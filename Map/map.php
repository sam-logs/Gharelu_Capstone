<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

<head>
    <title>NearBy services</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <link rel="icon" href="http://mapmyindia.com/images/favicon.ico" type="image/x-icon">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <!--map api javascript url with key-->
    <script src="https://apis.mapmyindia.com/advancedmaps/v1/fa629fc6f4baf6d51ceefaeec1836f18/map_load?v=1.2"></script>
    <lin rel="stylesheet" href="style.css">
</head>

<body>
    <div class="top-div">
        <span class="top-div-span1">Map: NearBy services</span>
    </div>
    <div id="menu">
        <div class="menu-sub">
            <div class="div-label">Enter Latitude</div>
            <input type="text" class="input-cls" value="" id="lat" placeholder="latitude" autocomplete="off"
                autofocus="" onkeydown="if (event.which == 13 || event.keyCode == 13)
                                               $('#search').trigger('click'); " /><br />

            <div class="div-label">Enter Longitude</div>
            <input type="text" class="input-cls" id="lan" placeholder="longitude" autocomplete="off" autofocus=""
                value="" />

            <div class="div-label">Enter Keyword</div>
            <input type="text" class="input-cls" id="keyword" placeholder="keyword" autocomplete="off" autofocus=""
                value="coffee" onkeydown="if (event.which == 13 || event.keyCode == 13)
                                               $('#search').trigger('click'); " />
            <br /><br />
            &nbsp;&nbsp;
            <button id="search"
                onclick="get_near_by_result(document.getElementById('lat').value, document.getElementById('lan').value, 'searchbykeyword')">Search
                By Keyword</button>
        </div>
        <div id="result"></div>
        <div id="poidetail"></div>
    </div>
    <div id="map-container"></div>

    <script type="text/javascript">

        var url_result;
        var marker = new Array();
        var all_result = [];
        var map;
        var show_marker = new Array();
        var centre = new L.LatLng(22.268764, 82.390136);
        map = new MapmyIndia.Map('map-container', { center: centre, zoomControl: true, hybrid: true });
        /***function to modify both center map position and zoom level.***/
        map.setView(centre, 4);
        MapmyIndia.geo(map_o[0]);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }

        function showPosition(position) {
            document.getElementById('lan').value = position.coords.longitude;
            document.getElementById('lat').value = position.coords.latitude;
        }

        $('.srch_dv').hide();

        

        /*function to get geocode result from the url*/
        function get_near_by_result(lat, lng, searchmethod) {
            var keyword = document.getElementById('keyword');
            if (searchmethod == 'searchbykeyword') {
                if (keyword.value == '') {
                    keyword.focus();
                    return false;
                }
            }
            document.getElementById('result').innerHTML = '<div style="padding: 0 12px; color: #777">Loading..</div>';
            /*get JSON resp*/
            if (lat == '' || lng == '') {
                var map_center = map.getCenter();
                getUrlResult(keyword.value, map_center.lat, map_center.lng);
            }
            else {
                getUrlResult(keyword.value, lat, lng);
            }
        }
        /*function to get json response from the url*/
        function getUrlResult(keyword, lat, lng) {
            remove_btn();
            add_btn(lat, lng);
            $.ajax({
                type: "POST",
                dataType: 'text',
                url: "getResponse.php",
                async: false,
                data: {
                    query: JSON.stringify(keyword),
                    current_lat: JSON.stringify(lat),
                    current_lng: JSON.stringify(lng)
                },
                success: function (result) {
                    var resdata = JSON.parse(result);
                    var jsondata;
                    console.log(resdata);
                    if (resdata.status == 'success') {
                        try {
                            jsondata = JSON.parse(resdata.data);
                        } catch (e) {
                            var error_response = "No Result"
                            document.getElementById('result').innerHTML = error_response + '</ul></div>';
                            return false;
                        }

                        if (jsondata.suggestedLocations.length > 0) {
                            /*success*/
                            display_near_by_result(jsondata.suggestedLocations);/*display results on success*/
                        }
                        /*handle the error codes and put the responses in divs.Error codes can be found in the documentation*/
                        else {
                            var error_response = "No Result"
                            document.getElementById('result').innerHTML = error_response + '</ul></div>';/***put response result in div****/
                        }
                    } else {
                        var error_message = resdata.data;
                        document.getElementById('result').innerHTML = error_message + '</ul></div>';/***put response result in div****/
                        remove_markers();
                    }
                }
            });
        }
        /*function to display geocode result*/
        function display_near_by_result(data) {
            details = [];
            remove_markers();/**remove existing marker from map**/
            var result_string = '<div style="padding: 0 12px;color:green;font-size:13px">POI</div><div style="font-size: 13px">\n\
                                    <ul style="list-style-type:decimal;color:green; padding:2px 2px 0 30px">';
            var num = 1;
            /*show the item data*/
            data.forEach(function (item) {
                if (item != '' && item != null && item != "undefined") {
                    var lng = item.longitude;
                    var lat = item.latitude;
                    var pos = new L.LatLng(lat, lng);/***position of marker*****/
                    var content = new Array();
                    if (item.eLoc != '')
                        content.push('<tr><td style="white-space:nowrap">eLoc</td><td width="10px">:</td><td>' + item.eLoc + '</td></tr>');
                    if (item.placeName != '')
                        content.push('<tr><td style="white-space:nowrap">placeName</td><td width="10px">:</td><td width="70%" style="word-wrap: break-word;">' + item.placeName + '</td></tr>');
                    if (item.placeAddress != '')
                        content.push('<tr><td style="white-space:nowrap">placeAddress</td><td width="10px">:</td><td style="width: 75% !important; word-wrap: break-word;">' + item.placeAddress + '</td></tr>');
                    if (item.type != '')
                        content.push('<tr><td style="white-space:nowrap">type</td><td width="10px">:</td><td>' + item.type + '</td></tr>');
                    if (item.latitude != '')
                        content.push('<tr><td style="white-space:nowrap">latitude</td><td width="10px">:</td><td>' + item.latitude + '</td></tr>');
                    if (item.longitude != '')
                        content.push('<tr><td style="white-space:nowrap">longitude</td><td width="10px">:</td><td>' + item.longitude + '</td></tr>');
                    if (item.distance != '')
                        content.push('<tr><td style="white-space:nowrap">distance</td><td width="10px">:</td><td>' + item.distance + '</td></tr>');
                    details.push(content.join(""));

                    show_markers(num, pos);/**display markers***/
                    result_string += '<li onclick="show_place_details(' + (num++) + ',' + lng + ',' + lat + ')">' + item.placeName + '  (' + item.distance + ')' + '</li>';
                } else {
                    var error_response = "Not found.";
                    document.getElementById('result').innerHTML = error_response + '</ul></div>';/***put response result in div****/
                }
            });
            document.getElementById('result').innerHTML = result_string + '</ul></div>';/***put geocode result in div****/
            mapmyindia_fit_markers_into_bound(); /***fit map in marker area***/
        }

        function show_markers(num, pos) {
            if (num > 9) {
                var icon = L.divIcon({
                    className: 'my-div-icon',
                    html: "<img class='map_marker'  src=" + "'https://maps.mapmyindia.com/images/2.png'>" + '<span class="my-div-span" style="left:1.3em !important;">' + (num) + '</span>',
                    iconSize: [10, 10],
                    popupAnchor: [12, -10]
                });
            } else {
                var icon = L.divIcon({
                    className: 'my-div-icon',
                    html: "<img class='map_marker'  src=" + "'https://maps.mapmyindia.com/images/2.png'>" + '<span class="my-div-span" style="left:1.6em; top:1.4em;">' + (num) + '</span>',
                    iconSize: [10, 10],
                    popupAnchor: [12, -10]
                });
            }/*function that creates a div over a icon and display content on the div*/

            marker[num] = L.marker(pos, { icon: icon }).bindPopup(createPopup(num - 1)).addTo(map);
            show_marker.push(marker[num]);
        }

        function show_place_details(num, lng, lat) {
            var pos1 = new L.LatLng(lat, lng);
            map.setView(pos1, 18);
            show_info_window(pos1, num - 1, marker[num]);
        }

        /*function to show pop up on marker**/
        function show_info_window(pos, num, marker) {
            marker.bindPopup("");
            var popup = marker.getPopup();
            popup.setContent(createPopup(num)).update();
            marker.openPopup();
        }

        function createPopup(num) {
            return '<table class="popup-tab">' + details[num] + '</table>';
        }
        /*function to remove  marker from the map*/
        function remove_markers() {
            for (var k = 0; k < show_marker.length; k++) {
                map.removeLayer(show_marker[k]);/*Remove markers from map*/
            }
        }
        /*function to fit the maps in the bounds of the marker*/
        function mapmyindia_fit_markers_into_bound() {
            var group = new L.featureGroup(show_marker);
            map.fitBounds(group.getBounds());
        }
        /*function to remove  current location from the map*/
        function remove_btn() {
            if ($('.leaflet-marker-pane > div').length > 1) {
                $('.leaflet-marker-pane').find('div').remove();
            }
            else {
                $('.leaflet-marker-pane').find('div').first().remove();
            }
        }
        /*function to add  current loaction to the map*/
        function add_btn(lat, lng) {
            var btn = L.divIcon({ className: '', html: "<img src='https://maps.mapmyindia.com/images/current_location.png' height='30px'>" });

            var cr = L.marker([lat, lng], { icon: btn });
            map.addLayer(cr);
            map.setView(new L.LatLng(lat, lng), 15);
        }
    </script>
</body>
</html>