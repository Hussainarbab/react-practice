import '@fortawesome/fontawesome-free/css/all.min.css';
import UserGreeting from './usergreeting';
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";

function App() {
  return (
    <>
      <Header />
      <UserGreeting isloggedIn={true} username="Hussain Arbab" />
      <Food />
      <Card />
      <Footer />
    </>
  );
}

export default App;
