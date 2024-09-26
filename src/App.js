import './App.css';
import Menu from './components/Menu/Base_menu/Menu.js';
import Movies from './components/Movies/Movies.js';
import Songs from './components/Songs/Songs.js';
import ContactUs from './components/Contact_us/Contact_us.js';
function App() {
  return (
    <div className="App">
      <header><Menu /></header>
      <Movies/>
      <Songs/>
      <ContactUs/>
      
    </div>
  );
}

export default App;
