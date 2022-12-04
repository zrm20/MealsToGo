import { Linking, Platform } from 'react-native';

const openMap = async (address, label = 'MyLabel') => {
  const tag = `${Platform.OS === 'ios' ? 'maps' : 'geo'}:0,0?q=`;
  const link = Platform.select({
    ios: 'http://maps.apple.com/maps?daddr=' + address,
    android: 'http://maps.google.com/maps?daddr=' + address
  });

  try {
    const supported = await Linking.canOpenURL(link);

    if (supported) Linking.openURL(link);
  } catch (error) {
    console.log(error);
  }
};

export default openMap;