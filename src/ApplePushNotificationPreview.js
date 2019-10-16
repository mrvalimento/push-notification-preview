import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import AppleRegularPushNotificationPreview from "./AppleRegularPushNotificationPreview";
import AppleRichPushNotificationPreview from "./AppleRichPushNotificationPreview";
import DefaultAppleStyles from "./DefaultAppleStyles";
import { checkIfEmojiPresent } from "./EmojiProcessor";

class ApplePushNotificationPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
  }

  render() {
    const { message, title, image, actionButtons } = this.props;
    const emojiInTitle = checkIfEmojiPresent(title);
    const emojiInMessage = checkIfEmojiPresent(message);
    const richPush =
      emojiInTitle ||
      emojiInMessage ||
      image !== undefined ||
      actionButtons !== undefined;

    return (
      <React.Fragment>
        {!richPush && <AppleRegularPushNotificationPreview {...this.props} />}
        {richPush && <AppleRichPushNotificationPreview {...this.props} />}
      </React.Fragment>
    );
  }
}

ApplePushNotificationPreview.propTypes = {
  actionButtons: PropTypes.arrayOf(PropTypes.string),
  appName: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string
};

export default withStyles(DefaultAppleStyles)(ApplePushNotificationPreview);
