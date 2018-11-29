import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea  from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import EyeIcon from '@material-ui/icons/RemoveRedEyeRounded';
import ForkIcon from '@material-ui/icons/CallSplit'
import StarIcon from '@material-ui/icons/Star';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class Item extends Component {
  
  formatText = (text)=>{
    const maxCharCount = "75";
    if(text === null){
      return "No description"
    }
    if(text.length > 75){
      text = text.substring(0,maxCharCount) + "...";
    }
      return text;
    
  }

  onSelect = () =>{
    const { repoIndex } = this.props;
    this.props.onSelect(repoIndex);
  }

  render() {
    const { classes,selected } = this.props;
    let cardClassName = selected ? classes.menuItemContainerSelected : classes.menuItemContainer
    return (
      <Card className={cardClassName}>
        <CardActionArea onClick={this.onSelect}>
            <CardContent>
                <Typography variant="title" color="textPrimary"> {this.props.name} </Typography>
                <Typography color="textSecondary"> {this.formatText(this.props.description)} </Typography>
                <div>
                  <Tooltip  title={`${this.props.watcherCount} watchers`}>
                    <Chip 
                    className={classes.margin} 
                    color="primary" 
                    label={this.props.watcherCount}
                     icon={<EyeIcon />} />
                    </Tooltip>
                    <Tooltip title={`${this.props.starsCount} Stars`}>
                      <Chip 
                      className={classes.margin} 
                      color="secondary" 
                      label={this.props.starsCount} icon={<StarIcon />} />
                    </Tooltip>
                    <Tooltip title={`${this.props.forkCount} Forks`}>
                      <Chip 
                      className={classes.margin} 
                      label={this.props.forkCount}
                      icon={<ForkIcon/>}
                      />
                    </Tooltip>
                </div>
            </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

Item.defaultProps = {
  name:'-',
  description:'No description',
  watcherCount:0,
  starsCount:0,
  forkCount:0
}

export default withStyles(styles)(Item);