
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import "./css/style.css";
import ProfilesWrapper from "./js/components/containers/PersonProfile/ProfilesWrapper.jsx";
import apiUrl from "./graphcms/apiUrl.js";


const cache = new InMemoryCache();
const client = new ApolloClient({
    uri: apiUrl,
    cache,
});

// wrapping the whole app with Apollo client
const apolloWrapp = LastComp => {
    return(
        <ApolloProvider client={client}>
            <LastComp />
        </ApolloProvider>
    );
};


const profile = document.getElementById("profile");

ReactDOM.render(apolloWrapp(ProfilesWrapper), profile);
// ReactDOM.render(<ProfilesWrapper />, profile);

module.hot.accept();