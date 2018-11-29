import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';
import {Pie} from 'react-chartjs-2';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

let Section = (props) => {
  const { classes } = props;
  return (
    <section className={classes.section}>
      <Typography gutterBottom component="h4" variant="title"> {props.title} </Typography>
      {props.children}
    </section>)
};

Section = withStyles(styles)(Section);

Section.propTypes = {
  title: PropTypes.string.isRequired
}



class GeneralInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentView:0
    }
  }
  renderLanguageSection = () =>{
    
    const {classes, data} = this.props;

    //get random colours for the chart
    var dynamicColors = function() {
      var r = Math.floor(Math.random() * 200);
      var g = Math.floor(Math.random() * 200);
      var b = Math.floor(Math.random() * 255);
      return "rgb(" + r + "," + g + "," + b + ")";
    };

    let randomColors = [];
    for(let i = 0; i < Object.keys(data.languages).length; i++){
      randomColors.push(dynamicColors());
    }

    let dataForPieChart = {
      labels: Object.keys(data.languages),
      datasets:[{
        data:Object.values(data.languages),
        backgroundColor:randomColors
      }]
    };
    return (
      <React.Fragment>
        <Section title="Languages">
        {Object.keys(data.languages).map((language, index)=>(
          <Button 
          key={index}
          size="small"
          variant="contained"
          color="primary" 
          className={classes.margin}
          to="/open-collective">
            {language}
          </Button>
      ))}
      </Section>

        <Section title="Language breakdown">
          <Pie responsive= {true} maintainAspectRatio={false} height={60} data={dataForPieChart}/>
        </Section>
        </React.Fragment>
    );
  }

  viewChange = (event, value) =>{
    this.setState({currentView:value});
  }

  copyURL = () =>{
    const { data } = this.props
    navigator.clipboard.writeText(data.cloneURL);
  }

  render() {
    const { classes, data } = this.props;
    
    return (
        <div>
              <Section title="Description">
                <Typography color="textPrimary" variant="body1"> {data.description} </Typography>
              </Section>
              <Section title="Clone">
                <Card className={classes.gitClone}>
                    <CardContent>
                      <Typography component="h3" variant="title" color="textPrimary"> Clone with HTTPS </Typography>
                      <Typography color="textPrimary"> Use Git or checkout with SVN using the web URL. </Typography>
                      <TextField
                        id="standard-disabled"
                        color="textPrimary"
                        value={data.cloneURL}
                        className={classes.textField}
                        margin="normal"
                      />
                      <Tooltip title="clickToCopyLink">
                        <IconButton aria-label="Copy" onClick={this.copyURL} className={classes.margin}>
                          <FileCopyIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Typography color="textSecondary" variant="caption" gutterBottom> * click the copy icon to copy the the clone URL </Typography>
                  </CardContent>
                  </Card>
                </Section>
                {this.renderLanguageSection()}
                </div>
    );
  }
}


GeneralInfo.propTypes ={
  data: PropTypes.shape({
    languages: PropTypes.object.isRequired,
    cloneURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
}

export default withStyles(styles)(GeneralInfo);