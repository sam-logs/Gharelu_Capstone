import React from 'react'



const map = () => {


    function show_markers(num, pos) {
        if(num>9)
        {
            var icon = L.divIcon({
                className: 'my-div-icon',
                html: "<img class='map_marker'  src=" + "'https://maps.mapmyindia.com/images/2.png'>" + '<span class="my-div-span" style="left:1.3em !important;">' + (num) + '</span>',
                iconSize: [10, 10],
                popupAnchor: [12, -10]
            });
        }else
        {
            var icon = L.divIcon({
                className: 'my-div-icon',
                html: "<img class='map_marker'  src=" + "'https://maps.mapmyindia.com/images/2.png'>" + '<span class="my-div-span" style="left:1.6em; top:1.4em;">' + (num) + '</span>',
                iconSize: [10, 10],
                popupAnchor: [12, -10]
            });
        }/*function that creates a div over a icon and display content on the div*/

        marker[num] = L.marker(pos, {icon: icon}).bindPopup(createPopup(num - 1)).addTo(map);
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
    function remove_btn(){
        if($('.leaflet-marker-pane > div').length >1){
            $('.leaflet-marker-pane').find('div').remove();
        }
        else{
            $('.leaflet-marker-pane').find('div').first().remove();
        }
    }
    /*function to add  current loaction to the map*/
    function add_btn(lat, lng){
        var btn=L.divIcon({className:'',html:"<img src='https://maps.mapmyindia.com/images/current_location.png' height='30px'>"});

        var cr=L.marker([lat, lng], {icon: btn});
        map.addLayer(cr);
        map.setView(new L.LatLng(lat,lng), 15);
    }

  return (

    <div>
        <div class="top-div">
                        <span class="top-div-span1">Map</span> 
                        <span class="top-div-span2" >Nearby Services</span>
                    </div>
                    <div id="menu">
                        <div class="menu-sub"> 
                            <div class="div-label">Enter Latitude</div>
                            <input type="text"  class="input-cls" value=""  id="lat" placeholder="latitude" autocomplete="off" autofocus="" onkeydown="if (event.which == 13 || event.keyCode == 13)
                                               $('#search').trigger('click'); "/><br/>

                            <div class="div-label">Enter Longitude</div>
                            <input type="text" class="input-cls" id="lan" placeholder="longitude" autocomplete="off" autofocus="" value=""/>

                            <div class="div-label">Enter Keyword</div>
                            <input type="text" class="input-cls" id="keyword" placeholder="keyword" autocomplete="off" autofocus="" value="coffee" onkeydown="if (event.which == 13 || event.keyCode == 13)
                                               $('#search').trigger('click'); "/>
                            <br/><br/>
                            &nbsp;&nbsp;
                            <button id="search" onclick="get_near_by_result(document.getElementById('lat').value, document.getElementById('lan').value, 'searchbykeyword')">Search By Keyword</button>
                        </div>
                        <div id="result"></div>
                        <div id="poidetail" ></div>
                    </div>
                    <div id="map-container"></div>
                    
    </div>

  )

}

export default map