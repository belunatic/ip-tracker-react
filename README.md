# ip-tracker-react

Lightweight React app for inspecting IP addresses and requests. It uses the geo.ipify API to fetch IP details (location, timezone, ISP, etc.) and react-leaflet to show the location on an interactive map.

[Preview Link](https://691fac62deda2c00086b1dd2--ip-tracker-react-abel.netlify.app/)

## Features

- Show the current or searched IP address with city, region, timezone, and ISP.
- Search form that accepts a domain or IP address.
- Interactive map to visualize the estimated latitude/longitude.

## Tech stack

- React
- TypeScript
- Axios for HTTP requests

## Project structure (example)

- src/
  - components/ — UI components
  - assets/ — images, icons, styles
- public/ — static assets
- .env — local environment variables (API keys)
- index.html — app entry

## Reflection

- Started by porting the (Module 7 HTML/CSS/JavaScript)[https://github.com/belunatic/ip-address-tracker-master] into App.tsx, then split the UI into reusable components: FormInput, IpMap, IpData, and combined them in an IpBoard component.
- Switched the map implementation to a different package; documentation was limited, so extra research and experimentation were required.
- Deployment hiccup: a filename typo caused a Netlify/GitHub issue; it was resolved by removing and re-adding the file. Next time, a rename (git mv) or force-push would be cleaner.
- Potential improvements: better mobile responsiveness, stronger input validation and error handling, and automated tests for critical flows.
- Overall, the project was a good exercise in component decomposition, external API integration, and deployment troubleshooting.
