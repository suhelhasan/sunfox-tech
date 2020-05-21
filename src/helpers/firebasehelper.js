import firebase from '../firebase/Firebase';
import {useSelector, useDispatch} from 'react-redux';

export const addItemToRealtimeDB= (pathToRef,item,onComplete) => {
    const ref = firebase.database().ref(pathToRef).push();
    ref.set(item,(e)=>{
        onComplete(e);
    })
}

export const removeItemFromRealtimeDB= (pathToRef,onComplete) => {
    const ref = firebase.database().ref(pathToRef);
    ref.set(null,(e)=>{
        onComplete(e);
    });
}


