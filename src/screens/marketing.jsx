import React from "react";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import ProductionModel from "../components/ProductionModel";

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

function Marketing() {
  return (
    <div>
      <div style={styles.body}>
        <NavBar />
        <div style={styles.content}>
          <Title />
          <ProductionModel />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Marketing;
