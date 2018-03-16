import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom'

import MainLayout from './view/MainLayout'
import NotFound from './view/NotFound'
import PageTransition from './view/PageTransition'
import ComplaintDetail from './view/complaint_detail/ComplaintDetail';
import MyComplaint from './view/my_complaint/MyComplaint';
import AboutUs from './view/about_us/AboutUs';
import Suggestion from './view/suggestion/Suggestion';
import Evaluate from './view/evaluate/Evaluate';

import './App.css';

class App extends Component {
  render({location}) {
    // https://github.com/reactjs/react-transition-group/issues/37
    // https://reacttraining.com/react-router/web/example/animated-transitions
    // transition needs location on the switch props
    return (
        <PageTransition>
          <div className="pages-inner">
            <Switch location={location}>
              <Route exact path="/" component={MainLayout} />
              {/*<Route path="/agreement" component={Agreement} />*/}
              <Route path="/complaint-detail" component={ComplaintDetail} />
                <Route path="/my-complaint" component={MyComplaint} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/suggestion" component={Suggestion} />
                <Route path="/evaluate" component={Evaluate} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </PageTransition>
    );
  }
}

export default withRouter(App);
