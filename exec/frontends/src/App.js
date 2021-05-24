import './App.css';
import NavBar from './component/Navbar';
import Footer from './component/Footer';
import Mainpage from './pages/Mainpage';
import Info from './pages/Info';
import InfoDetail from'./component/Info/InfoDetail';
import Community from './pages/Community';
import Selftrain from './pages/Selftrain';
import SelftrainDetail from './pages/SelftrainDetail';
import Exercise from './pages/Exercise';
import VideoClass from './pages/VideoClass';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Signup from './component/Account/Signup';
import ArticleCreate from './component/Community/ArticleCreate';
import ArticleDetail from './component/Community/ArticleDetail';
import ArticleEdit from './component/Community/ArticleEdit';
import CommentCreate from './component/Community/CommentCreate';
import UploadClassPage from './component/VideoClass/UploadClassPage';
import ClassDetailPage from './component/VideoClass/ClassDetailPage';

import App_ from './component/VideoClass/VideoChat/App_'


// import Payment from './component/Payment';
// import PaymentResult from './component/PaymentResult';
// import 'semantic-ui-css/semantic.min.css'
// import { Navbar, NavDropdown,Nav } from 'react-bootstrap';

function App() {
 
  return (
    <BrowserRouter>
  
        
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Mainpage}></Route>
          <Route path="/info/detail/:id" component={InfoDetail}></Route>
          <Route path="/info" component={Info}></Route>
          <Route exact path="/Community" component={Community}></Route>
          <Route exact path="/Community/create" component={ArticleCreate}></Route>
          <Route exact path="/Community/:articleId/detail" component={ArticleDetail}></Route>
          <Route exact path="/Community/:articleId" component={ArticleEdit}></Route>
          <Route exact path="/Community/:articleId/comments" component={Comment}></Route>
          <Route path="/selftrain/exercise/:category" component={Exercise}></Route>
          <Route path="/selftrain/detail/:id" component={SelftrainDetail}></Route>
          <Route path="/selftrain" component={Selftrain}></Route>
          <Route exact path="/videoclass" component={VideoClass}></Route>
          <Route exact path="/videoclass/detail/:classId" component={ClassDetailPage}></Route>
          <Route exact path="/videoclass/upload" component={UploadClassPage}></Route>
          {/* <Route exact path="/payment" component={Payment} /> */}
          {/* <Route exact path="/payment/result" component={PaymentResult} /> */}
          <Route path="/videochat" component={App_}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route render={() => <div className='error'>에러 페이지</div>} />
        </Switch>
        
        <Footer></Footer>
      
    </BrowserRouter>
  );
}

export default App;
