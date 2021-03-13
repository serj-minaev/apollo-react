import React from 'react'
import {Query, useMutation} from 'react-apollo'
import { gql, ApolloProvider } from '@apollo/client';

function AddTransaction() {
    let input;
    const [addTodo] = useMutation(gql`
        mutation MyMutation ($title: String!) {
          __typename
          createPost(input: {title: $title, status: PUBLISH}) {
            post {
              status
              title
            }
          }
        }
    `);

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    addTodo({ variables: { title: input.value } });
                    input.value = "";
                }}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction;