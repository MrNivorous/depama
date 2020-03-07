import React from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { newContextComponents } from "@drizzle/react-components";

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { ContractForm } = newContextComponents;

export default () => {
  const { drizzle } = useDrizzle();
  const state = useDrizzleState(state => state);

  return (
    <div>
      <h2>Sell Parking Spot</h2>
      <ContractForm
        drizzle={drizzle}
        contract="Parking"
        method="addOpening"
        labels={[
          "Beginning Time",
          "Ending Time",
          "Head",
          "Tail",
          "Space ID",
          "Opening ID",
          "Price"
        ]}
      />
    </div>
  );
};
