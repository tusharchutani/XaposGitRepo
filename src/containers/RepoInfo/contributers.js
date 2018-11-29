import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import OpenIcon from '@material-ui/icons/OpenInNew';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class Contrubters extends Component {

 constructor(){
    super();
    this.state = {
      currentView:0
    }
  }


  viewChange = (event, value) =>{
    this.setState({currentView:value});
  }

  render() {
    const { classes, contributors } = this.props;
    
    return (
        <div>
            <Grid container spacing={24}>
                {contributors.map((contributor, index)=>(
                    <Grid key={index} item xs={12} md={4}>
                       <Card>
                           <CardHeader
                            avatar={
                                <Avatar className={classes.userProfilePic} alt={contributor.username} src={contributor.avatar_url}/>
                            }
                           action={
                            <IconButton target="_blank" href={contributor.html_url}>
                              <OpenIcon />
                            </IconButton>
                            }
                            title={contributor.login}
                            subheader={`${contributor.contributions} contributions`}
                           />
                       </Card>
                    </Grid>
                ))}
            </Grid>          
        </div>
    );
  }
}


Contrubters.propTypes = {
    contributers: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        profileURL: PropTypes.string.isRequired,
        contributions: PropTypes.number.isRequired
    }))
}

export default withStyles(styles)(Contrubters);