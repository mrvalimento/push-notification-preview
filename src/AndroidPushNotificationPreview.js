import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import AndroidRegularPushNotificationPreview from "./AndroidRegularPushNotificationPreview";
import AndroidRichPushNotificationPreview from "./AndroidRichPushNotificationPreview";
import DefaultAndroidStyles from "./DefaultAndroidStyles";
import { checkIfEmojiPresent } from "./EmojiProcessor";

class AndroidPushNotificationPreview extends React.Component {
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
        {!richPush && <AndroidRegularPushNotificationPreview {...this.props} />}
        {richPush && <AndroidRichPushNotificationPreview {...this.props} />}
      </React.Fragment>
    );
  }
}

AndroidPushNotificationPreview.propTypes = {
  actionButtons: PropTypes.arrayOf(PropTypes.string),
  appName: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string
};

export default withStyles(DefaultAndroidStyles)(AndroidPushNotificationPreview);
