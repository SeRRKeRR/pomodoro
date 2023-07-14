import { hot } from 'react-hot-loader/root';
import * as React from "react";
import './variables.global.scss';
import './main.global.scss';
import { Layout } from './shared';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { StatisticBox } from './shared/StatisticBox';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './store/reduser';
import { Provider } from 'react-redux';
import { TimerFunction } from './shared/TimerFunction';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))

function AppComponent() {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Provider store={store}>
      {mounted && (<BrowserRouter>
        <Layout>
          <Header/>
          <TimerFunction/>
          <Routes>
            <Route path='/pomodoro' element={<Content/>}/>
            <Route path='/statistics' element={<StatisticBox/>}/>
            <Route path='*' element={<Navigate to='/pomodoro'/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>)}
    </Provider>
  )
}

export const App = hot(() => <AppComponent />);

