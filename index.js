import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import App from './App';
import appStore from './App/appStore';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
function AppComp(){
    return(
        <Provider store={appStore}>
            <App/>
        </Provider>
    )
}
registerRootComponent(AppComp);
