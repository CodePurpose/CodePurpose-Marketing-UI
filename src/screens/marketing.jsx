import React from "react";
import NavBar from "../component/NavBar";
import Title from "../component/Title";
import Footer from "../component/Footer";
import ProductionModel from "../component/ProductionModel";

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
