import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { isMobile } from "react-device-detect";
import ParticlesBg from "particles-bg";

import Tile from "./Tile";
import ImageModal from "./ImageModal";

const Home = () => {
  const [modalData, setModalData] = useState(null);

  const onTileClicked = data => {
    setModalData(data);
  };

  const onModalClosed = () => {
    setModalData(null);
  };

  const DETAILS = [
    {
      char: "V",
      desc: "Valiant",
      vid: "https://youtu.be/DHqxnhcBMPY"
    },
    {
      char: "I",
      desc: "Imaginative",
      vid: "https://www.youtube.com/watch?v=xlfdz8ZPOwY"
    },
    {
      char: "S",
      desc: "Spunky",
      vid: "https://youtu.be/X-03QBwcCLc"
    },
    {
      char: "H",
      desc: "Happy",
      vid: "https://www.youtube.com/watch?v=y7hv7BERgLY"
    },
    {
      char: "V",
      desc: "Vital",
      vid: "https://www.youtube.com/watch?v=kGCsbi7vlFs"
    },
    {
      char: "A",
      desc: "Affectionate",
      vid: "https://www.youtube.com/watch?v=6YjJ4CtDgjg"
    },
    {
      char: "K",
      desc: "Kind",
      vid: "https://www.youtube.com/watch?v=T43W7TkcwtU"
    }
  ];

  return (
    <>
      <ParticlesBg type="lines" bg={true} />
      <Container className={"tile-grid-container"}>
        {modalData && <ImageModal data={modalData} onClose={onModalClosed} />}
        <Grid
          id={"top-grid"}
          container
          direction={isMobile ? "column" : "row"}
          className={"tile-grid"}
        >
          {DETAILS.map((obj, idx) => {
            return (
              <Tile key={idx} data={DETAILS[idx]} onClick={onTileClicked} />
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
