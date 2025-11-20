import FormInput from "./components/FormInput";
import IpData from "./components/IpData";
import IpMap from "./components/IpMap";

function App() {
	return (
		<div className="h-screen flex flex-col w-full">
			<header className="py-8 overflow-visible h-[400px] md:h-[300px] overflow-visible relative z-9999 bg-[url(./assets/images/pattern-bg-mobile.png)] md:bg-[url(./assets/images/pattern-bg-desktop.png)] bg-cover bg-center">
				<div className="flex flex-col gap-y-8 text-center max-w-[85rem] justify-center mx-auto p-8">
					<h1 className="text-2xl md:text-3xl text-white font-bold">
						IP Address Tracker
					</h1>
					<FormInput />
					{/* <IpData /> */}
				</div>
			</header>

			{/* <div id="map" className="h-full flex-grow"></div> */}
			<IpMap />
		</div>
	);
}

export default App;
