const getIPButton = document.getElementById('getIP');
const ipAddressElement = document.getElementById('ipAddress');

// Add an event listener to the button
getIPButton.addEventListener('click', () => {
  // Call the external API to get the user's IP address
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      // Update the paragraph element with the user's IP address
      ipAddressElement.textContent = `Your IP Address is: ${data.ip}`;
    })
    .catch(error => {
      // Handle any errors that occurred during the API call
      console.error('Error:', error);
    });
});