import { useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

export default function IpMap() {
	const [mapData, setMapData] = useState(null);

	const displayMap = () => {
		let map = null;
		let lat = 33.88835;
		let lon = -118.30896;
		//check to see if map element is initiated
		//if so remove and add the new lat and lng
		if (map != undefined) {
			map.remove();
		}
		map = L.map("map").setView([lat, lon], 19);
		L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 19,
			attribution:
				'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		}).addTo(map);
		const myIcon = L.icon({
			iconUrl: "images/icon-location.svg",
			iconSize: [40, 50],
			// iconAnchor: [22, 94],
		});
		var marker = L.marker([lat, lon], { icon: myIcon }).addTo(map);
		setMapData(map);
	};
	return (
		<>
			<div id="map" className="h-full flex-grow">
				{displayMap()}
			</div>
		</>
	);
}
