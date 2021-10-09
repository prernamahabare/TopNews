import './App.css';
//react class based component.
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscontainer from './components/Newscontainer'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pagesize = '6';
  apikey = process.env.REACT_APP_TOPNEWS_APIKEY

 state={
  progress :0
 }

  setprogress=(progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height = {3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/"><Newscontainer setprogress={this.setprogress} apikey={this.apikey}  key="general" pagesize={this.pagesize} country='in' category='general' />
            </Route>
            <Route exact path="/business"><Newscontainer setprogress={this.setprogress} apikey={this.apikey}  key="business" pagesize={this.pagesize} country='in' category='business' />
            </Route>
            <Route exact path="/entertainment"><Newscontainer setprogress={this.setprogress} apikey={this.apikey}  key="entertainment" pagesize={this.pagesize} country='in' category='entertainment' />
            </Route>
            <Route exact path="/general"><Newscontainer setprogress={this.setprogress} apikey={this.apikey}  key="general" pagesize={this.pagesize} country='in' category='general' />
            </Route>
            <Route exact path="/health"><Newscontainer setprogress={this.setprogress} apikey={this.apikey}  key="health" pagesize={this.pagesize} country='in' category='health' />
            </Route>
            <Route exact path="/science"><Newscontainer setprogress={this.setprogress} apikey={this.apikey}  key="science" pagesize={this.pagesize} country='in' category='science' />
            </Route>
            <Route exact path="/sports"><Newscontainer setprogress={this.setprogress} apikey={this.apikey}  key="sports" pagesize={this.pagesize} country='in' category='sports' />
            </Route>
            <Route exact path="/technology"><Newscontainer setprogress={this.setprogress} apikey={this.apikey}  key="technology" pagesize={this.pagesize} country='in' category='technology' />
            </Route>
          </Switch>
        </Router >
      </div >
    )
  }
}