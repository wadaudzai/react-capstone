import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import store from '../redux/configureStore';

it('Test Navbar', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
