import React from "React";

export default ({ parking }) => (
  <table>
    <thead>
      <th>Location</th>
      <th>Owner</th>
      <th>Price</th>
      <th>Time Available</th>
      <button>Buy</button>
    </thead>
    <tbody>
      {parking.map(parking => (
        <tr key={parking.id}>
          <td>{parking.location}</td>
          <td>{parking.owner}</td>
          <td>{parking.price}</td>
          <td>{parking.time}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
