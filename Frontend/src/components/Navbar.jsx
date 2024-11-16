import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";

const Section = styled.div`
  display: flex;
  width: 100%;
  z-index: 1;
`;

const Container = styled.div`
  top: 0;
  width: 100%;
  max-width: 1900px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 120px;
  padding-top: 70px;
  box-sizing: border-box;
  position: absolute;
  background: url("./img/bg.jpeg");

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding-top: 20px;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-grow: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 200px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1) translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    width: 150px;
    left : 10px;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  margin-right: 20px;
  margin-left: auto;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-left: 0;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  color: #e4e4e7;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    transform: scale(1.05);
  }

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  width: 120px;
  padding: 10px;
  margin-right: 30px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 768px) {
    width: 100px;
    font-size: 12px;
  }
`;

const MenuButton = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;
  color: white;

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100px;
  right: 10px;
  background-color: #6a1b9a;
  border-radius: 10px;
  padding: 10px;
  z-index: 1000;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #6a1b9a;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  position: relative;
  margin-bottom: 15px;
  max-height: 80%;
  overflow-y: auto;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: darkred;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FAQItem = styled.div`
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const Question = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  background: linear-gradient(135deg, #5a0e87 0%, #2a1b3d 100%);
  border-color: #8e44ad;
  box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.4);

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    padding: 12px;
  }
`;

const Answer = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "100px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? "10px" : "0 10px")};
  background: #fafafa;
  color: black;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <Section>
        <Container>
          <Logo src="./img/NEURO_SCAN.png" alt="Neuro Scan Logo" />
          <Links>
            <List>
              <ListItem onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>Home</ListItem>
              <ListItem onClick={() => setIsModalOpen(true)}>FAQ</ListItem>
              <ListItem onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact Us</ListItem>
            </List>
          </Links>
          <Icons>
            <Button onClick={() => document.getElementById("upload").scrollIntoView({ behavior: "smooth" })}>Upload Image</Button>
          </Icons>
          <MenuButton onClick={toggleDropdown}>
            {isDropdownOpen ? <FaTimes /> : <FaBars />}
          </MenuButton>
        </Container>
        <DropdownMenu isOpen={isDropdownOpen}>
          <List>
            <ListItem onClick={() => { document.getElementById("home").scrollIntoView({ behavior: "smooth" }); toggleDropdown(); }}>Home</ListItem>
            <ListItem onClick={() => { setIsModalOpen(true); toggleDropdown(); }}>FAQ</ListItem>
            <ListItem onClick={() => { document.getElementById("contact").scrollIntoView({ behavior: "smooth" }); toggleDropdown(); }}>Contact Us</ListItem>
            <ListItem onClick={() => { document.getElementById("upload").scrollIntoView({ behavior: "smooth" }); toggleDropdown(); }}>Upload Image</ListItem>
          </List>
        </DropdownMenu>
      </Section>

      {isModalOpen && (
        <ModalBackdrop>
          <ModalContent>
            <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
            <h2 style={{ marginBottom: "20px" }}>Frequently Asked Questions</h2>
            <FAQItem>
              <Question onClick={() => toggleFAQ(0)}>
                What is the accuracy of Neuro Scan’s tumor detection?
                {openFAQ === 0 ? <FaChevronUp /> : <FaChevronDown />}
              </Question>
              <Answer isOpen={openFAQ === 0}>
                Neuro Scan has achieved a detection accuracy of approximately 98% for identifying brain tumors and 94% for determining specific tumor types. The model has been extensively tested to ensure reliable and accurate predictions.
              </Answer>
            </FAQItem>
            <FAQItem>
              <Question onClick={() => toggleFAQ(1)}>
                What type of technology powers Neuro Scan?
                {openFAQ === 1 ? <FaChevronUp /> : <FaChevronDown />}
              </Question>
              <Answer isOpen={openFAQ === 1}>
                Neuro Scan utilizes a convolutional neural network (CNN) architecture specifically designed for medical image processing. The model is trained on a dataset of over 5,000 MRI images to provide high-precision analysis and predictions.
              </Answer>
            </FAQItem>
            <FAQItem>
              <Question onClick={() => toggleFAQ(2)}>
                How does Neuro Scan work on the backend?
                {openFAQ === 2 ? <FaChevronUp /> : <FaChevronDown />}
              </Question>
              <Answer isOpen={openFAQ === 2}>
                Neuro Scan’s backend leverages a machine learning model that analyzes MRI scans to predict the presence and type of brain tumors. Each scan is processed by the model, and the results are stored in a secure MongoDB database, allowing the system to improve through continuous learning.
              </Answer>
            </FAQItem>
            <FAQItem>
              <Question onClick={() => toggleFAQ(3)}>
                Is patient data secure with Neuro Scan?
                {openFAQ === 3 ? <FaChevronUp /> : <FaChevronDown />}
              </Question>
              <Answer isOpen={openFAQ === 3}>
                Yes, patient data is encrypted and stored securely using AES-256 encryption. We ensure that all privacy standards are met to comply with HIPAA and other healthcare regulations.
              </Answer>
            </FAQItem>
          </ModalContent>
        </ModalBackdrop>
      )}
    </>
  );
};

export default Navbar;