import Footer from "./components/Footer";
import Header from "./components/Header";
import JSXRules from "./components/JSXRules";
import MainContent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";

const app =()=> {
  return  <section> 
    <Header />
    <MainContent />
    <WelcomeMessage />
    <JSXRules />
    <Footer />
  </section>
}

export default app;