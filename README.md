
# react-native-prog-voice

## Getting started

`$ npm install react-native-prog-voice --save`

### Mostly automatic installation

`$ react-native link react-native-prog-voice`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-prog-voice` and add `RNProgVoice.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNProgVoice.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNProgVoicePackage;` to the imports at the top of the file
  - Add `new RNProgVoicePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-prog-voice'
  	project(':react-native-prog-voice').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-prog-voice/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-prog-voice')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNProgVoice.sln` in `node_modules/react-native-prog-voice/windows/RNProgVoice.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Com.Reactlibrary.RNProgVoice;` to the usings at the top of the file
  - Add `new RNProgVoicePackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNProgVoice from 'react-native-prog-voice';

// TODO: What to do with the module?
RNProgVoice;
```
  