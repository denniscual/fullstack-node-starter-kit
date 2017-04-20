import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { history } from '../store';
// importing our snippet sections.
import Header from './Presentational/Header';
import Footer from './Presentational/Footer';
// importing our pages
import Home from './Presentational/Pages/Home';
// import Welcome from './Presentational/Pages/Welcome';
// import Profile from './Presentational/Pages/Profile';


class App extends React.Component{
    render(){
        return(
            <ConnectedRouter history={history}>
              <div>
                <Header />
                <Route exact path="/" component={Home}/>
                <Footer />
              </div>
            </ConnectedRouter>
        );
    }
}

export default App;
