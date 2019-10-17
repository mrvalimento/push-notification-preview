import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import _ from "lodash";
import { Grid, IconButton, Button } from "@material-ui/core";
import Notifications from "@material-ui/icons/Notifications";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import DefaultAndroidStyles from "./DefaultAndroidStyles";
import { parseEmojis, checkIfEmojiPresent } from "./EmojiProcessor";

class AndroidRichPushNotificationPreview extends React.PureComponent {
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
      image,
      actionButtons,
      AppIcon
    } = this.props;
    const loadAppIcon = () => (
      <AppIcon className={classes.appIcon} style={{ color: color }} />
    );
    const maxDivWidth = 8.5 * (appName.length + time.length) + 64;
    const emojiInMessage = checkIfEmojiPresent(message);
    const emojiInTitle = checkIfEmojiPresent(title);
    const messageInTooltip = (emojiInTitle && !emojiInMessage && _.isNil(image) && _.isEmpty(actionButtons));

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
                {!expand &&
                  messageInTooltip && (
                    <Grid
                      item
                      style={{
                        maxWidth: `calc(100% - ${maxDivWidth}px)`
                      }}
                    >
                      <span className={classes.notificationPreview}>
                        {message}
                      </span>
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
            <Grid item xs={12}>
              <Grid container alignItems="flex-start" justify="space-between">
                <Grid item className={image && !expand ? classes.notificationTextWithImage : classes.notificationText}>
                  <Grid container alignItems="flex-start">
                    {title && 
                      <Grid
                        item
                        xs={12}
                        className={classes.notificationTitle}
                      >
                        {parseEmojis(title, "google")}
                      </Grid>
                    }
                    {message && (expand || !messageInTooltip) && 
                      <Grid
                        item
                        xs={12}
                        className={classes.notificationMessage}
                      >
                        {parseEmojis(message, "google")}
                      </Grid>
                    }
                  </Grid>
                </Grid>
                {image !== undefined && !expand && (
                  <Grid item className={classes.notificationImagePreviewContainer}>
                    <div
                      className={classes.notificationImagePreview}
                      style={{
                        backgroundImage: `url(${image})`
                      }}
                    />
                  </Grid>
                )}
              </Grid>
            </Grid>
            {image !== undefined && expand && (
              <Grid item xs={12} className={classes.notificationImageContainer}>
                <div
                  className={classes.notificationImage}
                  style={{
                    backgroundImage: `url(${image})`
                  }}
                />
              </Grid>
            )}
            {!_.isEmpty(actionButtons) && expand && (
              <Grid
                item
                xs={12}
                className={classes.notificationActionsContainer}
              >
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-around"
                  spacing={1}
                  style={{
                    whiteSpace: "nowrap"
                  }}
                >
                  <React.Fragment>
                    {_.map(actionButtons, button => (
                      <Button key={`actionButtons-${button}`}>
                        <Grid
                          item
                          className={classes.notificationActions}
                          style={{ color: color }}
                        >
                          {button}
                        </Grid>
                      </Button>
                    ))}
                  </React.Fragment>
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

AndroidRichPushNotificationPreview.propTypes = {
  AppIcon: PropTypes.object,
  appName: PropTypes.string.isRequired,
  color: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string
};

AndroidRichPushNotificationPreview.defaultProps = {
  color: "black",
  time: "12:34 PM",
  AppIcon: Notifications
};

export default withStyles(DefaultAndroidStyles)(
  AndroidRichPushNotificationPreview
);
