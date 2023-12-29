var randomNumber = Math.floor(Math.random() * 130001);
const artworkId = randomNumber ;//129884
const apiUrl = `https://api.artic.edu/api/v1/artworks/${artworkId}`;
// Function to fetch and display artwork details
function fetchAndDisplayArtwork() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Create HTML elements to display artwork details
      const artworkDetailsContainer = document.getElementById('artworkDetails');
      const artworkInformation = document.getElementById('artworkInformation')
      const titleElement = document.createElement('h2');
      const artistElement = document.createElement('p');
      const descriptionElement = document.createElement('div');
      const imageElement = document.createElement('img');
      const dateElement = document.createElement('p');

      // Assign values to HTML elements
      titleElement.textContent = `${data.data.title} (${data.data.date_display})`;
      artistElement.textContent = `Artist(s): ${data.data.artist_display}`;
      descriptionElement.innerHTML = `${data.data.description}`;
      imageElement.src = `https://www.artic.edu/iiif/2/${data.data.image_id}/full/400,/0/default.jpg`; // Use the IIIF image URL
      dateElement.textContent = `Date Created: ${data.data.date_display}`;


      // Append HTML elements to the container
      artworkDetailsContainer.appendChild(imageElement);
      artworkInformation.appendChild(titleElement);
      artworkInformation.appendChild(artistElement);
      console.log(descriptionElement);
      if(data.data.description!==null){
        
        artworkInformation.appendChild(descriptionElement);
        console.log(descriptionElement);
      };


    })

    .catch(error => {
      location.reload()
      console.error("Fetch error:", error);
    });
}
// Call the function to fetch and display artwork details
fetchAndDisplayArtwork();

function toggleDivs() {
  var div1 = document.getElementById('infosqr');

  // Toggle the 'hidden' class to show or hide the divs
  div1.classList.toggle('hidden');
}

function resizeDiv() {
  var resizableDiv = document.getElementById('resizable');

  // Change the height and width of the div
  resizableDiv.style.width = '600px';
  resizableDiv.style.height = '600px';
}

var isResized = false;

function toggleSize() {
  var resizableDiv = document.getElementById('resizable');

  // Toggle the size based on the current state
  if (isResized) {
    // If resized, go back to normal size
    resizableDiv.style.width = '300px';
    resizableDiv.style.height = '300px';
  } else {
    // If not resized, increase size
    resizableDiv.style.width = '600px';
    resizableDiv.style.height = '600px';
  }

  // Toggle the state
  isResized = !isResized;
}


function refresh() {
  location.reload();
}