import React from "react";
import { Button, Card, CardActions, Typography } from "@material-ui/core";

const Tile = ({ data }) => {
  return (
    <Card elevation={3} className={"tile"}>
      <CardActions disableSpacing className={"tile-card"}>
        <Button size="large">
          <Typography variant="h3">{data}</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Tile;
