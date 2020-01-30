import React from "react";
import OnlineCard from '../SimpleCard/OnlineCard';
import VolumeCard from '../SimpleCard/VolumeCard';
import QualityCard from '../SimpleCard/QualityCard';
import "../../App.css";

const Dashboard = () => {
  return (
      <div className="cardBox">
        <OnlineCard />
        <VolumeCard />
        <QualityCard />
        <h3>Test Test</h3>

      </div>
    );
  }

  export default Dashboard;



  


