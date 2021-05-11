import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Top3 = () => {
  const [hackers, setHackers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3005/hacker/top3`)
      .then(res => {
        console.log(res.data, 'data');
        setHackers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Top 3 hackers</h1>
      <table className='table'>
        <thead>
          <tr>
            <th> # </th>
            <th> Name </th>
          </tr>
        </thead>
        <tbody>
          {hackers.map((hacker, index) => {
            return (
              <tr key={hacker.value}>
                <td> {index + 1} </td>
                <td> {hacker.name} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Top3;
