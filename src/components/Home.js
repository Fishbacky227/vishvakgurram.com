import React from "react";
import { Container, Grid } from "@material-ui/core";
import Tile from "./Tile";
import { isMobile } from "react-device-detect";
import ParticlesBg from "particles-bg";

const Home = () => {
  return (
    <>
      <ParticlesBg type="lines" bg={true} />
      <Container className={"tile-grid-container"}>
        <Grid
          id={"top-grid"}
          container
          direction={isMobile ? "column" : "row"}
          className={"tile-grid"}
        >
          <Tile data={"V"} />
          <Tile data={"I"} />
          <Tile data={"S"} />
          <Tile data={"H"} />
          <Tile data={"V"} />
          <Tile data={"A"} />
          <Tile data={"K"} />
        </Grid>
      </Container>
    </>
  );
};

export default Home;
