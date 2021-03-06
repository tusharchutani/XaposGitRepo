import React, { Component } from 'react';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import { FETCH_REPO_INFO } from '../../constants/action-constants';
import Item from './Item';
import List from '@material-ui/core/List';
import { connect } from "react-redux";
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class Repolist extends Component {
  
  constructor(){
    super();
    this.state = {
      selected:-1
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.isSearching !== this.props.isSearching){
      this.setState({selected:-1});
    }

  }

  updatedRepoArray = () =>{
    let repos;
    if(!this.props.isSearching){
      repos = this.props.fullList;
    }else{
      repos = this.props.filteredList
    }
    return repos;
  }

  onSelect = (key) =>{
    const repoInfo = this.updatedRepoArray()[key];
    this.setState({selected: key});
    this.props.getRepoInfo(repoInfo)
  }


  render() {
    const { classes } = this.props;
    let repos = this.updatedRepoArray();

    return (
    <nav className={classes.drawer}>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}
            anchor="left" >
        <Divider />
        <div className={classes.toolbar} />
        <Divider />
        <List className={classes.list}>
            {repos.map((repo, index)=> (<Item selected={index === this.state.selected} repoIndex={index} onSelect={this.onSelect} key={index} {...repo}/>))}
        </List> 
        </Drawer>
    </nav>);
    
  }
}

const mapStateToProps = (state) =>{
  return {
    fullList: state.repoList.fullList,
    filteredList: state.repoList.filteredList,
    isSearching: state.repoList.isSearching
  }
}

const mapDispatchToProps = dispatch =>{
    return {
      getRepoInfo: (repoInfo) => dispatch({type: FETCH_REPO_INFO, payload:repoInfo})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Repolist));