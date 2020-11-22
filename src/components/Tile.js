import React from "react";
import { Button, Card, CardActions, Typography } from "@material-ui/core";

const Tile = ({ data, onClick }) => {
  return (
    <Card elevation={3} className={"tile"}>
      <CardActions disableSpacing className={"tile-card"}>
        <Button size="large" onClick={() => onClick(data)}>
          <Typography variant="h3">{data.char}</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Tile;
