import React,{Component} from 'react';
import './Dashboard.css';
import { Redirect } from "react-router";
import firebase from '../../firebase/Firebase';
import DashboardSideBar from './DashboardSideBar/DashboardSideBar';
import DashboardMainContent from './DashboardMainContent/DashboardMainContent';

class Dashboard extends Component{

   itemClickHandler = (event, index) => {
        this.setState({
            selectedItem:index
        });
   } 

//    shouldComponentUpdate(nextProps,nextState){
//             return (nextState.volunteers!==this.state.volunteers);
//    }


   componentDidMount(){
         let arr =[];
         console.log("props,",this.props);
        //  firebase.firestore().collection('volunteers').get()
        //     .then((snapshot) => {
        //         snapshot.forEach((doc) => {
        //         console.log(doc.id, '=>', doc.data());
        //         arr.push(doc.data());
        //         }
        //         );
        //         this.setState({
        //             volunteers:arr
        //         });
        //     })
        //     .catch((err) => {
        //         console.log('Error getting documents', err);
        //     });
   }

   state={
       selectedItem:0,
       beneficiaries:[],
       volunteers:[],
       pincodes:[],
       mandals:[],
       panchayats:[]
   }

   render(){
     if(this.props.user===null)
     return <Redirect to="/login"/>

    return (
        <div className="dashboard-container">
           <DashboardSideBar 
                selectedItem={this.state.selectedItem}
                itemClickHandler={this.itemClickHandler}
                 />
            <DashboardMainContent volunteers={this.state.volunteers} logoutHandler={this.props.logoutHandler} />
            {/* <h1>This is dashboard</h1>
            <button onClick={props.onLogoutClickHandler}>Logout</button>
         */}
        </div>
        );
   }
}

export default Dashboard;