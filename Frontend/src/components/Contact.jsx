import React, { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    scale: 1.4;
    height: auto;
  }

  @media only screen and (max-width: 450px) {
    scale: 1.05; /* 75% of 1.4 */
    height: auto;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media only screen and (max-width: 1200px) {}

  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 400px;
    height: auto;
    margin-bottom: 400px;
    overflow-x: hidden;
  }

  @media (max-width: 450px) {
    margin-top: 100px; /* 75% of 400px */
    margin-bottom: 100px; /* 75% of 400px */
    overflow-x: hidden;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 50px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    margin-left: 0px;
    overflow-x: hidden;
  }

  @media only screen and (max-width: 450px) {
    overflow-x: hidden;
  }
`;

const Title = styled.h1`
  font-weight: 200;

  @media (max-width: 450px) {
    font-size: 18px; /* Optional scaling */
  }
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
    margin-left: 0px;
    overflow-x: hidden;
  }

  @media only screen and (max-width: 450px) {
    width: 225px; /* 75% of 300px */
    gap: 18.75px; /* 75% of 25px */
    overflow-x: hidden;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;

  @media only screen and (max-width: 450px) {
    padding: 15px; /* 75% of 20px */
  }
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;

  @media only screen and (max-width: 450px) {
    padding: 15px; /* 75% of 20px */
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;

  @media only screen and (max-width: 450px) {
    padding: 15px; /* 75% of 20px */
  }
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
    margin-left: 0px;
    overflow-x: hidden;
  }

  @media only screen and (max-width: 450px) {
    overflow-x: hidden;
  }
`;

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");

    // Collect form data
    const formData = new FormData(e.target);
    formData.append("access_key", "af43e4f0-a76c-4831-ba6f-81ac6ea55ffd");  

    // Submit to Web3Forms API
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        e.target.reset();  // Reset the form after successful submission
      } else {
        setResult(data.message);  // Display error message from Web3Forms
      }
    } catch (error) {
      setResult("Error submitting your form.");
      console.log("Error:", error);
    }
  };

  return (
    <Section id = "contact">
      <Container>
        <Left>
          <Form onSubmit={onSubmit}>
            <Title>Contact Us</Title>
            {/* Full Name */}
            <Input placeholder="Full Name" name="name" required />
            {/* Email */}
            <Input placeholder="Email" name="email" required />
            {/* Phone Number */}
            <Input type="tel" placeholder="Phone Number" name="phone_number" required />
            {/* Subject */}
            <Input placeholder="Subject" name="subject" required />
            {/* Message */}
            <TextArea placeholder="Write your message" name="message" rows={10} required />
            
            {/* Submit Button */}
            <Button type="submit">Send Message</Button>
            {/* Result Message */}
            <span>{result}</span>
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
