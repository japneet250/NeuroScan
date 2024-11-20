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
    margin-top: 0px;
    height: 800px;
    margin-top: -50px;
    
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    height: 800px;
    padding: 20px 0;
  }

  @media (max-width: 767px) {
    margin: 0px;
    padding-top: 0px;
    overflow-x: hidden;
    
  }

  @media (max-width: 450px) {
    margin: 0px;
    padding-top: 0px;
    overflow-x: hidden;

`;

const TextContainer = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;


  @media (max-width: 1400px) {
    padding: 20px;
    height: 400px;
    width: 800px;
  }

  @media (max-width: 1200px) {
    padding: 0px;
    height: auto;
    width: auto;
  }


`;

const StaticText = styled.div`
  font-size: 27px;
  color: #ffffff;
  font-weight: bold;
  font-family: "Cursive";
  max-width: 600px;
  text-align: left;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  line-height: 1.4;
  padding: 20px;

  @media (max-width: 1400px) {
    font-size: 24px;
    padding: 10px;
  }

  @media (max-width: 1200px) {
    font-size: 26px;
    text-align: center;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 1.2;
    max-width: 100%;
    margin: 15px;
    margin-bottom: 50px;
    overflow-x: hidden;
    
  }

  @media (max-width: 450px) {
    font-size: 22.5px;
    line-height: 1.2;
    max-width: 100%;
    margin: 15px;
    margin-bottom: 37.5px;
    overflow-x: hidden;
    
  }

`;

const CanvasContainer_new = styled.div`
  flex: 2;
  position: relative;
  margin-right: 120px;

  @media (max-width: 1400px) {
    width: 70%;
    height: 70%;
    margin-right: 50px;
    margin-top: -50px;
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: 100%;
  
  }

  @media (max-width: 768px) {
    height: 400px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    height: 300px;
    overflow-x: hidden;
  }
`;



const ProductDesign = () => {
  // Use media query to detect if the screen width is 480px or less
  const isMobile = useMediaQuery({ query: "(max-width: 768px)"  });
  const isMobile_new = useMediaQuery({ query: "(max-width: 400px)"  });

  const isTab = useMediaQuery({query: "(max-width: 1200px)" });

  return (
    <Wrapper>
      <TextContainer>
        <StaticText>
          "Explore our interactive 3D brain model with a simple click-and-drag—revealing the intricate details that power our AI’s 98% accuracy in tumor detection and 94% accuracy in identifying tumor types. Rotate to uncover how each brain region contributed to our CNN training, refined by over 5,000 medical images, ensuring unmatched precision in every diagnosis."
        </StaticText>
      </TextContainer>
      <CanvasContainer_new>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6} center={false} adjustCamera={false}>
              {/* Dynamically adjust the scale based on screen size */}
              <Shoe scale={isMobile_new ? [2.0, 2.0,2.0] : isTab ? [3.0, 3.0,3.0] : isMobile ? [3.0, 3.0,3.0] : [2.5, 2.5, 2.5]} />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      </CanvasContainer_new>
    </Wrapper>
  );
};

export default ProductDesign;
