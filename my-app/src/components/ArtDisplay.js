import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";

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
    ...[
      drawingAbigail, drawingFloatingClouds, drawingHairStudy, drawingLilia, drawingLockForest,
      drawingMaleBodyStudy, drawingOberon, drawingOuttaLove, drawingSadPanda, drawingShh,
      drawingSpaceDiamond, drawingSpiderEye, drawingSusRocks, drawingWomanEye, drawingEyes1,
      drawingDragon, drawingFingers, drawingLev, drawingPikmin, drawingBear, drawingGirl,
      drawingEyes2, drawingGirl2, drawingGirl3, drawingFlower, drawingMan, drawingHands,
      drawingHands2,
    ].map((src) => ({
      src,
      thumbnail: src,
      thumbnailWidth: 300,
      thumbnailHeight: 400,
    })),
    ...[
      sculptureAbstract, sculptureBedMonster, sculptureCrayonHand, sculptureHemoFearMonster,
      sculptureHorseGlazed, sculptureLootbox, sculptureManMonster2, sculptureManMonster,
      sculptureMaskMonster, sculptureRobot,
    ].map((src) => ({
      src,
      thumbnail: src,
      thumbnailWidth: 300,
      thumbnailHeight: 400,
    })),
    ...[
      otherCryEye,
    ].map((src) => ({
      src,
      thumbnail: src,
      thumbnailWidth: 300,
      thumbnailHeight: 400,
    })),
  ],
  Drawings: [
    { src: drawingAbigail, thumbnail: drawingAbigail, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingFloatingClouds, thumbnail: drawingFloatingClouds, thumbnailWidth: 400, thumbnailHeight: 300 },
    { src: drawingHairStudy, thumbnail: drawingHairStudy, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingLilia, thumbnail: drawingLilia, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingLockForest, thumbnail: drawingLockForest, thumbnailWidth: 400, thumbnailHeight: 300 },
    { src: drawingMaleBodyStudy, thumbnail: drawingMaleBodyStudy, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingOberon, thumbnail: drawingOberon, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingOuttaLove, thumbnail: drawingOuttaLove, thumbnailWidth: 400, thumbnailHeight: 300 },
    { src: drawingSadPanda, thumbnail: drawingSadPanda, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingShh, thumbnail: drawingShh, thumbnailWidth: 400, thumbnailHeight: 300 },
    { src: drawingSpaceDiamond, thumbnail: drawingSpaceDiamond, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingSpiderEye, thumbnail: drawingSpiderEye, thumbnailWidth: 400, thumbnailHeight: 300 },
    { src: drawingSusRocks, thumbnail: drawingSusRocks, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingWomanEye, thumbnail: drawingWomanEye, thumbnailWidth: 400, thumbnailHeight: 300 },
    { src: drawingEyes1, thumbnail: drawingEyes1, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingDragon, thumbnail: drawingDragon, thumbnailWidth: 400, thumbnailHeight: 300 },
    { src: drawingFingers, thumbnail: drawingFingers, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingLev, thumbnail: drawingLev, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingPikmin, thumbnail: drawingPikmin, thumbnailWidth: 400, thumbnailHeight: 300 },
    { src: drawingBear, thumbnail: drawingBear, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingGirl, thumbnail: drawingGirl, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingEyes2, thumbnail: drawingEyes2, thumbnailWidth: 400, thumbnailHeight: 300 },
    { src: drawingGirl2, thumbnail: drawingGirl2, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingGirl3, thumbnail: drawingGirl3, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingFlower, thumbnail: drawingFlower, thumbnailWidth: 400, thumbnailHeight: 300 },
    { src: drawingMan, thumbnail: drawingMan, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingHands, thumbnail: drawingHands, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: drawingHands2, thumbnail: drawingHands2, thumbnailWidth: 400, thumbnailHeight: 300 },
  ],
  "3D Sculptures": [
    { src: sculptureAbstract, thumbnail: sculptureAbstract, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: sculptureBedMonster, thumbnail: sculptureBedMonster, thumbnailWidth: 400, thumbnailHeight: 300 },
    { src: sculptureCrayonHand, thumbnail: sculptureCrayonHand, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: sculptureHemoFearMonster, thumbnail: sculptureHemoFearMonster, thumbnailWidth: 400, thumbnailHeight: 300 },
    { src: sculptureHorseGlazed, thumbnail: sculptureHorseGlazed, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: sculptureLootbox, thumbnail: sculptureLootbox, thumbnailWidth: 400, thumbnailHeight: 300 },
    { src: sculptureManMonster2, thumbnail: sculptureManMonster2, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: sculptureManMonster, thumbnail: sculptureManMonster, thumbnailWidth: 300, thumbnailHeight: 400 },
    { src: sculptureMaskMonster, thumbnail: sculptureMaskMonster, thumbnailWidth: 400, thumbnailHeight: 300 },
    { src: sculptureRobot, thumbnail: sculptureRobot, thumbnailWidth: 300, thumbnailHeight: 400 },
  ],
  Paintings: [
    { src: otherCryEye, thumbnail: otherCryEye, thumbnailWidth: 300, thumbnailHeight: 400 },
  ],
};

const ArtDisplay = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="art-display-container">
      <div className="category-buttons">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`category-button ${selectedCategory === category ? "active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>
      <Gallery images={categories[selectedCategory]} enableImageSelection={false} />
    </div>
  );
};

export default ArtDisplay;

