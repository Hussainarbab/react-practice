import '@fortawesome/fontawesome-free/css/all.min.css';
import UserGreeting from './usergreeting';
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import List from './List';
import Button from './Button';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Todo from './Todo';

function App() {
  return (
    <>
      <Header />
      <UserGreeting isloggedIn={true} username="Hussain Arbab" />
      <Food />
      <Card />

      <h1 className='huss'>Convert array object into list items with map method</h1>
      <List/>


      <h1 className='huss'>Click Events</h1>
      <p className='huss'>For checking the result of button please check your console</p>
      <Button/>

      <h1 className='huss'>react hooks</h1>
      <MyComponent/>

      <h1 className='huss'>  Counter</h1>
      <Counter/>
      <Todo/>
      <Footer />
    </>
  );
}

export default App;
