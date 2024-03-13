import React from 'react';
import './PieChart.css';

const TravelPieChart = ({ data, title }) => {
  // Calculate total value for percentage calculation
  const total = data.reduce((acc, entry) => acc + entry.value, 0);

  // Function to generate SVG path for a pie slice
  const getPath = (startAngle, percentage) => {
    const radius = 1;
    const x1 = radius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = radius * Math.sin((startAngle * Math.PI) / 180);

    const x2 = radius * Math.cos(((startAngle + percentage) * Math.PI) / 180);
    const y2 = radius * Math.sin(((startAngle + percentage) * Math.PI) / 180);

    const largeArcFlag = percentage > 180 ? 1 : 0;

    return `M 0 0 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  // Function to render pie slices
  const renderSlices = () => {
    let startAngle = 0;

    return data.map((entry) => {
      const percentage = (entry.value / total) * 360;
      const path = getPath(startAngle, percentage);

      startAngle += percentage;

      return <path key={entry.label} d={path} fill={entry.color} />;
    });
  };

  // Function to render legends
  const renderLegends = () => {
    return data.map((entry) => (
      <div key={entry.label} className="legend-item">
        <span className="legend-color" style={{ backgroundColor: entry.color }}></span>
        <span className="legend-label">{entry.label}</span>
      </div>
    ));
  };

  return (
    <div className="pie-chart-container">
      <h2>{title}</h2>
      <svg viewBox="-1 -1 2 2" className="pie-chart" width="150" height="150">
        <g transform="rotate(-90)">
          {renderSlices()}
        </g>
      </svg>
      <div className="legend-container">{renderLegends()}</div>
    </div>
  );
};

const App = () => {
  // Sample data for the five travel pie charts
  const destinationsChartData = [
    { label: 'Beach Destinations', value: 40, color: '#FF6384' },
    { label: 'Mountain Retreats', value: 30, color: '#7B68EE' },
    { label: 'City Explorations', value: 20, color: '#FFCE56' },
    { label: 'Cultural Journeys', value: 10, color: '#4CAF50' },
  ];

  const expensesChartData = [
    { label: 'Accommodation', value: 35, color: '#FF6384' },
    { label: 'Transportation', value: 25, color: '#7B68EE' },
    { label: 'Food', value: 20, color: '#FFCE56' },
    { label: 'Activities', value: 20, color: '#4CAF50' },
  ];

  const travelerDemographicsChartData = [
    { label: 'Age 18-24', value: 15, color: '#FF6384' },
    { label: 'Age 25-34', value: 35, color: '#7B68EE' },
    { label: 'Age 35-44', value: 25, color: '#FFCE56' },
    { label: 'Age 45+', value: 25, color: '#4CAF50' },
  ];

  // Additional sample data for two more pie charts
  const bestSeason = [
    { label: 'Summer', value: 50, color: '#FF6384' },
    { label: 'Rainy', value: 15, color: '#7B68EE' },
    { label: 'Winter', value: 25, color: '#FFCE56' },
    { label: 'Monsoon', value: 20, color: '#4CAF50' },
  ];

  const fusionChartData = [
    { label: 'Culinary Delights', value: 15, color: '#FF6384' },
    { label: 'Fusion of Cultures', value: 30, color: '#7B68EE' },
    { label: 'Vibrant Festivals', value: 25, color: '#FFCE56' },
    { label: 'Unique Experiences', value: 30, color: '#4CAF50' },
  ];

  return (
    <div className="app-container">
      <TravelPieChart data={destinationsChartData} title="Popular Travel Destinations" />
      <TravelPieChart data={expensesChartData} title="Travel Expenses" />
      <TravelPieChart data={travelerDemographicsChartData} title="Traveler Demographics" />
      <TravelPieChart data={bestSeason} title="Best Season to Visit" />
      <TravelPieChart data={fusionChartData} title="Andhra Pradesh & Telangana Fusion" />
    </div>
  );
};

export default App;
