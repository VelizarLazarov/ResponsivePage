import './App.css';
import HeaderImage from './components/HeaderImage';
import EmailForm from './components/EmailForm';
import NumberList from './components/NumberList';
import PersonList from './components/PersonList'
import TechnologyList from './components/TechnologyList';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <HeaderImage/>
      <EmailForm/>
      <NumberList/>
      <PersonList/>
      <TechnologyList/>
      <Footer/>
    </div>
  );
}

export default App;
