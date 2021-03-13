import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import {Link} from 'react-router-dom'

const Month = () => (
    <div>
    <Query query={gql`{
      posts {
        nodes {
          title
          amount {
            amount
            category {
              name
            }
          }
        }
      }
    }`}>
        {
            ({loading, error, data}) => {
                if (loading) {
                    return <h2>Loading...</h2>
                } else {
                    return (
                        data.posts.nodes.map((transaction, key) => {
                            return (
                                <div key={key}>
                                    <h2>{transaction.title}</h2>
                                    <h2>{transaction?.amount?.amount}</h2>
                                    <p>{transaction?.amount?.category?.name}</p>
                                </div>
                            )
                        })
                    )
                }
            }
        }
    </Query>
    <Link to={'/add'}>
        Add
    </Link>
    </div>
)

export default Month;