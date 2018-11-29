const styles = theme => ({
    repoInfoContainer:{
        flexGrow: 1,
        paddingTop: theme.spacing.unit*10,
        paddingLeft:theme.spacing.unit*7
      },
      margin: {
        margin: theme.spacing.unit,
      },
      gitClone:{
        width:450
      },
      textField:{
        width:'75%'
      },
      tabInfoDivider:{
        marginBottom:theme.spacing.unit*2
      },
    titleDivider:{
        marginTop: theme.spacing.unit
    },
    contributorContainer:{
        minWidth:160
    },
    userProfilePic: {
        margin: 10,
        width: 60,
        height: 60,
    },
    section:{
      paddingBottom: theme.spacing.unit*4
    }
});

export default styles