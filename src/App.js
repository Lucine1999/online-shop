import './App.css';
import Homepagecarusel from './components/HomePageHeader/HomePageCarousel';
import HomePageHeader from './components/HomePageHeader/HomePageHeader';

function App() {
  return (
    <div className="App">
      <HomePageHeader />
      <Homepagecarusel />
      {
      /*
      <HomePageContentAndFooter />*/
      }
    </div>
  );
}

export default App;
