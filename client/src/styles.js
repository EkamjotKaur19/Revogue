const getStyles = (theme) => ({
    navbarDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    appBar: {
      display: 'flex',
      marginRight: theme.spacing(2),
      backgroundColor: '#fff'
    }, 
    hero: {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://picsum.photos/1000/1000')`, 
      height: '500px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      fontSize: '4rem'
    },
    itemsContainer: {
      paddingTop: theme.spacing(3)
    },
    itemTitle: {
      fontWeight: 500,
      paddingBottom: theme.spacing(3)
    },
    card: {
      maxWidth: "90%"
    },
    media: {
      height: 240
    },
    cardActions: {
      display: 'flex',
      margin: '0 10px',
      justifyContent: 'space-between'
    },
    buyer: {
      display: 'flex'
    },
    review: {
      display: 'flex',
      alignItems: 'right'
    },
  
    /* Footer styles */
    rootFooter: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    mainFooter: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footerIcons: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '3px'
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor: theme.palette.grey[600]
    }
  }
);

export default getStyles;