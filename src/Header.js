import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { drizzleReactHooks } from "@drizzle/react-plugin";
import { newContextComponents } from "@drizzle/react-components";

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { AccountData } = newContextComponents;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  const { drizzle } = useDrizzle();
  const state = useDrizzleState(state => state);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          PARXOS
        </Typography>
        <Typography className={classes.account}>
          Your Account:
          <AccountData
            drizzle={drizzle}
            drizzleState={state}
            accountIndex={0}
            units="ether"
            precision={3}
          />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
