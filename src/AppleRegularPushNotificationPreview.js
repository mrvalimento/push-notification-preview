import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid, Button, Fab } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import Notifications from "@material-ui/icons/Notifications";
import DefaultAppleStyles from "./DefaultAppleStyles";

class AppleRegularPushNotificationPreview extends React.Component {
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

    return (
      <Grid
        container
        direction="row"
        className={classes.root}
        justify="flex-end"
      >
        {expand && (
          <Grid item>
            <Fab
              className={classes.closeIcon}
              onClick={() => this.setState({ expand: !expand })}
            >
              <Close />
            </Fab>
          </Grid>
        )}
        <Button
          className={classes.clickableNotification}
          onClick={() => this.setState({ expand: !expand })}
        >
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
                  justify="space-between"
                  spacing={1}
                  style={{
                    whiteSpace: "nowrap"
                  }}
                >
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      justify="flex-start"
                      spacing={1}
                    >
                      <Grid item>{loadAppIcon()}</Grid>
                      <Grid
                        item
                        className={classes.appNameText}
                        style={{ color: color }}
                      >
                        {appName}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item style={{ height: "26px", overflow: "hidden" }}>
                    {expand ? (
                      <MoreHoriz
                        fontSize="large"
                        className={classes.moreIcon}
                      />
                    ) : (
                      time
                    )}
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                className={
                  expand
                    ? classes.notificationTitle
                    : classes.notificationTitlePreview
                }
              >
                {title}
              </Grid>
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
            </Grid>
          </Grid>
        </Button>
      </Grid>
    );
  }
}

AppleRegularPushNotificationPreview.propTypes = {
  appIcon: PropTypes.object,
  appName: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  color: PropTypes.string,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

AppleRegularPushNotificationPreview.defaultProps = {
  color: "black",
  time: "12:34 PM",
  AppIcon: Notifications
};

export default withStyles(DefaultAppleStyles)(
  AppleRegularPushNotificationPreview
);
