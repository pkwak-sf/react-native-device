var { NativeModules, Dimensions, Platform } = require('react-native');
var DeviceUtil = NativeModules.DeviceUtil;

// Forked. Only use isIpad/isiPhone. Case added to compile on android.
class Device {
  constructor() {
    this.width = Dimensions.get('window').width;
    this.height = Dimensions.get('window').height;
    if ( Platform.OS === 'ios') {
      this.model = DeviceUtil.model;
      this.deviceName = DeviceUtil.name;
      this.systemName = DeviceUtil.systemName;
      this.systemVersion = DeviceUtil.systemVersion;
      this.deviceVersion = DeviceUtil.deviceVersion;
    } else {
      this.model = "non-ios";
      this.deviceName = "non-ios";
      this.systemName = "non-ios";
      this.systemVersion = "non-ios";
      this.deviceVersion = "non-ios";
    }
  }

  isIpad() {
    return this.model.indexOf('iPad') >= 0;
  }

  isIphone() {
    return this.model.indexOf('iPhone') >= 0;
  }
}

module.exports = new Device();
