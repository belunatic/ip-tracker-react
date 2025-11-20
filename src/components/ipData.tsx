interface IpResult {
	ip?: string;
	city?: string;
	zipCode?: string;
	timezone?: string;
	isp?: string;
	lat?: number;
	lon?: number;
}

interface IpDataProps {
	ipData: IpResult;
}

export default function IpData({ ipData }: IpDataProps) {
	return (
		<div
			id="ip-results"
			className="max-w-[85rem] bg-white rounded-lg flex flex-col md:flex-row gap-y-4 md:gap-x-4 px-4 py-8">
			<div className="md:w-1/4 w-full md:border-r-1 border-gray-200">
				<h2 className="font-bold text-xs text-gray-400 md:text-left text-center uppercase">
					IP address
				</h2>
				<p
					id="ip"
					className="font-semibold text-xl md:text-2xl md:text-left text-center">
					{ipData.ip}
				</p>
			</div>
			<div className="md:w-1/4 w-full md:border-r-1 border-gray-200">
				<h2 className="font-bold text-xs text-gray-400 md:text-left text-center uppercase">
					Locations
				</h2>
				<p className="font-semibold text-xl md:text-2xl md:text-left text-center">
					<span id="city" className="block">
						{ipData.city}
					</span>
					<span id="zip-code"> {ipData.zipCode}</span>
				</p>
			</div>
			<div className="md:w-1/4 w-full md:border-r-1 border-gray-200">
				<h2 className="font-bold text-xs text-gray-400 md:text-left text-center uppercase">
					Timezone
				</h2>
				<p
					id="timezone"
					className="font-semibold text-xl md:text-2xl md:text-left text-center">
					{ipData.timezone}
				</p>
			</div>
			<div className="md:w-1/4 w-full">
				<h2 className="font-bold text-xs text-gray-400 md:text-left text-center uppercase">
					ISP
				</h2>
				<p
					id="isp"
					className="font-semibold text-xl md:text-2xl md:text-left text-center">
					{ipData.isp}
				</p>
			</div>
		</div>
	);
}
