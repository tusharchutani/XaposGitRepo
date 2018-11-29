import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import marked from "marked";
import { withStyles } from '@material-ui/core/styles';

class MarkdownFile extends Component {

  constructor(){
    super();
    this.state = {
      readMe:''
    }
  }
    componentDidMount(){
      this.getReadMe();
    }

    getReadMe(){
      axios.get(this.props.readmeFileUrl).then((response)=>{
        this.setState({readMe:marked(response.data)});
      })
    }

    componentDidUpdate(prevProps){
      if(prevProps.readmeFileUrl !== this.props.readmeFileUrl){
        this.getReadMe();
      }
    }

  render() {
    const { classes } = this.props;

    return (
            <React.Fragment>
                <Typography gutterBottom variant="h6">READ ME</Typography>
                <Paper id="readmeContainer" className={classes.readMeContainer}>
                  <article className={classes.readMe} dangerouslySetInnerHTML={{__html: this.state.readMe}}></article>
                </Paper>
            </React.Fragment>
    );
  }
}

const styles = theme => ({
  readMe:{
    width:'90%',
    margin:'0 auto'
  }
});

MarkdownFile.propTypes = {
  readmeFileUrl:PropTypes.string.isRequired
}
export default withStyles(styles)(MarkdownFile);