import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, IconButton } from "@material-ui/core";
import Notifications from "@material-ui/icons/Notifications";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import DefaultAndroidStyles from "./DefaultAndroidStyles";
import { parseEmojis } from "./EmojiProcessor";

class AndroidPushNotificationPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
  }

  render() {
    const { collapse } = this.state;
    const { classes, appName, time, message, title, color } = this.props;
    const maxDivWidth = 8.5 * (appName.length + time.length) + 64;

    return (
      <Grid container direction="row" className={classes.root}>
        <Grid item xs={12} className={classes.cardNotification}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={12} className={classes.header}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justify="flex-start"
                spacing={1}
                style={{
                  whiteSpace: "nowrap"
                }}
              >
                <Grid item>
                  <Notifications
                    className={classes.appIcon}
                    style={{ color: color }}
                  />
                </Grid>
                <Grid
                  item
                  className={classes.appNameText}
                  style={{ color: color }}
                >
                  {appName}
                </Grid>
                {!collapse && (
                  <Grid
                    item
                    style={{
                      maxWidth: `calc(100% - ${maxDivWidth}px)`
                    }}
                  >
                    <span className={classes.notificationPreview}>{title}</span>
                  </Grid>
                )}
                <Grid item>{time}</Grid>
                <Grid item>
                  <IconButton
                    onClick={() => {
                      this.setState({ collapse: !collapse });
                    }}
                    size="small"
                  >
                    {collapse ? (
                      <KeyboardArrowUp className={classes.controlIcon} />
                    ) : (
                      <KeyboardArrowDown className={classes.controlIcon} />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            {collapse && (
              <React.Fragment>
                <Grid
                  item
                  xs={12}
                  className={classes.notificationTitle}
                  style={{ paddingTop: "10px" }}
                >
                  {parseEmojis(title, "google")}
                </Grid>
                <Grid item xs={12} className={classes.notificationMessage}>
                  {parseEmojis(message, "google")}
                </Grid>
              </React.Fragment>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.cardFooter}>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            spacing={3}
          >
            <Grid item>Notification settings</Grid>
            <Grid item>Clear</Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

AndroidPushNotificationPreview.propTypes = {
  appName: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  color: PropTypes.string,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

AndroidPushNotificationPreview.defaultProps = {
  color: "black",
  time: "12:34 PM"
};

export default withStyles(DefaultAndroidStyles)(AndroidPushNotificationPreview);
