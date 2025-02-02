import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import JSXRules from "./components/JSXRules";
import MainContent from "./components/MainContent";
import ProductInfo from "./components/ProductInfo";
import WelcomeMessage from "./components/WelcomeMessage";


const app =()=> {
  const add = (a, b)=> {return a + b;}
  return  <section> 
    <p>{add(1,2)}</p>
    <Header />
    <Greeting />
    <br />
    <ProductInfo />
    <br />
    
    <MainContent />
    <WelcomeMessage />
    <JSXRules />
    <Footer />
  </section>
}

export default app;