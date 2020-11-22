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
      img: "images/vg_01.jpg"
    },
    {
      char: "I",
      desc: "Imaginative",
      img: "images/vg_01.jpg"
    },
    {
      char: "S",
      desc: "Spunky",
      img: "images/vg_01.jpg"
    },
    {
      char: "H",
      desc: "Happy",
      img: "images/vg_01.jpg"
    },
    {
      char: "V",
      desc: "Vital",
      img: "images/vg_01.jpg"
    },
    {
      char: "A",
      desc: "Affectionate",
      img: "images/vg_01.jpg"
    },
    {
      char: "K",
      desc: "Kind",
      img: "images/vg_01.jpg"
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
