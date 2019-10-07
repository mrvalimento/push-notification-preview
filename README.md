# push-notification-preview

This package is a push notification preview component based on Material-UI.

- Provides a preview for regular push notifications on Android devices (including emoticons!)

Check out this [Live Demo](https://codesandbox.io/s/kind-darkness-46mt7).

### Usage

Your application must have the following packages installed, these are declared as peer dependencies and won't we installed automatically by installing this component:

- @material-ui/core
- @material-ui/icons
- lodash
- emoji-mart
- emoji-regex

The following fonts should also be installed:
- Roboto

Install the actual package:
```sh
$ npm install push-notification-preview
```

Then you just need to import it into your React application:
```javascript
import { AndroidPushNotificationPreview } from "push-notification-preview";

//Use **AndroidPushNotificationPreview** for previewing regular push notifications on Android
<AndroidPushNotificationPreview
  appName="Accessibility"
  time="10/5/19"
  title="Single tap to swipe is on"
  message="Tap here to view details."
/>;
```

### Props & Features

| Props | Mandatory | Default | Description |                       
| ------ | ------ | ------ | ------ | 
| appName | yes |         | App name to be displayed on the notification header |
| time | no | '12:34 PM | Time to be displayed on the notification header |
| title | yes |  | Emphasized text of the notfication preview |
| message | yes |  | Additional information to support the title of the notfication preview |
| color | no | 'black' | Color to differentiate the app icon and app name on the notification preview |

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

### Todos

- Capability to preview both regular and rich push notifications (future)
- Capability to preview push notifications on both Android and iOS devices (with emoticons!) (future)

## License

MIT
