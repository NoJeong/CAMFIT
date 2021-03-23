import './App.css';
import NavBar from './component/Navbar';
import Footer from './component/Footer';
import Mainpage from './pages/Mainpage';
import Info from './pages/Info';
import Article from './pages/Article';
import Exercise from './pages/Exercise';
import ExerciseDetail from './pages/ExerciseDetail';
import MoneyClass from './pages/MoneyClass';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Navbar, NavDropdown,Nav } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
        
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Mainpage}></Route>
          <Route path="/info" component={Info}></Route>
          <Route path="/article" component={Article}></Route>
          <Route path="/exercise/detail" component={ExerciseDetail}></Route>
          <Route path="/exercise" component={Exercise}></Route>
          <Route path="/moneyclass" component={MoneyClass}></Route>
          <Route render={() => <div className='error'>에러 페이지</div>} />
        </Switch>
        <br></br>
        <Footer></Footer>
      
    </BrowserRouter>
  );
}

export default App;
