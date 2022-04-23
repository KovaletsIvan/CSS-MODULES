import UpPanel from "./components/uppanel/UpPanel";
import Header from "./components/header/Header";

import styles from "./App.module.css";
import Main from "./components/main/Main";
import ContactsSection from "./components/contacts/ContactsSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className={styles.container}>
      <UpPanel />
      <Header />
      <Main />
      <ContactsSection />
      <Footer />
    </div>
  );
}

export default App;
