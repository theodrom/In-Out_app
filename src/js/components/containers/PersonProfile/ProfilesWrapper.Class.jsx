import React, { Component, useEffect, useState } from 'react';
import Profile from './Profile.jsx';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo'; 

const GET_PERSONS = gql`
query {
    persons {
      id
      firstname
      lastname
      email
      mobile
      speciality
      images {
        fileName
        id
        url
      }
    }
  }
`;

const ProfileWrapper = () => (
     <Query asyncMode query={GET_PERSONS}>
          {({loading, error, data}) => {
            console.log('data');
              console.log(data);
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error :(</div>;  
            console.log(data.persons[0].firstname);

        return (
        <div className="profile-list-wrapper">
           {data.persons.map(person => (
                    <Profile
                        key={person.id}
                        fnamevalue = {person.firstname}
                        lnamevalue = {person.lastname}
                        specvalue = {person.speciality}
                        emailvalue = {person.email}
                        mobilevalue = {person.mobile[0]}
                        imageurl = {person.images[0].url}>
                    </Profile>
                ))
            }
        </div>
        );
    }}
    </Query>
);

    
export default ProfileWrapper;



