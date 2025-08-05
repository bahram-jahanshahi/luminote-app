# Luminote App

## How to run on iOS by XCode

Prerequisites:
```bash
brew install cocoapods
npm install @capacitor/ios
```

Add ios platform to your Ionic project (if not already added):
```bash
npx cap add ios
```
Build the Ionic project, sync with Capacitor, and open in XCode:
```bash
ionic build
npx cap sync      
npx cap open ios
```
