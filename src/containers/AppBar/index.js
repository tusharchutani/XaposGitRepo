import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import InputBase from '@material-ui/core/InputBase';
import MaterialAppBar from '@material-ui/core/AppBar';
import { SEARCH_REPOS_FETCH } from '../../constants/action-constants'
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class AppBar extends Component {
  
  
  onSearch = (e) =>{
    this.props.search(e.target.value);
  }
  render() {
  const { classes } = this.props;

    
    return (
        <MaterialAppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Facebook's Git Repo
            </Typography>

            { this.props.isLoading &&
            <div className={classes.loadingContainer}>
              <CircularProgress color="secondary" className={classes.circularProgress}/>
            </div>}
            <div>            
              
            </div>

            <div className={classes.grow} />


            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={this.onSearch}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </MaterialAppBar>
        );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.loading
  };
}
const mapDispatchToProps = (dispatch) => {
  return{
    search: (query)=>dispatch({type:SEARCH_REPOS_FETCH, payload: query})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AppBar));