import Header from './components/Header/Header'
import SimpleBottomNavigation from './components/MainNav/MainNav';

import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path='/' component={Trending} exact/>
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />

          </Switch>

        </Container>
      
      </div>

        <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
