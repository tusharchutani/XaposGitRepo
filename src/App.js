import './App.css';

import React, { Component } from 'react';

import AppBar from './containers/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import RepoInfo from './containers/RepoInfo';
import Repolist from './containers/RepoList';
import { withStyles } from '@material-ui/core/styles';

class App extends Component {
  
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
  const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar />
        <Repolist/>
        <RepoInfo/>
        </div>
        );
  }
}

const styles = theme => ({
  root: {
    display: 'flex'
  }
});




export default withStyles(styles)(App);