import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, query, orderByChild, equalTo, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAso045mvuwi4VgaqCFVBT0bz1u3_e9O9g",
    authDomain: "crescendo-scouting-app-649.firebaseapp.com",
    databaseURL: "https://crescendo-scouting-app-649-default-rtdb.firebaseio.com",
    projectId: "crescendo-scouting-app-649",
    storageBucket: "crescendo-scouting-app-649.appspot.com",
    messagingSenderId: "1043419769449",
    appId: "1:1043419769449:web:448a22c410c3efd37c50f8"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const DataLookup = () => {
  const [teamNumber, setTeamNumber] = useState('');
  const [teamData, setTeamData] = useState([]);
  const [statistics, setStatistics] = useState({});

  const handleTeamNumberChange = (e) => {
    setTeamNumber(e.target.value);
  };

  const fetchData = async () => {
    try {
        const submissionsRef = ref(database, 'formData-mbr');
        const teamQuery = query(submissionsRef, orderByChild('teamNumber'), equalTo(teamNumber));
      onValue(teamQuery, (snapshot) => {
        const data = snapshot.val() ? Object.values(snapshot.val()).map(team => team) : [];
        setTeamData(data);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const calculateStatistics = () => {
    const stats = {
      speakersScoredAuton: {
        average: 0,
        high: 0,
        low: 0,
        last3Average: 0,
      },
      speakersScoredTeleop: {
        average: 0,
        high: 0,
        low: 0,
        last3Average: 0,
      },
      ampsScoredAuton: {
        average: 0,
        high: 0,
        low: 0,
        last3Average: 0,
      },
      ampsScoredTeleop: {
        average: 0,
        high: 0,
        low: 0,
        last3Average: 0,
      },
    };

    if (teamData.length > 0) {
      // Speakers Scored Auton
      const speakersScoredAuton = teamData.map((match) => match.speakersScoredAuton);
      stats.speakersScoredAuton.average = calculateAverage(speakersScoredAuton);
      stats.speakersScoredAuton.high = Math.max(...speakersScoredAuton);
      stats.speakersScoredAuton.low = Math.min(...speakersScoredAuton);
      stats.speakersScoredAuton.last3Average = calculateLast3Average(speakersScoredAuton);

      // Speakers Scored Teleop
      const speakersScoredTeleop = teamData.map((match) => match.speakersScoredTeleop);
      stats.speakersScoredTeleop.average = calculateAverage(speakersScoredTeleop);
      stats.speakersScoredTeleop.high = Math.max(...speakersScoredTeleop);
      stats.speakersScoredTeleop.low = Math.min(...speakersScoredTeleop);
      stats.speakersScoredTeleop.last3Average = calculateLast3Average(speakersScoredTeleop);

      // Amps Scored Auton
      const ampsScoredAuton = teamData.map((match) => match.ampsScoredAuton);
      stats.ampsScoredAuton.average = calculateAverage(ampsScoredAuton);
      stats.ampsScoredAuton.high = Math.max(...ampsScoredAuton);
      stats.ampsScoredAuton.low = Math.min(...ampsScoredAuton);
      stats.ampsScoredAuton.last3Average = calculateLast3Average(ampsScoredAuton);

      // Amps Scored Teleop
      const ampsScoredTeleop = teamData.map((match) => match.ampsScoredTeleop);
      stats.ampsScoredTeleop.average = calculateAverage(ampsScoredTeleop);
      stats.ampsScoredTeleop.high = Math.max(...ampsScoredTeleop);
      stats.ampsScoredTeleop.low = Math.min(...ampsScoredTeleop);
      stats.ampsScoredTeleop.last3Average = calculateLast3Average(ampsScoredTeleop);
    }

    setStatistics(stats);
  };

  const calculateAverage = (arr) => {
    if (arr.length === 0) return 0;
    return arr.reduce((sum, value) => sum + value, 0) / arr.length;
  };

  const calculateLast3Average = (arr) => {
    if (arr.length < 3) return calculateAverage(arr);
    const last3 = arr.slice(arr.length - 3);
    return calculateAverage(last3);
  };

  useEffect(() => {
    if (teamNumber) {
      fetchData();
    } else {
      setTeamData([]);
      setStatistics({});
    }
  }, [teamNumber]);

  useEffect(() => {
    calculateStatistics();
  }, [teamData]);

  return (
    <div className="bg-blue-950 text-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Data Lookup</h2>
      <div className="mb-4">
        <label htmlFor="teamNumber" className="block mb-2 font-bold">
          Team Number:
        </label>
        <input
          id="teamNumber"
          type="number"
          value={teamNumber}
          onChange={handleTeamNumberChange}
          className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded"
        />
      </div>
      {teamData.length > 0 ? (
        <div>
          <h3 className="text-xl font-bold mb-2">Statistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold">Speakers Scored Auton</h4>
              <p>Average: {statistics.speakersScoredAuton.average.toFixed(2)}</p>
              <p>High: {statistics.speakersScoredAuton.high}</p>
              <p>Low: {statistics.speakersScoredAuton.low}</p>
              <p>Last 3 Average: {statistics.speakersScoredAuton.last3Average.toFixed(2)}</p>
            </div>
            <div>
              <h4 className="font-bold">Speakers Scored Teleop</h4>
              <p>Average: {statistics.speakersScoredTeleop.average.toFixed(2)}</p>
              <p>High: {statistics.speakersScoredTeleop.high}</p>
              <p>Low: {statistics.speakersScoredTeleop.low}</p>
              <p>Last 3 Average: {statistics.speakersScoredTeleop.last3Average.toFixed(2)}</p>
            </div>
            <div>
              <h4 className="font-bold">Amps Scored Auton</h4>
              <p>Average: {statistics.ampsScoredAuton.average.toFixed(2)}</p>
              <p>High: {statistics.ampsScoredAuton.high}</p>
              <p>Low: {statistics.ampsScoredAuton.low}</p>
              <p>Last 3 Average: {statistics.ampsScoredAuton.last3Average.toFixed(2)}</p>
            </div>
            <div>
              <h4 className="font-bold">Amps Scored Teleop</h4>
              <p>Average: {statistics.ampsScoredTeleop.average.toFixed(2)}</p>
              <p>High: {statistics.ampsScoredTeleop.high}</p>
              <p>Low: {statistics.ampsScoredTeleop.low}</p>
              <p>Last 3 Average: {statistics.ampsScoredTeleop.last3Average.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ) : teamNumber ? (
        <p>No data found for team {teamNumber}.</p>
      ) : (
        <p>Enter a team number to view statistics.</p>
      )}
    </div>
  );
};

export default DataLookup;