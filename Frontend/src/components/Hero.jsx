import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { FaArrowRight } from 'react-icons/fa';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1400px) {
    height: auto;
    padding: 20px 0;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1400px) {
    margin-top : 120px;
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin: 20px;

  @media only screen and (max-width: 1200px) {
    align-items: center;
    scale: 0.9;
    margin: 0px;
  }

  @media only screen and (max-width: 992px) {
    scale: 0.8;
    margin-top: 50px;
  }

  @media only screen and (max-width: 768px) {
    scale: 0.75;
    margin-top: 0px;
  }

  @media only screen and (max-width: 576px) {
    scale: 0.7;
    margin-top: 100px;
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
    font-size: 48px;
  }

  @media only screen and (max-width: 576px) {
    font-size: 42px;
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
    padding: 20px;
    padding-bottom: 0;
  }

  @media only screen and (max-width: 992px) {
    font-size: 20px;
    padding: 15px;
    padding-bottom: 0;
  }

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    padding: 10px;
    padding-bottom: 0;
  }

  @media only screen and (max-width: 576px) {
    font-size: 16px;
    padding: 5px;
    padding-bottom: 0;
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
    padding: 8px;
    font-size: 12px;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  

  @media only screen and (max-width: 1400px) {
    width: 100%;


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
    margin-top: 20px;
    
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
    width: 300px;
    height: 300px;
  }

  @media only screen and (max-width: 576px) {
    width: 250px;
    height: 250px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;


const Hero = () => {
  return (
    <Section id="home">
      <Navbar />
      <Container>
        <Left>
          <Title>
            Upload Brain Image <FaArrowRight style={{ margin: '0 10px' }} /> Get Prediction.
          </Title>
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
        <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.0}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
            </Canvas>
          <Img src="./img/brain_no_background.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
