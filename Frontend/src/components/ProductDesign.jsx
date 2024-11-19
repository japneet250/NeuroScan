import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import styled from "styled-components";
import Shoe from "./Shoe"; // Make sure to import your Shoe component
import { useMediaQuery } from "react-responsive"; // Import useMediaQuery

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  

  @media (max-width: 1400px) {
    margin-top: 150px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    height: 1000px;
    padding: 20px 0;
  }

  @media (max-width: 767px) {
    margin: 0px;
    padding-top: 0px;
  }
`;

const TextContainer = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  @media (max-width: 1200px) {
    padding: 20px;
    flex: 1.7;
  }

  @media (max-width: 768px) {
    flex: 1;
  }

  @media (max-width: 767px) {
    margin: 0px;
    padding-top: 0px;
    
    
  }
`;

const StaticText = styled.div`
  font-size: 25px;
  color: #ffffff;
  font-weight: bold;
  font-family: "Cursive";
  max-width: 600px;
  text-align: left;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  line-height: 1.4;

  @media (max-width: 1400px) {
    font-size: 22px;
    padding: 12px;
  }

  @media (max-width: 1200px) {
    font-size: 22px;
    text-align: center;
    max-width: 90%;
    margin-top: 300px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
    max-width: 100%;
  }

  @media (max-width: 767px) {
    margin-top: 0px;
    padding-top: 0px;
  }
`;

const CanvasContainer = styled.div`
  flex: 2;
  position: relative;
  margin-right: 120px;

  @media (max-width: 1400px) {
    margin-top: 100px;
    width: 100%;
    height: 700px;
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 767px) {
    margin-top: 0px;
    padding-top: 0px;
    margin-bottom: 200px;
    
    
  }
`;



const ProductDesign = () => {
  // Use media query to detect if the screen width is 480px or less
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <Wrapper>
      <TextContainer>
        <StaticText>
          "Explore our interactive 3D brain model with a simple click-and-drag—revealing the intricate details that power our AI’s 98% accuracy in tumor detection and 94% accuracy in identifying tumor types. Rotate to uncover how each brain region contributed to our CNN training, refined by over 5,000 medical images, ensuring unmatched precision in every diagnosis."
        </StaticText>
      </TextContainer>
      <CanvasContainer>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6} center={false} adjustCamera={false}>
              {/* Dynamically adjust the scale based on screen size */}
              <Shoe scale={isMobile ? [1.5, 1.5, 1.5] : [2.5, 2.5, 2.5]} />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </Wrapper>
  );
};

export default ProductDesign;
