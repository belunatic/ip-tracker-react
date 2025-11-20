import { useState, useEffect } from "react";
import FormInput from "./FormInput";
import IpData from "./IpData";
import IpMap from "./IpMap";

interface IpResult {
	ip?: string;
	city?: string;
	zipCode?: string;
	timezone?: string;
	isp?: string;
	lat?: number;
	lon?: number;
}

export default function IpBoard() {
	const [options, setOptions] = useState<string>("");
	const [ipData, setIpData] = useState<IpResult>({});
	const [loading, setLoading] = useState<boolean>(true);

	//apikey
	const apiKey = import.meta.env.VITE_API_KEY;

	useEffect(() => {
		const apiFetch = async () => {
			setLoading(true);
			try {
				const res = await fetch(
					`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}${options}`
				);

				if (!res.ok) {
					throw new Error(`Fetching error, status -> ${res.status}`);
				}
				//get the data
				const data = await res.json();
				const ipObject = {
					ip: data.ip,
					city: `${(data.location.city, data.location.region)}`,
					zipCode: data.location.postalCode,
					timezone: `UTC ${data.location.timezone}`,
					isp: data.isp,
					lat: data.location.lat,
					lon: data.location.lng,
				};

				console.log(data, "this is the object", ipObject);
				setIpData(ipObject);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		};

		apiFetch();
	}, [options]);

	return (
		<>
			<header className="py-8 overflow-visible h-[400px] md:h-[300px] overflow-visible relative z-9999 bg-[url(./assets/images/pattern-bg-mobile.png)] md:bg-[url(./assets/images/pattern-bg-desktop.png)] bg-cover bg-center">
				<div className="flex flex-col gap-y-8 text-center max-w-[85rem] justify-center mx-auto p-8">
					<h1 className="text-2xl md:text-3xl text-white font-bold">
						IP Address Tracker
					</h1>
					<FormInput setOptions={setOptions} />
					<IpData options={options} ipData={ipData} />
				</div>
			</header>

			{/* <div id="map" className="h-full flex-grow"></div> */}
			{loading ? <p>Loading...</p> : <IpMap ipMapData={ipData} />}
			{/* <IpMap ipMapData={ipData} /> */}
		</>
	);
}
