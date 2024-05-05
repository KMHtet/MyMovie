# MyMovie Application - CYBERSPEED - coding assessment

## Project Structrue

The project is structured as follows:

* `index.js` - The main entry point of the application.
* `android/` - The Android project of the application.
* `ios/` - The iOS project of the application.
* `src/` - The source code of the application.
* `src/index.tsx` - The main application entry point.
* `src/app/` - The application components.
* `src/app/components/` - The common components of application (it is used in many screens).
* `src/features/` - The features of application (it contained screens, its view model, its service, and its components).
* `src/navigations/` - The navigations of application (it contained root navigation and navigation helper).
* `src/configs/` - The configs of application (config core networking).
* `src/app/services/` - The services of api ( method configuration, URL communication with networking).
* `src/app/saga/` - The saga of application (it saga communicates with redux and Layer Services).
* `src/store/` - The Store of application (it Store root navigation).

The project visual structure is as follows:

```bash
.
├── android
├── ios
├── src
│   ├── app
│   │   ├── commons
│   │   │   ├── defines # Define the constants of application
│   │   │   └── ... # Other common utilities
│   │   ├── components # Define the common components of application
│   │   ├── features # Define the features of application
│   │   ├── navigation
│   │   │   ├── RootNavigation.tsx # The root navigation of application
│   │   │   ├── ScreenNavigation.tsx # Define the quick route to screen
│   │   │   ├── ScreenRouter.tsx # Define the name of screen
│   │   │   └── ... # Other navigations configuration files
│   │   ├── services
│   │   │   ├── api # Define the api connection of application
│   │   │   └── localStorage # Define the local storage access of application
│   │   └── saga 
│   ├── asset
│   │   ├── images
│   ├── configs
│   ├── rootSaga
│   ├── store
│   ├── utils
│   ├── index.tsx # The main entry point of application
│   ├── MobileApp.tsx # The main component of application
│   └── ... # Other files
├── tsconfig.json # To specify the compiler options for the project
├── package.json # The package.json of application
├── README.md # The README.md of application
└── ... # Other files
```


This is a new [**React Native**](https://reactnative.dev) project, and using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.
