import React,{ useState, useEffect} from 'react';
import firebase from '../../firebase/Firebase';
import Login from '../../components/Login/Login';
import Dashboard from '../../components/Dashboard/Dashboard';
import {  Route } from 'react-router';
import './Layout.css';
import  { Redirect } from 'react-router-dom'

import {useDispatch} from 'react-redux';
import {loginUser, logoutUser,authError} from '../../redux/actions';
export default function Layout (props){
    

    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(
        ()=>{
        firebase.auth().onAuthStateChanged((firebaseUser)=>{
            if(firebaseUser!==null){
                dispatch(loginUser(firebaseUser));
            }else{
                dispatch(logoutUser());
            }
            setLoading(false);
        })},[]
    )
    


   const loginHandler = (event,email,password) => {
        setLoading(true);
        event.preventDefault();
        console.log(email,password);
        firebase.auth().signInWithEmailAndPassword(email,password).catch((e)=>{
                dispatch(authError());
                setLoading(false);
        });
    }

   const logoutHandler = (event)=>{
        event.preventDefault();
        firebase.auth().signOut();
    }

   


    
            return (
                <div className="layout-container">
                     <Route path="/" exact render={()=>{
                           return <Redirect to="/login"/>
                        }}/>
                        <Route path="/login"  render={()=>{
                           return <Login 
                           loading={loading} 
                           onLoginHandler={loginHandler} 
                           />
                        }}/>
                        <Route path="/admin"   render={()=>{
                           return <Dashboard 
                           logoutHandler={logoutHandler}
                           />
                        }}/>
                </div>
            )
}
