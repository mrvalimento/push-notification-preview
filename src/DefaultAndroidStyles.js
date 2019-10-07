const DefaultAndroidStyles = {
  root: {
    minWidth: "450px",
    color: "#555555",    
    fontFamily: "Roboto",
  },
  header: {
    fontSize: "14px",
    display: "flex"
  },
  cardNotification: {
    backgroundColor: "white",
    borderRadius: "20px 20px 0px 0px",
    padding: "16px 24px"
  },
  cardFooter: {
    backgroundColor: "white",
    borderRadius: "0px 0px 20px 20px",
    padding: "16px 24px",
    fontWeight: 600,
    color: "gray",
    fontSize: "14px",
    marginTop: "1px"
  },
  container: {},
  appIcon: {
    width: "18px",
    height: "18px",
    color: "black"
  },
  controlIcon: {
    width: "15px",
    height: "15px"
  },
  notificationPreview: {
    display: "block",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    margin: "0px",
    overflow: "hidden",
    textAlign: "left"
  },
  notificationTitle: {
    color: "#111111",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 500,
    letterSpacing: "0.1px",
    display: "block",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    margin: "0px",
    overflow: "hidden",
    textAlign: "left"
  },
  notificationMessage: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    letterSpacing: "0.1px",
    margin: "0px",
    overflow: "hidden",
    textAlign: "left",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical"
  },
  actionButtonContainer: {
    backgroundColor: "#eeeeee",
    padding: "16px 8px"
  },
  actionButton: {
    color: "#636363",
    fontSize: "15px",
    textTransform: "capitalize"
  }
};
export default DefaultAndroidStyles;