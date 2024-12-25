import React, { useState } from "react";
import Gallery from "react-photo-gallery";

// Importing images
import drawingAbigail from "../pages/artReact/images/Drawings/Abigaill.jpg";
import drawingFloatingClouds from "../pages/artReact/images/Drawings/FloatingClouds.jpg";
import drawingHairStudy from "../pages/artReact/images/Drawings/HairStudy.jpg";
import drawingLilia from "../pages/artReact/images/Drawings/Lilia.jpg";
import drawingLockForest from "../pages/artReact/images/Drawings/LockForest.jpg";
import drawingMaleBodyStudy from "../pages/artReact/images/Drawings/MaleBodyStudy.jpg";
import drawingOberon from "../pages/artReact/images/Drawings/Oberon.jpg";
import drawingOuttaLove from "../pages/artReact/images/Drawings/OuttaLove.jpg";
import drawingSadPanda from "../pages/artReact/images/Drawings/SadPanda.jpg";
import drawingShh from "../pages/artReact/images/Drawings/shh.jpg";
import drawingSpaceDiamond from "../pages/artReact/images/Drawings/SpaceDiamond.jpg";
import drawingSpiderEye from "../pages/artReact/images/Drawings/SpiderEye.jpg";
import drawingSusRocks from "../pages/artReact/images/Drawings/SusRocks.jpg";
import drawingWomanEye from "../pages/artReact/images/Drawings/WomanEye.jpg";
//New Images
import drawingEyes1 from "../pages/artReact/images/Drawings/eyes1.jpg";
import drawingDragon from "../pages/artReact/images/Drawings/dragon.jpg";
import drawingFingers from "../pages/artReact/images/Drawings/fingerstudy1.jpg";
import drawingLev from "../pages/artReact/images/Drawings/lev.jpg";
import drawingPikmin from "../pages/artReact/images/Drawings/pikmin.jpg";
import drawingBear from "../pages/artReact/images/Drawings/bear.jpg";
import drawingGirl from "../pages/artReact/images/Drawings/girl.jpg";
import drawingEyes2 from "../pages/artReact/images/Drawings/eyes2.jpg";
import drawingGirl2 from "../pages/artReact/images/Drawings/girl2.jpg";
import drawingGirl3 from "../pages/artReact/images/Drawings/girl3.jpg";
import drawingFlower from "../pages/artReact/images/Drawings/flower.jpg";
import drawingMan from "../pages/artReact/images/Drawings/man.jpg";
import drawingHands from "../pages/artReact/images/Drawings/hands.jpg";
import drawingHands2 from "../pages/artReact/images/Drawings/hands2.jpg";

import sculptureAbstract from "../pages/artReact/images/3d/abstract.jpg";
import sculptureBedMonster from "../pages/artReact/images/3d/bed monster.jpg";
import sculptureCrayonHand from "../pages/artReact/images/3d/crayonhand.jpg";
import sculptureHemoFearMonster from "../pages/artReact/images/3d/hemo fear monster.jpg";
import sculptureHorseGlazed from "../pages/artReact/images/3d/horseglazed.jpg";
import sculptureLootbox from "../pages/artReact/images/3d/Lootbox.jpg";
import sculptureManMonster2 from "../pages/artReact/images/3d/man monster 2.jpg";
import sculptureManMonster from "../pages/artReact/images/3d/man monster.jpg";
import sculptureMaskMonster from "../pages/artReact/images/3d/maskmonster.jpg";
import sculptureRobot from "../pages/artReact/images/3d/robot.jpg";
import otherCryEye from "../pages/artReact/images/Paint/cry eye.jpg";

const categories = {
    All: [
        { src: drawingAbigail, width: 4, height: 4 },
        { src: drawingFloatingClouds, width: 4, height: 3 },
        { src: drawingHairStudy, width: 4, height: 3 },
        { src: drawingLilia, width: 3, height: 4 },
        { src: drawingLockForest, width: 4, height: 3 },
        { src: drawingMaleBodyStudy, width: 4, height: 4 },
        { src: drawingOberon, width: 3, height: 4 },
        { src: drawingOuttaLove, width: 4, height: 3 },
        { src: drawingSadPanda, width: 4, height: 4 },
        { src: drawingShh, width: 3, height: 4 },
        { src: drawingSpaceDiamond, width: 4, height: 3 },
        { src: drawingSpiderEye, width: 4, height: 3 },
        { src: drawingSusRocks, width: 3, height: 4 },
        { src: drawingWomanEye, width: 4, height: 4 },
        { src: drawingEyes1, width: 4, height: 5 },
        { src: drawingDragon, width: 3, height: 4 },
        { src: drawingFingers, width: 4, height: 5 },
        { src: drawingLev, width: 6, height: 4 },
        { src: drawingPikmin, width: 4, height: 5 },
        { src: drawingBear, width: 3, height: 4 },
        { src: drawingGirl, width: 3, height: 4 },
        { src: drawingEyes2, width: 4, height: 5 },
        { src: drawingGirl2, width: 3, height: 4 },
        { src: drawingGirl3, width: 4, height: 5 },
        { src: drawingFlower, width: 3, height: 4 },
        { src: drawingMan, width: 4, height: 5 },
        { src: drawingHands, width: 4, height: 5 },
        { src: drawingHands2, width: 3, height: 4 },
        { src: sculptureAbstract, width: 4, height: 3 },
        { src: sculptureBedMonster, width: 4, height: 3 },
        { src: sculptureCrayonHand, width: 4, height: 3 },
        { src: sculptureHemoFearMonster, width: 4, height: 3 },
        { src: sculptureHorseGlazed, width: 4, height: 3 },
        { src: sculptureLootbox, width: 4, height: 4 },
        { src: sculptureManMonster2, width: 4, height: 3 },
        { src: sculptureManMonster, width: 4, height: 3 },
        { src: sculptureMaskMonster, width: 4, height: 5 },
        { src: sculptureRobot, width: 4, height: 4 },
      { src: otherCryEye, width: 3, height: 4 },
    ],
    Drawings: [
      { src: drawingAbigail, width: 4, height: 4 },
      { src: drawingFloatingClouds, width: 4, height: 3 },
      { src: drawingHairStudy, width: 4, height: 3 },
      { src: drawingLilia, width: 3, height: 4 },
      { src: drawingLockForest, width: 4, height: 3 },
      { src: drawingMaleBodyStudy, width: 4, height: 4 },
      { src: drawingOberon, width: 3, height: 4 },
      { src: drawingOuttaLove, width: 4, height: 3 },
      { src: drawingSadPanda, width: 4, height: 4 },
      { src: drawingShh, width: 3, height: 4 },
      { src: drawingSpaceDiamond, width: 4, height: 3 },
      { src: drawingSpiderEye, width: 4, height: 3 },
      { src: drawingSusRocks, width: 3, height: 4 },
      { src: drawingWomanEye, width: 4, height: 4 },
      { src: drawingEyes1, width: 4, height: 5 },
      { src: drawingDragon, width: 3, height: 4 },
      { src: drawingFingers, width: 4, height: 5 },
      { src: drawingLev, width: 6, height: 4 },
      { src: drawingPikmin, width: 4, height: 5 },
      { src: drawingBear, width: 3, height: 4 },
      { src: drawingGirl, width: 3, height: 4 },
      { src: drawingEyes2, width: 4, height: 5 },
      { src: drawingGirl2, width: 3, height: 4 },
      { src: drawingGirl3, width: 4, height: 5 },
      { src: drawingFlower, width: 3, height: 4 },
      { src: drawingMan, width: 4, height: 5 },
      { src: drawingHands, width: 4, height: 5 },
      { src: drawingHands2, width: 3, height: 4 },
    ],
    Sculptures: [
      { src: sculptureAbstract, width: 4, height: 3 },
      { src: sculptureBedMonster, width: 4, height: 3 },
      { src: sculptureCrayonHand, width: 4, height: 3 },
      { src: sculptureHemoFearMonster, width: 4, height: 3 },
      { src: sculptureHorseGlazed, width: 4, height: 3 },
      { src: sculptureLootbox, width: 4, height: 4 },
      { src: sculptureManMonster2, width: 4, height: 3 },
      { src: sculptureManMonster, width: 4, height: 3 },
      { src: sculptureMaskMonster, width: 4, height: 5 },
      { src: sculptureRobot, width: 4, height: 4 },
    ],
    Other: [
      { src: otherCryEye, width: 1, height: 1 },
    ],
  };
  


const ArtDisplay = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div style={{marginLeft:"3vw",marginRight:"3vw"}}>
      <div style={{ marginBottom: "20px" }}>
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            style={{
              margin: "0 1vw",
              padding: "10px 20px",
              cursor: "pointer",
              background: selectedCategory === category ? "#007BFF" : "#CCC",
              color: "#FFF",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <Gallery photos={categories[selectedCategory] || []} />
    </div>
  );
};

export default ArtDisplay;
