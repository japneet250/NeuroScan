import React, { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media only screen and (max-width: 1200px) {
    margin-left: 40px;
  }

  @media (max-width: 767px) {
    margin-left: 0px;
    margin-bottom: 100px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    margin-left: 0px;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
    margin-left: 0px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
    margin-left: 0px;
  }
`;

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");

    // Collect form data
    const formData = new FormData(e.target);
    formData.append("access_key", "af43e4f0-a76c-4831-ba6f-81ac6ea55ffd");  // Replace with your Web3Forms API key

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
