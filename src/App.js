import './App.css';
import CreateClient from './components/createClient';
import CreateTransfert from './components/createTransfert';
import Read from './components/readBeneficiaire';
import Update from './components/updateCompte';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CreateBeneficiaire from './components/createBeneficiaire';
import CreateCompte from './components/createCompte';
import ReadClient from './components/readClient'
import ReadCompte from './components/readCompte'
import ReadTransfert from './components/readTransfert'
import ReadBeneficiaire from './components/readBeneficiaire'
import UpdateCompte from './components/updateCompte'
import UpdateClient from './components/updateClient';
import UpdateBeneficiaire from './components/updateBeneficiaire';
import NavBar from './components/navBar';

function App() {
  return (
    <Router>
      <div className="main">
        <NavBar />
        <div>
          <Route exact path='/createTransfert' component={CreateTransfert} />
        </div>
        <div>
          <Route exact path='/createClient' component={CreateClient} />
        </div>
        <div>
          <Route exact path='/createCompte' component={CreateCompte} />
        </div>
        <div>
          <Route exact path='/createBeneficiaire' component={CreateBeneficiaire} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/readClient' component={ReadClient} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/readBeneficiaire' component={ReadBeneficiaire} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/readCompte' component={ReadCompte} />
        </div>
        <div>
          <Route exact path='/' component={ReadTransfert} />
        </div>

        <Route path='/update' component={Update} />
        <Route path='/updateCompte' component={UpdateCompte} />
        <Route path='/updateClient' component={UpdateClient} />
        <Route path='/updateBeneficiaire' component={UpdateBeneficiaire} />
      </div>
      
    </Router>
  );
}

export default App;
