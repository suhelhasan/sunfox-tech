import React from 'react'
import UserData from '../Container/UserData'
import PinCodeSection from '../PinCodeSection/PinCodeSection'
import styling from './Main.module.css'
import { Route, Link, Switch } from 'react-router-dom';


function main() {
    return (
        <div className={styling.completePage}>
            <div className={styling.linkSection}>
                <div>
                    <h2>Hello,</h2>
                    <h3>Welcome to the Needs Assessment adminn control panel</h3>
                </div>
                <div>
                    <button ><h3><Link to="/" >Volunteers</Link></h3></button>

                    <button ><h3><Link to="/pinCodes" >Pin Codes</Link></h3></button>
                </div>
            </div>
            <Switch>
                <Route exact path='/' component={UserData} />
                <Route exact path='/pinCodes' component={PinCodeSection} />
            </Switch>

        </div>
    )
}

export default main;