const DefaultAppleStyles = {
  root: {
    fontFamily: "Roboto",
    minWidth: "325px"
  },
  cardNotification: {
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "16px",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.1px",
    textAlign: "left",
    display: "block",
    fontWeight: 400,
    margin: "0px",
    color: "#555555",
  },
  header: {
    display: "flex"
  },
  appIcon: {
    width: "18px",
    height: "18px",
    color: "black"
  },
  appNameText: {
    fontSize: "14px",
    textTransform: "uppercase"
  },
  controlIcon: {
    width: "15px",
    height: "15px"
  },
  notificationText: {
    width: '100%'
  },
  notificationTextWithImage: {
    width: 'calc( 100% - 70px )'
  },
  notificationTitlePreview: {
    fontWeight: 600,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "2px"
  },
  notificationTitle: {
    fontSize: "18px",
    fontWeight: 700,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginTop: "10px",
    marginBottom: "5px"
  },
  notificationMessagePreview: {
    lineHeight: "20px",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 4,
    "-webkit-box-orient": "vertical"
  },
  notificationMessage: {
    lineHeight: "20px",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 6,
    "-webkit-box-orient": "vertical"
  },
  cardNotificationWithImage: {
    backgroundColor: "white",
    borderRadius: "15px 15px 0px 0px",
    padding: "16px",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.1px",
    textAlign: "left",
    display: "block",
    fontWeight: 400,
    margin: "0px",
    color: "#555555",
  },
  notificationActions: {
    listStyleType: "none",
    margin: "6px 0px",
    paddingInlineStart: "0px",
    "& li": {
      padding: "15px",
      marginBottom: "1px",
      backgroundColor: "white"
    },
    "& li:first-child": {
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px"
    },
    "& li:last-child": {
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px"
    }
  },
  notificationActionsButton: {
    padding: "0px",
    textTransform: "capitalize",
    fontWeight: 500,
    fontSize: "16px",
    color: "black"
  },
  notificationImagePreviewContainer: {
    textAlign: "right",
  },
  notificationImagePreview: {
    float: "right",
    height: "60px",
    width: "60px",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "10px"
  },
  notificationImage: {
    width: "100%",
    height: "250px",
    borderRadius: "0px 0px 20px 20px",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  closeIcon: {
    height: "35px",
    width: "35px",
    backgroundColor: "white",
    margin: "5px 15px"
  },
  moreIcon: {
    color: "gray"
  },
  clickableNotification: {
    padding: "0px",
    textTransform: "unset",
    width: "100%"
  }
};
export default DefaultAppleStyles;
