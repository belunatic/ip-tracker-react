import { useState, type SetStateAction } from "react";
import imageUrl from "../assets/images/icon-arrow.svg";

interface FormInputProp {
	setOptions: React.Dispatch<SetStateAction<string>>;
}

export default function FormInput({ setOptions }: FormInputProp) {
	const [ipValue, setIpValue] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<boolean>(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let option = "";

		//regex
		const domainRegEx = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;
		const ipRegEx =
			/^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

		if (domainRegEx.test(ipValue)) {
			option = `&domain=${ipValue}`;
			setOptions(option);
			setErrorMessage(false);
			console.log(option);
			//apiFetch(option);
		} else if (ipRegEx.test(ipValue)) {
			option = `&ipAddress=${ipValue}`;
			setOptions(option);
			setErrorMessage(false);
			console.log(option);
			//apiFetch(option);
		} else if (ipValue === "") {
			option = "";
			setOptions(option);
			setErrorMessage(false);
			console.log(option);
			//apiFetch();
		} else {
			//add error message
			setErrorMessage(true);
		}
		console.log(option);
	};

	return (
		<div>
			<form id="ip-form" onSubmit={handleSubmit}>
				<input
					type="text"
					name="ip-address"
					id="ip-address"
					placeholder="Search for any IP address or domain"
					className="bg-white p-4 text-grey-200 w-64 md:w-96 h-[50px] rounded-tl-lg rounded-bl-lg"
					aria-invalid="true"
					aria-describedby="error-message"
					value={ipValue}
					onChange={(e) => setIpValue(e.target.value)}
				/>
				<button className="bg-black text-white h-[50px] p-4 relative -left-1 top-0.5 rounded-tr-lg rounded-br-lg cursor-pointer hover:bg-black/80">
					<img src={imageUrl} alt="arrow-icon" />
				</button>
			</form>
			<div>
				<p
					className={`text-rose-200 text-base mt-2 ${
						errorMessage ? "" : "hidden"
					}`}
					id="error-message">
					Please enter a valid IP address / domain. Ex: 8.8.8.8 / google.com
				</p>
			</div>
		</div>
	);
}
