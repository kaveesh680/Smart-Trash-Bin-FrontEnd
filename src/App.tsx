import React from 'react';
import './App.css';
import Client from "./Client";
import './assets/styleSheets/main.scss';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from '@apollo/client/link/context';
import {Provider} from "react-redux";
import {store} from "./store/reducers/RootReducer";

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql'
});

const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? token : '',
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <Client/>
            </Provider>
        </ApolloProvider>
    );
}

export default App;
