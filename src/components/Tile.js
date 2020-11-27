import React from "react";
import { Button, Card } from "@material-ui/core";

const Tile = ({ data, onClick }) => {
  return (
    <Card elevation={3} className={"tile"}>
      <Button className={"tile-text"} onClick={() => onClick(data)}>
        {data.char}
      </Button>
    </Card>
  );
};

export default Tile;
