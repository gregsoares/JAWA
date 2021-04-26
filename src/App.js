// import Components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TopNav } from './Components/TopNav/TopNav';
import { Footer } from './Components/Footer/Footer';

//import Pages
import Index from './Pages/IndexPage';

//import Utils

function App() {
  return (
    <Router>
      <TopNav active='home' />
      <Switch>
        <Route exact path='/' component={Index} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
