import './styles/App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './routes/home/Home';
import Projects from './routes/projects/Projects';
import Pilica from './routes/pilica/Pilica';
import Sobieszyn from './routes/sobieszyn/Sobieszyn';
import Almanac from './routes/almanac/Almanac';
import Documentaries from './routes/short documentaries/Documentaries';
import About from './routes/about/About';
import Owners from './routes/owners/Owners';
import GetInvolved from './routes/get-involved/GetInvolved';
import Contact from './routes/contact/Contact';
import PrivacyPolicy from './routes/privacypolicy/PrivacyPolicy';
import Statue from './routes/statue/Statue';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/almanac" component={Almanac} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/statue" component={Statue} />
          <Route exact path="/privacypolicy" component={PrivacyPolicy} />
          <Route exact path="/getinvolved" component={GetInvolved} />
          <Route exact path="/owners" component={Owners} />
          <Route exact path="/projects/pilica" component={Pilica} />
          <Route exact path="/projects/sobieszyn" component={Sobieszyn} />
          <Route exact path="/projects/shortdocumentaries" component={Documentaries} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
