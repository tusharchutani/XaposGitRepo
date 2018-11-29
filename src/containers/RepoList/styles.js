const sideMenuWidth = 330;

const styles = theme => ({

    drawer: {
      width: sideMenuWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: sideMenuWidth,
    },
    list:{
        width:'100%'
    },
    toolbar: theme.mixins.toolbar,
        
    menuItemContainer:{
      width:330,
      marginBottom: 5
  },
  menuItemContainerSelected:{
      extend:'menuItemContainer',
      backgroundColor:'lightgrey'
  },
  margin: {
      margin: 4
    }
});

export default styles;