import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './styles/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import PortfolioItems from './components/PortfolioItems.js';
import Footer from './components/Footer';
import PortfolioDetails from './components/PortfolioDetails';
import PortfolioContextProvider from './containers/portfolioContext';

class App extends Component {
  render() {
    return (
      <body>
        <BrowserRouter>
          <PortfolioContextProvider>
            <Header />
              <Switch>
                <Route exact path="/" component={PortfolioItems} />
                <Route exact path="/:slug" component={PortfolioDetails} />
              </Switch>
            <Footer />
          </PortfolioContextProvider>
        </BrowserRouter>
      </body>
    );
  }
}

export default App;