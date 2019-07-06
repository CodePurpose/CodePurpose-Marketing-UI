import React from "react";
import NavBar from "./component/NavBar";
import Title from "./component/Title";
import Footer from "./component/Footer";
import HireUs from "./component/HireUs";
import AboutUs from "./component/AboutUs";
import Discussion from "./component/Discussion";
import Careers from "./component/Careers";
import ProductionModel from "./component/ProductionModel";

const styles = {
  body: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100%"
  },
  content: {
    flex: "1 0 auto",
    width: "100%"
  }
};

function App() {
  return (
    <div>
      <div style={styles.body}>
        <NavBar />
        <div style={styles.content}>
          <Title />
          <ProductionModel />
          <HireUs />
          <AboutUs />
          <Discussion />
          <Careers />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
