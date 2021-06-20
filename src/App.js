import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home, About, Settings } from './views';
import { FirestoreProvider } from './context';

export default function App() {
  return (
    <FirestoreProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/settings" component={Settings} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </FirestoreProvider>
  );
}
