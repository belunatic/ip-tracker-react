import imageUrl from "../assets/images/icon-location.svg";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";

interface IpResult {
	ip?: string;
	city?: string;
	zipCode?: string;
	timezone?: string;
	isp?: string;
	lat?: number | undefined;
	lon?: number | undefined;
}

interface IpMapProps {
	ipMapData: IpResult;
}

export default function IpMap({ ipMapData }: IpMapProps) {
	const customIcon = new L.Icon({
		iconUrl: imageUrl,
		iconSize: [40, 50], // size of the icon
		// iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
		// popupAnchor: [0, -30], // point from which the popup should open relative to the iconAnchor
	});

	return (
		<>
			<div id="map" className="h-full flex-grow">
				<MapContainer
					center={[ipMapData?.lat, ipMapData?.lon]}
					zoom={19}
					scrollWheelZoom={false}
					style={{ width: "100%", height: "100%" }}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker
						position={[ipMapData?.lat, ipMapData?.lon]}
						icon={customIcon}></Marker>
				</MapContainer>
			</div>
		</>
	);
}
