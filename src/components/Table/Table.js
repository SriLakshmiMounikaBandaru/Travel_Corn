import React from 'react';
import './Table.css';

const TravelTable = () => {
  return (
    <div className="table-container">
      <h2 className="form-title">TABLE</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Place</th>
            <th>Location</th>
            <th>Rating</th>
            <th>History</th>
            <th>Tags</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charminar</td>
            <td>Hyderabad,Telangana</td>
            <td>4.8</td>
            <td>Charminar was built by Sultan Mohammed Quli Qutb Shah in 1591. It is said that this square shaped structure with four pillars and intricate carvings was built in honour of his wife, Bhagmati</td>
            <td>Fort</td>
          </tr>
          <tr>
            <td>Maredumilli Waterfalls</td>
            <td>Rajahmundry, Andhra Pradesh</td>
            <td>4.6</td>
            <td>Maredumilli is a place of wildlife, nature, and of tribal people. This forest area is conserved and developed by the tribals who have habituated the lands for generations</td>
            <td>Waterfalls</td>
          </tr>
          <tr>
            <td>Amaravathi</td>
            <td>Guntur, Andhra Pradesh</td>
            <td>4.5</td>
            <td>The history of Amaravati dates from the 2nd century BC. 2000-year old history is believed, it was a thriving capital of the Satvahana Kingdom in ancient India</td>
            <td>sculptures</td>
          </tr>
          <tr>
            <td>Borra Caves</td>
            <td>Ananthagiri hills of the Araku Valley,Visakhapatnam </td>
            <td>4.6</td>
            <td> marvellous creation of nature, the Borra caves were formed when river waters flow through a limestone area, and the calcium carbonate turns into calcium bicarbonate, which is easily washed out by the running water. </td>
            <td>Cave</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TravelTable;