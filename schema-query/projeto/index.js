
const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')  //LAE - Vai ler o arquivo index.js por padrão

//LAE - movido para a pasta ./schema
// const typeDefs = gql `
//   scalar Date
//...
//   `

//Movido para os arquivos da pasta ./resolvers
// const resolvers = {
// }

const schemaPath = './schema/index.graphql'

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})