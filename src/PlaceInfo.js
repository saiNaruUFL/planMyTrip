import {React,useEffect,useState} from 'react'

export const PlaceInfo = () => {

  useEffect(() => {
    
    async function fetchRestaurants() {
      try {
        const data = await getRestaurantData();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRestaurants();
  }, []);

  async function getRestaurantData() {
    const apiKey = 'AIzaSyCh8O8RPwMc1Sh-i-Bz9OJEiVkif6DZXDQ';
    const latitude = 29.628826; // latitude of the location you want to search near
    const longitude = -82.378752; // longitude of the location you want to search near
    const radius = 20000; // radius of the search area in meters (20 miles)
  
    
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=restaurant&key=${apiKey}`;
  
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.results;
      });
  }
  
  return (
    <div>PlaceInfo</div>
  )
}

export default PlaceInfo;

