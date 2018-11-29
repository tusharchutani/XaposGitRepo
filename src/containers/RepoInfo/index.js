import React, { Component } from 'react';

import CodeIcon from '@material-ui/icons/Code';
import Contrubters from './contributers';
import { Divider } from '@material-ui/core';
import GeneralInfo from './generalInfo';
import InfoIcon from '@material-ui/icons/Info';
import MarkDownFile from '../../components/markDownFile';
import PeopleIcon from '@material-ui/icons/People';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { isEmpty } from 'lodash';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class RepoInfo extends Component {

 constructor(){
    super();
    this.state = {
      currentView:0
    }
  }
  componentDidMount(){
  }

  viewChange = (event, value) =>{
    this.setState({currentView:value});
  }
  renderNoSelectedRepo(){

  }

  renderRepoInfo(data){
    const { classes } = this.props;
    const { currentView } = this.state;
    return (         
    <div className="repoInfo">          
    <Typography gutterBottom color="textPrimary" component="h1" variant="display1"> {data.fullName} </Typography>
      <a href={data.htmlURL}>{data.htmlURL}</a>
    <Divider className={classes.titleDivider}/>

    <Tabs centered value={currentView} onChange={this.viewChange}>
      <Tab icon={<InfoIcon/>} />
      <Tab icon={<CodeIcon/>} />
      <Tab icon={<PeopleIcon/>}/>
    </Tabs>
    <Divider className={classes.tabInfoDivider}/>
    {currentView === 0 && <GeneralInfo data={data}/>}
    {currentView === 1 && data.readmeFileUrl !== '' && <MarkDownFile readmeFileUrl={data.readMeURL}/>}
    {currentView === 2 && <Contrubters contributors={data.contributors}/>}
    </div>);
  }

  render() {
    const { classes, isSearching } = this.props;
    let data;
    if(isSearching){
      data = this.props.filteredData;
    }else{
      data = this.props.data;
    }
    
    return (
        <main className={classes.repoInfoContainer}>
          {isEmpty(data) && <Typography gutterBottom color="textSecondary" component="h1" variant="display1"> No Repo Selected </Typography>}
          {!isEmpty(data) && this.renderRepoInfo(data)}
        </main>
    );
  }
}

const mapStateToProps = (state) =>{

  return {
    data: state.repoInfo
  }
}


export default connect(mapStateToProps)(withStyles(styles)(RepoInfo));