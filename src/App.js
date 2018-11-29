import './App.css';

import React, { Component } from 'react';

import AppBar from './containers/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { FETCH_REPOS } from './constants/action-constants';
import RepoInfo from './containers/RepoInfo';
import Repolist from './containers/RepoList';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';

export class App extends Component {
  
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  componentDidMount(){
    this.props.getRepoList();
  }

  render() {
  const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar id="appBar" />
        <Repolist id="repoList"/>
        <RepoInfo id="repoInfo"/>
        </div>
        );
  }
}

const styles = theme => ({
  root: {
    display: 'flex'
  }
});

const mapDispatchToProps = dispatch =>{
  return {
    getRepoList: () => dispatch({type: FETCH_REPOS}),
  }
}
const mapStateToProps = () =>{

}


export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(App));