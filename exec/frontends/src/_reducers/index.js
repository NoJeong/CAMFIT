import { combineReducers} from 'redux';
import login from './login';
import signup from './signup';
import emailcheck from './email';
import selftrainlist from './selftrain';


const Reducers = combineReducers({
    login, signup, emailcheck, selftrainlist
});

export default Reducers;