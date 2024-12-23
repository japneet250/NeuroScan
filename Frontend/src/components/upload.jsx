import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { AiOutlineInfoCircle, AiOutlineCloseCircle } from "react-icons/ai";

const Container = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0);
  flex-direction: column;

  @media only screen and (max-width: 1400px) {
    margin-top: -300px;
  }

  @media only screen and (max-width: 1200px) {
    margin-top: 50px;
  }

  @media (max-width: 767px) {
    margin-top: 80px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    margin-top: 60px; /* 75% of 80px */
    overflow-x: hidden;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 50px;
    margin-bottom: 50px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    font-size: 37.5px; /* 75% of 50px */
    margin-bottom: 37.5px; /* 75% of 50px */
    overflow-x: hidden;
  }
`;

const UploadSection = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: 1500px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    height: 1400px; /* 75% of 1500px */
    overflow-x: hidden;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-right: 1px solid #ddd;
  height: 700px;
  background: linear-gradient(135deg, #5A0E87 0%, #2A1B3D 100%);
  border-color: #8E44AD;
  box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.4);
  position: relative;

  &:hover {
    box-shadow: 0px 0px 12px rgba(142, 68, 173, 0.8);
  }

  @media only screen and (max-width: 1200px) {
    height: 500px;
    width: 500px;
    padding: 20px 10px;
    margin-bottom: 50px;
    border-right: none;
  }

  @media (max-width: 768px) {
    height: 500px;
    width: 500px;
    margin: 50px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    height: 375px; /* 75% of 500px */
    width: 375px; /* 75% of 500px */
    margin: 37.5px; /* 75% of 50px */
    overflow-x: hidden;
  }
`;



const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(180deg, #1A1A3D 0%, #0F0F20 100%);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
  border: 1px solid #2A1B3D;

  @media (max-width: 1200px) {
    height: 500px;
    width: 500px;
    padding: 20px 10px;
  }

  @media (max-width: 768px) {
    height: 500px;
    width: 500px;
    margin: 50px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    height: 375px; /* 75% of 500px */
    width: 375px;
    margin: 37.5px;
    overflow-x: hidden;
  }
`;

const DropZone = styled.div`
  width: 600px;
  height: 600px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  margin-top: 40px;

  @media (max-width: 1200px) {
    height: 400px;
    width: 400px;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    height: 400px;
    width: 400px;
    margin: auto;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    height: 300px; /* 75% of 400px */
    width: 300px;
    margin: auto;
    overflow-x: hidden;
  }
`;

const ImagePreview = styled.div`
  position: relative;

  img {
    width: 500px;
    height: 500px;
    border-radius: 10px;
    margin-bottom: 20px;
    object-fit: cover;
  }

  .delete-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: red;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    img {
      height: 300px;
      width: 300px;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 300px;
      width: 300px;
      overflow-x: hidden;
    }
  }

  @media (max-width: 450px) {
    img {
      height: 225px; /* 75% of 300px */
      width: 225px;
    }
  }
`;


const FormContainer = styled.div`
  text-align: center;
  padding: 0px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 450px) {
    width: 75%; /* 75% of 100% */
  }
`;

const Heading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;

  @media (max-width: 768px) {
    font-size: 32px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    font-size: 24px; /* 75% of 32px */
    overflow-x: hidden;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 10px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    padding: 0 7.5px; /* 75% of 10px */
    overflow-x: hidden;
    margin-top: 20px;
  }
`;

const Label = styled.label`
  @media (max-width: 768px) {
    font-size: 20px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    font-size: 18px; /* 75% of 20px */
    overflow-x: hidden;
  }
`;

const InfoIcon = styled(AiOutlineInfoCircle)`
  font-size: 24px;
  color: #4CAF50;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    scale: 1.2;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    scale: 0.9; /* 75% of 1.2 */
    overflow-x: hidden;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: black;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 20px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    width: 67.5%; /* 75% of 90% */
    font-size: 15px; /* 75% of 20px */
    overflow-x: hidden;
  }
`;

const Checkbox = styled.input`
  margin-right: 10px;
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    scale: 1.2;
    margin-left: 100px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    scale: 0.9; /* 75% of 1.2 */
    margin-left: 10px; /* 75% of 100px */
    overflow-x: hidden;
  }
`;

const PersonalInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 5px;
  width: 300px;
  padding-right: 40px;

  @media (max-width: 768px) {
    width: 80%;
    padding-right: 40px;
    margin-left: 30px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    width: 60%; /* 75% of 80% */
    padding-right: 30px; /* 75% of 40px */
    margin-left: 22.5px; /* 75% of 30px */
    overflow-x: hidden;
  }
`;





const Input = styled.input`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 25px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    font-size: 18.75px; /* 75% of 25px */
    overflow-x: hidden;
  }
`;

const Button = styled.button`
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 1200px) {}

  @media (max-width: 768px) {

    font-size: 22px;
    padding: 15px;
    align-items: center;
    width: 200px;
    margin-left: 140px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    font-size: 16.5px; /* 75% of 22px */
    padding: 11.25px; /* 75% of 15px */
    width: 150px; /* 75% of 200px */
    margin-left: 60px; /* 75% of 140px */
    overflow-x: hidden;
  }
`;

const Result = styled.h3`
  margin-top: 30px;
  font-size: 24px;
  color: ${(props) => (props.error ? 'red' : 'white')};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 30px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    font-size: 22.5px; /* 75% of 30px */
    overflow-x: hidden;
  }
`;

const InstructionsButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 1200px) {
    bottom: 10px;
  }

  @media (max-width: 768px) {
    position: static;
    margin-top: 50px;
    scale: 1.3;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    margin-top: 37.5px; /* 75% of 50px */
    scale: 0.975; /* 75% of 1.3 */
    overflow-x: hidden;
  }
`;

const ModalOverlay = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #333;

  @media (max-width: 768px) {
    padding: 20px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    padding: 15px; /* 75% of 20px */
    overflow-x: hidden;
  }
`;

const InstructionsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    font-size: 0.975rem; /* 75% of 1.3rem */
    overflow-x: hidden;
  }
`;

const InstructionsList = styled.ul`
  text-align: left;
  font-size: 1rem;
  margin: 20px 0;
  padding-left: 20px;
  list-style-type: disc;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-left: 15px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    font-size: 0.675rem; /* 75% of 0.9rem */
    padding-left: 11.25px; /* 75% of 15px */
    overflow-x: hidden;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const ImageBox = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #333;

  img {
    width: 100px;
    height: 100px;
    border: 2px solid #ddd;
    border-radius: 8px;
    margin-bottom: 8px;
    object-fit: cover;
  }

  .label {
    font-weight: 500;
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    margin-bottom: 11.25px; /* 75% of 15px */
    overflow-x: hidden;
  }
`;

const CloseButton = styled.button`
  background: #e63946;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
  transition: background 0.3s ease;

  &:hover {
    background: #d62828;
  }
`;

const Upload = () => {
  const [file, setFile] = useState(null);
  const [anonymous, setAnonymous] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);
  const [predictionProbability, setPredictionProbability] = useState(null);


  

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    setResult(null);
  };

  const handleFileDelete = (e) => {
    e.stopPropagation();
    setFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("anonymous", anonymous ? "true" : "false");

    if (!anonymous) {
      if (!name || !age || !country || !email) {
        setError("Please provide all personal information for non-anonymous submission.");
        return;
      }
      formData.append("name", name);
      formData.append("age", age);
      formData.append("country", country);
      formData.append("email", email);
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://test3n-858207113120.us-central1.run.app/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });


      const { prediction, probability } = response.data;

      setPredictionResult(prediction);
      setPredictionProbability(probability);
    } catch (error) {
      setError("Error in prediction");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container id="upload">
      <Title>Brain Tumor Detection</Title>
      <UploadSection>
        <RightSection>
          <FormContainer>
            <Heading>Upload & Predict</Heading>
            <Form onSubmit={handleSubmit}>
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Checkbox
                  id="anonymous-checkbox"
                  type="checkbox"
                  checked={anonymous}
                  onChange={() => setAnonymous(!anonymous)}
                />
                <Label htmlFor="anonymous-checkbox">Submit Anonymously</Label>
                <InfoIcon onClick={() => setShowTooltip(!showTooltip)} />
              </span>
              {showTooltip && (
                <Tooltip>
                  Your data will be stored for training purposes. You can submit anonymously if uncomfortable.
                </Tooltip>
              )}

              {!anonymous && (
                <PersonalInfoSection>
                  <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />

                  <Input
                    type="text"
                    placeholder="Country of Origin"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />

                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </PersonalInfoSection>
              )}

              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Uploading..." : "Upload & Predict"}
              </Button>
            </Form>

            {predictionResult && (
              <Result className="prediction-result">
                <h3 style={{ marginBottom: "20px" }}>Prediction Result: {predictionResult}</h3>
                <p>Probability: {predictionProbability}</p>
              </Result>
            )}
            {error && <Result error>{error}</Result>}
          </FormContainer>
          <InstructionsButton onClick={() => setShowModal(true)}>Instructions</InstructionsButton>
          <ModalOverlay show={showModal}>
            <ModalContent>
              <InstructionsTitle>Instructions</InstructionsTitle>
              <p>Here are the instructions for uploading images:</p>
              <InstructionsList>
                <li>Ensure the image is clear and focused.</li>
                <li>Only upload images in JPG or PNG format.</li>
                <li>Do not upload images with watermarks or text overlays.</li>
              </InstructionsList>
              <ImagesContainer>
                <ImageBox>
                  <img src="./img/NO.jpg" alt="Not Allowed" />
                  <p className="label">Not Allowed</p>
                </ImageBox>
                <ImageBox>
                  <img src="./img/YES.jpg" alt="Allowed" />
                  <p className="label">Allowed</p>
                </ImageBox>
              </ImagesContainer>
              <CloseButton onClick={() => setShowModal(false)}>Close</CloseButton>
            </ModalContent>
          </ModalOverlay>
        </RightSection>
        <LeftSection>
          <DropZone
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => document.getElementById("fileInput").click()}
          >
            {file ? (
              <ImagePreview>
                <img src={URL.createObjectURL(file)} alt="Preview" />
                <AiOutlineCloseCircle
                  className="delete-icon"
                  onClick={handleFileDelete}
                />
              </ImagePreview>
            ) : (
              <p>Drag & Drop or Click to Upload</p>
            )}
          </DropZone>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </LeftSection>
      </UploadSection>
    </Container>
  );
};

export default Upload;
