const theme = {
  colors: {
    background: '#000000',
    primary: '#FF6A00',
    text: '#FFFFFF',
    secondaryText: '#AAAAAA',
    accent: '#FF9F40',
  },
};

export default theme;



{
  "name": "social-chat-app",
  "version": "1.0.0",
  "main": "App.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "expo": "~53.0.0",
    "react": "18.2.0",
    "react-native": "0.73.0",
    "expo-image-picker": "~15.4.1",
    "axios": "^1.4.0",
    "@react-native-async-storage/async-storage": "~1.17.11",
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/bottom-tabs": "^6.5.7",
    "@react-navigation/native-stack": "^6.9.12",
    "react-native-gesture-handler": "~2.14.0",
    "react-native-safe-area-context": "4.8.2",
    "react-native-screens": "~3.30.0",
    "socket.io-client": "^4.7.4"
  }
}
