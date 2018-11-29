const userProfilePicHeightWidth = 70;
const styles = theme => ({
    repoInfoContainer:{
        flexGrow: 1,
        overflowX:'hidden',
        paddingTop: theme.spacing.unit*10,
        paddingBottom: theme.spacing.unit*2,
        paddingLeft:theme.spacing.unit*7
      },
      margin: {
        margin: theme.spacing.unit,
      },
      repoTitle:{
        marginBottom:0
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
    userProfilePic: {
        margin: theme.spacing.unit*2,
        width: userProfilePicHeightWidth,
        height: userProfilePicHeightWidth,
    },
    section:{
      paddingBottom: theme.spacing.unit*4
    }
});

export default styles