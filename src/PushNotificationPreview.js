import React from "react";
import PropTypes from "prop-types";
import AndroidPushNotificationPreview from "./AndroidPushNotificationPreview";
import ApplePushNotificationPreview from "./ApplePushNotificationPreview";

class PushNotificationPreview extends React.Component {
  render() {
    const { platform } = this.props;

    return (
      <React.Fragment>
        {platform==='android' &&
            <AndroidPushNotificationPreview
            {...this.props}
            />
        }
        {platform==='apple' &&
            <ApplePushNotificationPreview
            {...this.props}
            />
        }
      </React.Fragment>
    );
  }
}

PushNotificationPreview.propTypes = {
  actionButtons: PropTypes.arrayOf(PropTypes.string),
  appName: PropTypes.string.isRequired,
  color: PropTypes.string,
  image: PropTypes.string,
  message: PropTypes.string,
  platform: PropTypes.string.isRequired,
  time: PropTypes.string,
  title: PropTypes.string,
};

export default PushNotificationPreview;
