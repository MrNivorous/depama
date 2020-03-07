import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

const Header = () => (
  <AppBar position="static" color="primary">
    <Container maxWidth="md">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Decentralized Incentive Marketplace
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
