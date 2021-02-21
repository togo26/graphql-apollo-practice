import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo';

import Detail from '../routes/Detail';
import Home from '../routes/Home';

const App = () => {
  return (
    <ApolloProvider client={client} >
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/:id' component={Detail} />
      </Router>
    </ApolloProvider>
  );
};

export default App;
