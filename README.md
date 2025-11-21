# ip-tracker-react

Lightweight React app for tracking and inspecting API endpoints and requests. It uses the `https://geo.ipify.org` API to fetch IP information (location, timezone, ISP, etc.) and the `react-leaflet` library to display the IP address's latitude and longitude on an interactive map.

[Preview Link](https://691fac62deda2c00086b1dd2--ip-tracker-react-abel.netlify.app/)

## Features

- Display user or searched IP address by city, timezone, region and ISP.
- Search form for domain or IP address.
- A map to show the estimate location on the map.

## Tech stack

- React
- TypeScript
- Axios for HTTP interactions

## Project structure (example)

- src/
  - components/ — UI components
  - assets/ — images, icons, styles
- public/ — static assets
- .env — local environment variables
- index.html — root html
