
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import "./css/style.css";
import FormContainer from "./js/components/Examples/FormContainer.jsx";
import ProfilesWrapper from "./js/components/containers/PersonProfile/ProfilesWrapper.Class.jsx";
import { apiUrl } from "./graphcms/apiUrl.js";


const cache = new InMemoryCache();
// const uri = apiUrl;
const client = new ApolloClient({
    //uri: apiUrl,
    uri: 'https://api-euwest.graphcms.com/v1/cjth88vdh5ag801b9s30bow3a/master',
    cache,
    //uri
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