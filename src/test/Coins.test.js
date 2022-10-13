import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Coins from '../components/Coins';
import store from '../redux/configureStore';

it('Test Coin', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Coins />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
