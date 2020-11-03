import './assets/styles/global.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Page from './components/Page'
import Navbar from './components/Navbar'
import Browse from './pages/Browse'
import Search from './pages/Search'
import Watch from './pages/Watch'

function App() {
  const routes = [
    { path: '/', Component: Browse },
    { path: '/watch/:id', Component: Watch },
    { path: '/search/:query', Component: Search }
  ]

  return (
    <BrowserRouter>
      <Navbar />
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} exact>
          {({ match }) => (
            <Page render={match}>
              <Component />
            </Page>
          )}
        </Route>
      ))}
    </BrowserRouter>
  );
}

export default App;
