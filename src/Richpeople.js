import React, { useEffect, useState } from 'react';
import './App.css';

const RichPeople = () => {
  const [richPeople, setRichPeople] = useState([]);

  useEffect(() => {
    const fetchRichPeople = async () => {
      try {
        const response = await fetch('http://fs1.co.il/bus/vip.php');
        const data = await response.json();
        setRichPeople(data);
      } catch (error) {
        console.error('Error fetching rich people data:', error);
      }
    };

    fetchRichPeople();
  }, []);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div>
      <h2>Rich People</h2>
      <ul>
        {richPeople.map(person => (
          <li key={person.name}>
            <p>Name: {person.name}</p>
            <p>Money: {person.money}</p>
            <p>Company: {person.company}</p>
            <p>Age: {calculateAge(person.dob)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RichPeople;
