import React from "react";
import { Paper } from "@material-ui/core";

const Tile = ({ data }) => {
  return (
    <Paper elevation={3} className={"tile"}>
      {data}
    </Paper>
  );
};

export default Tile;
