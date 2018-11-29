import { sideMenuWidth } from  '../../constants/stylingConstants';

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
});

export default styles;