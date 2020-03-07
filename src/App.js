import React from "react";
import { Drizzle } from "@drizzle/store";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import "./App.css";

import drizzleOptions from "./drizzleOptions";

import Header from "./Header";
import Loading from "./Loading";
import SimpleMap from "./Map";
import Account from "./Account";

import ParkingList from "./ParkingList";
import ParkingSpots from "./ParkingSpots";
// import AvailableSpots from "./AvailableSpots";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <DrizzleProvider drizzle={drizzle}>
          <div className="header">
            <Header />
          </div>
          <Loading>
            <Grid container spacing={3}>
              {/* <Grid item xs>
                <Paper className={classes.paper}>
                  <AvailableSpots />
                </Paper>
              </Grid> */}
              <Grid item xs>
                <Paper className={classes.paper}>
                  {" "}
                  <SimpleMap />
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>
                  <ParkingList />
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs>
                <Paper className={classes.paper}>
                  {" "}
                  <ParkingSpots />
                </Paper>
              </Grid>
            </Grid>
          </Loading>
        </DrizzleProvider>
      </div>
    </div>
  );
};

export default App;
