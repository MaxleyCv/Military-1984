import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const SafeRouter = ({
    component: Component,
    ...rest
}) => {
    let logged = localStorage.getItem('isLogged');

    return (
        <Route
        {...rest} render= { () => {
            if(logged) {
                console.log(logged);
                return <Component />;
            }
            else{
                return <Redirect to="/login" />;
            }
        }
        }
        />
    )
}

export default SafeRouter
