import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { VscArrowRight } from "react-icons/vsc";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1400px) {
    height: auto;
    
  }

  
`;

const Container = styled.div`
  height: 100%;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1400px) {
    margin-top : 120px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 768px) {
    margin-top : 60px;
  }

  @media only screen and (max-width: 450px) {
    margin-top : 45px;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin: 20px;

  @media only screen and (max-width: 1400px) {
    align-items: center;
    scale: 0.9;
    margin: 0px;
  }

  @media only screen and (max-width: 992px) {
    scale: 0.8;
    margin-top: 50px;
  }

  @media only screen and (max-width: 768px) {
    width: 600px;
  }

  @media only screen and (max-width: 450px) {
    width: 450px;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 1400px) {
    font-size: 64px;
    text-align: center;
  }

  @media only screen and (max-width: 992px) {
    font-size: 54px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 60px;
    margin-top: 0px;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 45px;
    margin-top: 0px;
    margin-bottom: 37.5px;
  }

`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 1400px) {
    font-size: 22px;
    padding: 10px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 20px;
    padding: 15px;
    padding-bottom: 0;
  }

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    padding: 10px;
    align-items: center;
    margin-left: 50px;
    margin-bottom: 50px;
    margin-top: 30px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 22.5px;
    padding: 7.5px;
    align-items: center;
    margin-left: 37.5px;
    margin-bottom: 37.5px;
    margin-top: 22.5px;
  }

`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: auto;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 992px) {
    padding: 10px;
    font-size: 14px;
  }

  @media only screen and (max-width: 768px) {
    padding: 20px;
    font-size: 16px;
  }

  @media only screen and (max-width: 450px) {
    padding: 15px;
    font-size: 12px;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  
  @media only screen and (max-width: 1400px) {
    width: 100%;
    height: 100%;

  @media only screen and(max-width: 767px) {
    margin-bottom: 0px;
  }

  @media only screen and(max-width: 450px) {
    margin-bottom: 0px;
  }

`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 1400px) {
    width: 600px;
    height: 450px;
    margin-top: 10px;
    margin-bottom: 10px;
    
    }

  @media only screen and (max-width: 1200px) {
    width: 600px;
    height: 450px;
    margin-top: 20px;
    
    }

  @media only screen and (max-width: 992px) {
    width: 500px;
    height: 375px;
  }

  @media only screen and (max-width: 768px) {
    width: 600x;
    height: 600px;
  }

  @media only screen and (max-width: 450px) {
    width: 400x;
    height: 400px;
    margin-right: -50px;
    
  }

  
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;


  @media (max-width: 1400px) {
    width: 750px;
    height: 750px;
    padding-bottom: 0px;
    margin: auto;
    margin-top: -120px;
  }

  @media (max-width: 768px) {
    width: auto;
    height: 750px; 
    margin: auto;
    margin-top: -60px;
  }

  @media (max-width: 450px) {
    width: auto;
    height: 562.5px; 
    margin: auto;
    margin-top: -45px;
  }
`;

const SphereContainer = styled(Sphere)`
   
`;

const Icon = styled(VscArrowRight)`
  vertical-align: middle; /* Aligns icon with text */
  font-size: 1em; /* Adjust icon size relative to the text */
`;


const Hero = () => {
  return (
    <Section id="home">
      <Navbar />
      <Container>
        <Left>
          <Title>Upload Brain Image <Icon/> Get Prediction.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Desc>
            Empowering Early Detection: Precision Brain Tumor Insights at Your Fingertips.
          </Desc>
          <a href="./img/Sample_Brain_ MRI_X-Ray.zip" download>
            <Button>Download Sample Images</Button>
          </a>
        </Left>
        <Right>
          <CanvasContainer>
            <Canvas>
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <SphereContainer args={[1, 100, 200]} scale={2.0}>
                  <MeshDistortMaterial
                    color="#3d1c56"
                    attach="material"
                    distort={0.5}
                    speed={2}
                  />
                </SphereContainer>
              </Suspense>
            </Canvas>
          </CanvasContainer>
          <Img src="./img/brain_no_background.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
