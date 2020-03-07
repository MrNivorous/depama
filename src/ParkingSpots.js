import React from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { newContextComponents } from "@drizzle/react-components";
import { Typography } from "@material-ui/core";

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { ContractForm } = newContextComponents;

export default () => {
  const { drizzle } = useDrizzle();
  const state = useDrizzleState(state => state);
  return (
    <div>
      <Typography variant="h4">Reserve a parking spot</Typography>
      <ContractForm
        drizzle={drizzle}
        drizzleState={state}
        contract="Parking"
        method="buyOpening"
      />
    </div>
  );
};

// export default ({ parking }) => (
//   <table>
//     <thead>
//       <th>Location</th>
//       <th>Owner</th>
//       <th>Price</th>
//       <th>Time Available</th>
//       <button>Buy</button>
//     </thead>
//     <tbody>
//       {parking.map(parking => (
//         <tr key={parking.id}>
//           <td>{parking.location}</td>
//           <td>{parking.owner}</td>
//           <td>{parking.price}</td>
//           <td>{parking.time}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );
