import styled from "styled-components";
// import Button from "./components/Button";
import Banner from "./containers/Banner";
import Header from "./containers/Header";
import Banner2 from "./containers/Banner2";
import Footer from "./containers/Footer";
import Content from "./containers/Content";
import Content2 from "./containers/Content2";

const AppBody = styled.div``;

function App() {
  return (
    <AppBody>
      <Header />
      <Banner />
      <Banner2></Banner2>
      <Content />
      <Content2 />
      <Content2 />
      <Footer />
    </AppBody>
  );
}

export default App;
