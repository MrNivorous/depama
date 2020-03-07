import React from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { newContextComponents } from "@drizzle/react-components";
import { Typography } from "@material-ui/core";

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { AccountData } = newContextComponents;

const Account = () => {
  const { drizzle } = useDrizzle();
  const state = useDrizzleState(state => state);
  return (
    <div>
      <Typography variant="h4" color="secondary">
        Your Account:
      </Typography>
      <AccountData
        drizzle={drizzle}
        drizzleState={state}
        accountIndex={0}
        units="ether"
        precision={3}
      />
    </div>
  );
};

export default Account;
