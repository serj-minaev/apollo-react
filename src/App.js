import './App.css';
import {ApolloClient, ApolloLink, InMemoryCache, HttpLink} from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import Month from './components/Month/Month'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import AddTransaction from './components/AddTransaction/AddTransaction'

const httpLink = new HttpLink({ uri: 'https://minaev.pw/works/test-wp/graphql' });

const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            authorization: 'Basic YWRtaW46cTF3MmUzcjQ='
        }
    });
    return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

function App() {
  return (
      <ApolloProvider client={client}>
          <BrowserRouter>
              <div className="App">
                  <Route exact path='/' component={Month} />
                  <Route exact path='/add' component={AddTransaction} />
              </div>
          </BrowserRouter>
      </ApolloProvider>
  );
}

export default App;
