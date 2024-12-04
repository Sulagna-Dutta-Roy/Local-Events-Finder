# Event Finder Tool
This is a web-based **Event Finder Tool** that allows users to search for events by location and date. The tool uses **Mapbox** to display a map and geocode the entered location, and **Eventbrite API** to fetch events based on the location and date.

## Features
- **Map integration**: Displays a Mapbox-powered interactive map to help users visualize event locations.
- **Event Search**: Allows users to search for events by entering a location and date. Events are fetched using the Eventbrite API.
- **Responsive Design**: The interface is responsive and works across devices.
- **Toggleable Map**: Users can show or hide the map based on their preference.


## Technologies Used
- **HTML**: For structuring the content of the webpage.
- **CSS**: For styling the layout and design.
- **JavaScript**: For adding interactivity, fetching data from APIs, and updating the DOM dynamically.
- **Mapbox**: For geocoding and displaying the map.
- **Eventbrite API**: For fetching events based on the user’s location and date input.

## Getting Started

### Prerequisites
1. **Mapbox Access Token**: You will need to sign up for a Mapbox account and generate an API key. Replace `YOUR_MAPBOX_ACCESS_TOKEN` in the `script.js` file with your Mapbox access token.
2. **Eventbrite API Key**: You need an Eventbrite API key. Sign up at [Eventbrite API](https://www.eventbrite.com/platform/api) and obtain your token. Replace `YOUR_EVENTBRITE_API_KEY` in `script.js` with your API key.

### Installation
1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/event-finder-tool.git
    cd event-finder-tool
    ```
2. Open the `index.html` file in your browser.

### How to Use
1. Enter a location (e.g., "San Francisco") in the **Location** input field.
2. Select a **Date** from the date picker.
3. Click the **Search Events** button to find events.
4. If events are found, they will be listed below the map. If no events are found, a message will be displayed.

### Toggling the Map
- You can show or hide the map by clicking the **Toggle Map** button.

## File Structure
```plaintext
event-finder-tool/
│
├── index.html        # Main HTML file
├── style.css         # CSS file for styling the layout
├── script.js         # JavaScript file with logic for geocoding and fetching events
└── README.md         # This README file
```

## Troubleshooting
1. **"No events found for the selected location and date."**: Ensure that you are entering a valid location and that events are available for the specified date in the area.
2. **Map not showing**: Make sure that the Mapbox access token is correctly set in the `script.js` file.

## Contributing
If you want to contribute to this project, feel free to open an issue or submit a pull request. All contributions are welcome!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
