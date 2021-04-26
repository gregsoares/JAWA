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
      <main className='my-0 py-0'>
        <TopNav active='home' />
        <Switch>
          <Route exact path='/' component={Index} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
