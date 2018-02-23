const fetchAttractions = () =>
  fetch("/api")
    .then(result => result.json())
    .catch(err => console.error(err));

const fetchItinerary = (hashed) => 
  fetch(`/api/itineraries/${hashed}`)
    .then(result => result.json())
    .catch(err => console.error(err));

module.exports = {
  fetchAttractions,
  fetchItinerary
};
