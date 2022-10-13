import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import CoinsInfo from '../components/CoinsInfo';
import store from '../redux/configureStore';

it('Test CoinsInfo', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CoinsInfo />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });