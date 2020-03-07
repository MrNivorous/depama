// import React, { useState, useEffect } from "react";
// import { drizzleReactHooks } from "@drizzle/react-plugin";
// import { newContextComponents } from "@drizzle/react-components";

// const { useDrizzle, useDrizzleState } = drizzleReactHooks;
// const { ContractData } = newContextComponents;

// export default () => {
//   const { drizzle } = useDrizzle();
//   const state = useDrizzleState(state => state);
//   return (
//     <div>
//       <ContractData
//         drizzle={drizzle}
//         drizzleState={state}
//         contract="Parking"
//         method="addOpening"
//         methodArgs={[]}
//         render={spot => {
//           return (
//             <div>
//               <h5>{spot._begTimestamp}</h5>
//             </div>
//           );
//         }}
//       />
//     </div>
//   );
// };
