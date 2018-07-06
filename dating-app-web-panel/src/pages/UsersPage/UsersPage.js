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
console.log(`userPageout`);
class UsersPage extends Component {
    constructor(props) {
        super(props);
    console.log(`userPagein`);
    }

    render() {
        return (
            <Query
                query={GET_USERS}
                fetchPolicy="cache-and-network"
            >
                {({ loading, error, data, refetch }) => {
                    console.log(data)
                    if (loading) return "Loading...";
                    if (error) return `Error! ${error.message}`;
                    console.log(data);
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