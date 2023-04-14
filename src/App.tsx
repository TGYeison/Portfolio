import  {Fragment} from 'react';

/**
 * Component
 */
import Header from './components/organisms/header/header.organim';

/**
 * Pages
 */
import Home from './pages/home';

/**
 * Styles
 */
import './styles/styles.scss';


function App() {
  return (
    <Fragment>
      <Header></Header>
      <main className="main__content">
        <Home />
      </main>
    </Fragment>
  );
}

export default App;
