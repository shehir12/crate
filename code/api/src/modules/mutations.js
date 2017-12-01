// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from './user/fields/mutations'
import * as product from './product/fields/mutations'
import * as crate from './crate/fields/mutations'
import * as subscription from './subscription/fields/mutations'

// Mutation
const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: 'API Mutations [Create, Update, Delete]',

    fields: {
        ...user,
        ...product,
        ...crate,
        ...subscription
    }
})

export default mutation