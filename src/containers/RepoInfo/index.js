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
import Tooltip from '@material-ui/core/Tooltip';
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

  viewChange = (event, value) =>{
    this.setState({currentView:value});
  }
  renderRepoInfo(data){
    const { classes } = this.props;
    const { currentView } = this.state;
    return (         
    <div className="repoInfo">          
    <Typography gutterBottom color="textPrimary" variant="h4"> {data.fullName} </Typography>
      <a href={data.htmlURL}>{data.htmlURL}</a>
    <Divider className={classes.titleDivider}/>

    <Tabs centered value={currentView} onChange={this.viewChange}>
      <Tooltip title="General Info">
        <Tab icon={<InfoIcon/>} />
      </Tooltip>
      <Tooltip title="Read me">
        <Tab icon={<CodeIcon/>} />
      </Tooltip>
      <Tooltip title="Contributors">
        <Tab icon={<PeopleIcon/>}/>
      </Tooltip>
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
          {isEmpty(data) && <Typography gutterBottom color="textSecondary" variant="h3"> No Repo Selected </Typography>}
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