# push-notification-preview

This package is a push notification preview component based on Material-UI.
The layouts are based on iOS13 and Android Pie.

- Provides a preview for regular push notifications on Android devices (including emoticons!)
- Message and title fields accept string with emojis in unicode and translates them to its Android / iOS counterparts

Check out this [Live Demo](https://codesandbox.io/s/kind-darkness-46mt7).

### Usage

Installing this package would also install the following dependencies:

- @material-ui/core
- @material-ui/icons
- lodash
- emoji-mart
- emoji-regex
- webfontloader

Install the actual package:
```sh
$ npm install push-notification-preview
```

Then you just need to import it into your React application:
```javascript
import { AndroidPushNotificationPreview, ApplePushNotificationPreview, PushNotificationPreview } from "push-notification-preview";

//Use **AndroidPushNotificationPreview** for previewing regular push notifications on Android
<AndroidPushNotificationPreview
  appName="Accessibility"
  time="10/5/19"
  title="Single tap to swipe is on"
  message="Tap here to view details."
/>
//Use **ApplePushNotificationPreview** for previewing regular push notifications on IOS
<ApplePushNotificationPreview
  appName="Accessibility"
  time="10/5/19"
  title="Single tap to swipe is on"
  message="Tap here to view details."
/>
//Use **PushNotificationPreview** for previewing both Android and IOS push notifications
<PushNotificationPreview
  platform="apple" // or "android"
  appName="Accessibility"
  time="10/5/19"
  title="Single tap to swipe is on"
  message="Tap here to view details."
/>;
```

### Props & Features

| Props | Mandatory | Default | Description |                       
| ------ | ------ | ------ | ------ | 
| platform | yes |  | Applicable only to PushNotificationPreview class |
| actionButtons | no |  | An array containing action button labels to be displayed |
| appName | yes |         | App name to be displayed on the notification header |
| color | no | 'black' | Color to differentiate the app icon and app name on the notification preview |
| image | no |  | A URL of the image attached to the notification |
| message | yes |  | Additional information to support the title of the notfication preview |
| time | no | '12:34 PM | Time to be displayed on the notification header |
| title | yes |  | Emphasized text of the notfication preview |

### Styling

If you want to override the styles, you can use withStyles:
```javascript
import AndroidPushNotificationPreview from './AndroidPushNotificationPreview';
import {withStyles} from '@material-ui/styles';
 
const styles = {
  root: {
    textAlign: 'center'
  }
}
 
const StyledAndroidPushNotificationPreview = withStyles(styles)(AndroidPushNotificationPreview);
```

## License

MIT
