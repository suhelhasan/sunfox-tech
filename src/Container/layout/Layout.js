import React,{Component} from 'react';
import firebase from '../../firebase/Firebase';
import Login from '../../components/Login/Login';
import Dashboard from '../../components/Dashboard/Dashboard';

class Layout extends Component{

    

    // shouldComponentUpdate(nextProps,nextState){
    //         return (nextState.volunteers!==this.state.volunteers);
    // }

    componentDidUpdate(){
        console.log("user",this.state.user);
    }

   

    componentDidMount(){
        firebase.auth().onAuthStateChanged((firebaseUser)=>{
            if(this.state.user!==firebaseUser)
            this.setState({
                user:firebaseUser
            });
            console.log(firebaseUser);
        });

        // firebase.firestore().collection('volunteers').get()
        // .then((snapshot) => {
        //     snapshot.forEach((doc) => {
        //     console.log(doc.id, '=>', doc.data());
        //     });
        // })
        // .catch((err) => {
        //     console.log('Error getting documents', err);
        // });
    }


    loginHandler = (event,email,password) => {
        // event.preventDefault();
        // console.log(email,password);
        // firebase.auth().signInWithEmailAndPassword(email,password).catch((error)=>{
        //     console.log("Error: ",error);
        // });
    }

    logoutHandler = (event)=>{
        firebase.auth().signOut()
    }

    state={
        user:null,
        beneficiaries:[],
        volunteers:[]
    }



    render(){
            //   return  this.state.user===null?
            //      <Login onLoginHandler={this.loginHandler}/>:
            //      <Dashboard onLogoutClickHandler={this.logoutHandler}/>;
            return <Login/>
            }

}

export default Layout;
