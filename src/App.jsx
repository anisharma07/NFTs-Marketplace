import React from "react";
import styles from "./style";
import Parts from "./components/Parts";
import { Navbar, Page, Logos, Footer, Cards, Swipecard } from "./components";
// import Parts from "./components/Parts";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden relative">
      <Parts />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Page />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Logos />
          <Cards />
          <Swipecard />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
