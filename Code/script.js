// Set Mapbox access token
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

// Initialize Mapbox map
const map = new mapboxgl.Map({
  container: 'map', // Container ID
  style: 'mapbox://styles/mapbox/streets-v11', // Map style
  center: [-122.4194, 37.7749], // Default center (San Francisco)
  zoom: 10, // Default zoom level
});

const toggleMapBtn = document.getElementById("toggle-map-btn");
const mapContainer = document.getElementById("map");

toggleMapBtn.addEventListener("click", () => {
  // Toggle the map visibility
  if (mapContainer.style.display === "none" || mapContainer.style.display === "") {
    mapContainer.style.display = "block";
    mapContainer.classList.add("show"); // Add the 'show' class to apply box-shadow
    toggleMapBtn.textContent = "Hide Map";  // Change button text when map is shown
  } else {
    mapContainer.style.display = "none";
    mapContainer.classList.remove("show"); // Remove the 'show' class to hide box-shadow
    toggleMapBtn.textContent = "Show Map";  // Change button text when map is hidden
  }
});

document.getElementById("search-btn").addEventListener("click", () => {
  const location = document.getElementById("location").value;
  const date = document.getElementById("date").value;

  if (!location || !date) {
    alert("Please enter location and date");
    return;
  }

  // Geocode the location using Mapbox API
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${mapboxgl.accessToken}`)
    .then((response) => response.json())
    .then((data) => {
      const coordinates = data.features[0].center;
      const [lng, lat] = coordinates;

      // Update Map center and show it
      map.flyTo({
        center: [lng, lat],
        zoom: 12,
      });

      // Show the map if it's hidden
      if (mapContainer.style.display === "none") {
        mapContainer.style.display = "block";
        mapContainer.classList.add("show");  // Add the 'show' class to apply shadow
        toggleMapBtn.textContent = "Hide Map"; // Update the button text
      }

      // Fetch events
      fetchEvents(lat, lng, date);
    })
    .catch((error) => console.error("Error fetching location:", error));
});

function fetchEvents(lat, lng, date) {
  const token = "YOUR_EVENTBRITE_TOKEN";
  const url = `https://www.eventbriteapi.com/v3/events/search/?location.latitude=${lat}&location.longitude=${lng}&start_date.range_start=${date}T00:00:00Z&token=${token}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const eventsList = document.getElementById("events-list");
      eventsList.innerHTML = "";
      if (data.events && data.events.length > 0) {
        data.events.forEach((event) => {
          const li = document.createElement("li");
          li.innerHTML = `<strong>${event.name.text}</strong><br>${event.start.local}`;
          eventsList.appendChild(li);
        });
      } else {
        eventsList.innerHTML = "No events found for the selected location and date.";
      }
    })
    .catch((error) => {
      console.error("Error fetching events:", error);
    });
}
