window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const aboutSection = document.querySelector('.about-section');
    const header = document.querySelector('header');
  
    if (scrollY > aboutSection.offsetTop + aboutSection.offsetHeight) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  async function getHoroscope() {
    try {
      const url = 'https://best-daily-astrology-and-horoscope-api.p.rapidapi.com/api/Detailed-Horoscope/?zodiacSign=leo';
      const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '84e90eccb2msh8ae5797cf648da0p107426jsn9bd4196d18f9', // Replace with your actual key
        'X-RapidAPI-Host': 'best-daily-astrology-and-horoscope-api.p.rapidapi.com'
      }
      };
    
      const response = await fetch(url, options);
    const jsonResponse = await response.json(); // Parse the response as JSON
    const prediction = jsonResponse.prediction;
    const number = jsonResponse.number;
    const color = jsonResponse.color; // Access the prediction property

    // Optionally, handle errors or unexpected responses:
    if (!prediction) {
      console.error("Error: Prediction not found in response.");
      return; // Exit the function if no prediction found
    }


    displayPrediction(prediction);
    displaynumber(number);
    displaycolor(color);
  } catch (error) {
    console.error("Error fetching horoscope:", error);
  }
}
function displayPrediction(prediction) {
  const predictionElement = document.getElementById("prediction"); // Replace with your actual element ID
  if (predictionElement) {
    predictionElement.textContent = prediction; // Update the content of the element with the prediction
  } else {
    console.warn("Warning: Element with ID 'prediction' not found.");
  }
}
function displaynumber(number) {
  const predictionElement = document.getElementById("number"); // Replace with your actual element ID
  if (predictionElement) {
    predictionElement.textContent = number; // Update the content of the element with the prediction
  } else {
    console.warn("Warning: Element with ID 'prediction' not found.");
  }
}
function displaycolor(color) {
  const predictionElement = document.getElementById("color"); // Replace with your actual element ID
  if (predictionElement) {
    predictionElement.textContent =color; // Update the content of the element with the prediction
  } else {
    console.warn("Warning: Element with ID 'prediction' not found.");
  }
}
    getHoroscope(); // Call the async function to execute the code
    

