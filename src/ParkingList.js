import React from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { newContextComponents } from "@drizzle/react-components";
import ParkingSpots from "./ParkingSpots";

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { ContractForm } = newContextComponents;

export default () => {
  const { drizzle } = useDrizzle();
  const state = useDrizzleState(state => state);

  return (
    <div>
      <h2>Parking Spots for Sale</h2>
      <ContractForm
        drizzle={drizzle}
        drizzleState={state}
        contract="Parking"
        method="getParkingSpots"
        render={parking => <ParkingSpots parking={parking} />}
      />
    </div>
  );
};
