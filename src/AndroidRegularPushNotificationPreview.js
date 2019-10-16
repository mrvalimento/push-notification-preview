import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, IconButton } from "@material-ui/core";
import Notifications from "@material-ui/icons/Notifications";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import DefaultAndroidStyles from "./DefaultAndroidStyles";

class AndroidRegularPushNotificationPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    };
  }

  render() {
    const { expand } = this.state;
    const {
      classes,
      appName,
      time,
      message,
      title,
      color,
      AppIcon
    } = this.props;
    const loadAppIcon = () => (
      <AppIcon className={classes.appIcon} style={{ color: color }} />
    );
    const maxDivWidth = 8.5 * (appName.length + time.length) + 64;

    return (
      <Grid container direction="row" className={classes.root}>
        <Grid item xs={12} className={classes.cardNotification}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={1}
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
                <Grid item>{loadAppIcon()}</Grid>
                <Grid
                  item
                  className={classes.appNameText}
                  style={{ color: color }}
                >
                  {appName}
                </Grid>
                {!expand && (
                  <Grid
                    item
                    style={{
                      maxWidth: `calc(100% - ${maxDivWidth}px)`
                    }}
                  >
                    <span className={classes.notificationPreview}>{title || message}</span>
                  </Grid>
                )}
                <Grid item>{time}</Grid>
                <Grid item>
                  <IconButton
                    onClick={() => {
                      this.setState({ expand: !expand });
                    }}
                    size="small"
                  >
                    {expand ? (
                      <KeyboardArrowUp className={classes.controlIcon} />
                    ) : (
                      <KeyboardArrowDown className={classes.controlIcon} />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            {expand && (
              <Grid item xs={12}>
                <Grid container alignItems="flex-start">
                  <Grid item xs={12}>
                    <Grid item xs={12} className={classes.notificationTitle}>
                      {title}
                    </Grid>
                    {message && (
                      <Grid
                        item
                        xs={12}
                        className={
                          expand
                            ? classes.notificationMessage
                            : classes.notificationMessagePreview
                        }
                      >
                        {message}
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
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

AndroidRegularPushNotificationPreview.propTypes = {
  AppIcon: PropTypes.object,
  appName: PropTypes.string.isRequired,
  color: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string
};

AndroidRegularPushNotificationPreview.defaultProps = {
  color: "black",
  time: "12:34 PM",
  AppIcon: Notifications
};

export default withStyles(DefaultAndroidStyles)(
  AndroidRegularPushNotificationPreview
);
