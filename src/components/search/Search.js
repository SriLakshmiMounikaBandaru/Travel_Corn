import React, { useState } from 'react';
import './SearchStyles.css';
import customer from '../../assets/customer.jpg';

function Search() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleCheckboxChange3 = () => {
    setIsChecked3(!isChecked3);
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>DISCOVERING ANDHRA & TELANGANA: A LUXURIOUS JOURNEY WITH TRAVEL CORN</h2>
          <p>
            Embark on an extraordinary journey to explore the enchanting landscapes of both Andhra Pradesh and Telangana with TRAVEL Corn, your premier travel companion. Our bespoke services ensure you experience the pinnacle of luxury while discovering the hidden gems of these states.

            Indulge in the richness of cultural heritage and breathtaking scenery as you traverse through the top destinations in Andhra Pradesh and Telangana. Immerse yourself in the vibrant tapestry of these states, from the historic wonders to the picturesque landscapes.

            TRAVEL Corn invites you to savor the finest moments with our curated travel packages. Enjoy the convenience of seamless travel arrangements, luxurious accommodations, and personalized services. Delight in the flavors of local cuisine, explore unique landmarks, and partake in exciting adventures, all crafted to elevate your travel experience.

            Whether you're planning a solo expedition, a family getaway, or a romantic retreat, TRAVEL Corn caters to your every need. Our commitment to excellence ensures that your journey is marked by comfort, exploration, and unforgettable memories.

            Uncover the beauty of Andhra Pradesh and Telangana with TRAVEL Corn – where every voyage is a celebration of discovery.
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={customer} alt="/" style={{ marginRight: '1rem' }} />
              </div>
              <div>
                <h3>WORLD'S LEADING</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                <button>View Packages</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <form>
            <div className="input-wrap">
              <label>Destination</label>
              <select value={selectedDestination} onChange={handleDestinationChange}>
                <option value="1">Charminar</option>
                <option value="2">Maredumilli</option>
                <option value="3">Amaravathi</option>
                <option value="4">Godavari Konaseema</option>
                <option value="5">Tirumala Tirupat</option>
                <option value="6">Borra Caves</option>
                <option value="7">Araku Valley</option>
                <option value="8">Vijayawada</option>
                <option value="9">Vizag</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="checkboxes">
              <label>Activities</label>
              <div>
                <input type="checkbox" id="activity1" name="activities" value="hiking" checked={isChecked1} onChange={handleCheckboxChange1} />
                <label htmlFor="activity1">Hiking</label>
              </div>
              <div>
                <input type="checkbox" id="activity2" name="activities" value="camping" checked={isChecked2} onChange={handleCheckboxChange2} />
                <label htmlFor="activity2">Camping</label>
              </div>
              <div>
                <input type="checkbox" id="activity3" name="activities" value="sightseeing" checked={isChecked3} onChange={handleCheckboxChange3} />
                <label htmlFor="activity3">Sightseeing</label>
              </div>
            </div>

            {/* Radio Buttons */}
            <div className="input-wrap">
              <label>Room Type</label>
              <div>
                <label>
                  <input type="radio" value="single" checked={selectedOption === 'single'} onChange={handleRadioChange} />
                  Single Room
                </label>
                <label>
                  <input type="radio" value="double" checked={selectedOption === 'double'} onChange={handleRadioChange} />
                  Double Room
                </label>
                <label>
                  <input type="radio" value="suite" checked={selectedOption === 'suite'} onChange={handleRadioChange} />
                  Suite
                </label>
              </div>
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;