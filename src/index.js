import {createStore, bindActionCreators} from "redux";
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const {dispatch} = store;


const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

document.getElementById('INC').addEventListener('click', inc);

document.getElementById('DEC').addEventListener('click', dec);

document.getElementById('RND').addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10);
    rnd(payload);
});

const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);
