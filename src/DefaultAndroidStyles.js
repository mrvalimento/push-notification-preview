const DefaultAndroidStyles = {
  root: {
    color: "#555555",
    fontFamily: "Roboto",
    minWidth: "325px"
  },
  cardNotification: {
    backgroundColor: "white",
    borderRadius: "20px 20px 0px 0px",
    padding: "16px 24px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    letterSpacing: "0.1px",
    margin: "0px",
    display: "block",
    textAlign: "left"
  },
  header: {
    fontSize: "14px",
    display: "flex"
  },
  appIcon: {
    width: "18px",
    height: "18px",
    color: "black"
  },
  controlIcon: {
    width: "15px",
    height: "15px",    
    color: "#555555",
  },
  notificationText: {
    width: '100%'
  },
  notificationTextWithImage: {
    width: 'calc( 100% - 70px )'
  },
  notificationTitle: {
    fontWeight: 600,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    marginBottom: "5px",
    overflow: "hidden"
  },
  notificationPreview: {
    overflow: "hidden",
    display: "block",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  notificationMessage: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical"
  },
  notificationMessagePreview: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical"
  },
  notificationActionsContainer: {
    marginTop: "10px"
  },
  notificationActions: {
    textTransform: "capitalize",
    fontWeight: 800,
    fontSize: "15px"
  },
  notificationImagePreview: {
    float: "right",
    height: "60px",
    width: "60px",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  notificationImage: {
    width: "100%",
    height: "175px",
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  cardFooter: {
    backgroundColor: "white",
    borderRadius: "0px 0px 20px 20px",
    padding: "16px 24px",
    fontWeight: 600,
    color: "gray",
    fontSize: "14px",
    marginTop: "2px"
  }
};
export default DefaultAndroidStyles;
