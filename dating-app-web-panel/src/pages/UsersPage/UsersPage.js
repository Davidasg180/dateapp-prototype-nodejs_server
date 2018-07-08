import React, { Component } from 'react';
import SimpleTable from '../../components/SimpleTable';
import gql from "graphql-tag";
import { Query } from "react-apollo";

var Fields = [`_id`, `email`, `password`];

const GET_USERS = gql`
  {
    users {
        ${Fields.join(',')}
    }
  }
`;
class UsersPage extends Component {
    render() {
        return (
            <Query
                query={GET_USERS}
                fetchPolicy="cache-and-network"
            >
                {({ loading, error, data, refetch }) => {
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;
                    return (
                        <div>
                            <h1>Users</h1>
                            <button onClick={() => refetch()}>Refetch!</button>
                            <SimpleTable columns={Fields} data={data.users} />
                        </div>
                    );
                }}
            </Query>
        );
    }
}

export default UsersPage;