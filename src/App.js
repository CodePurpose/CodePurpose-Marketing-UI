import React from "react";
import NavBar from "./component/NavBar";
import Title from "./component/Title";
import Footer from "./component/Footer";
import CPOffer from "./component/CPOffer";

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
          <CPOffer />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
