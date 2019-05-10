import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { configureStore } from '../store';
import { Layout } from '../modules/layout';
import { People, PeopleInfo } from '../modules/people';

import './reset.css';
import './global.scss';

const store = configureStore();

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/people/:id" exact component={PeopleInfo} />
          <Route path="/" exact component={People} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);
