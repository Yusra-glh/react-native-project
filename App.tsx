import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './src/navigation/AppStack';
import {PaperProvider} from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <AppStack/>
        </NavigationContainer>
      </PaperProvider>
      </Provider>
  );
};
export default App;
