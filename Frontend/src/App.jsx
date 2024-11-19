import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import ProductDesign from "./components/ProductDesign";
import Upload from "./components/upload";
import './index.css';



const Container = styled.div`
  height: 100vh;
  /*scroll-snap-type: y mandatory;*/
  overflow-x: hidden; 
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }


`;


function App() {
  return (
    <Container>
      <Hero />
      {/* <Who /> */}
      <ProductDesign />
      <Upload />
      <Contact />
    </Container>
  );
}

export default App;
