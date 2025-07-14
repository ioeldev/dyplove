import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'src/graphql/typeDefs/**/*.graphql',
    generates: {
        'src/graphql/generated/graphql.ts': {
            plugins: ['typescript', 'typescript-resolvers', 'typescript-mongodb'],
            config: {
                contextType: 'src/index#ApolloContext',
                scalars: {
                    ID: 'ObjectId',
                },
                mappers: {
                    // User: 'mongodb#Document',
                    // Address: 'mongodb#Document',
                    // // Add other types that are stored in MongoDB as needed
                },
                importTypes: ["import { ObjectId } from 'mongodb';"],
                useTypeImports: true,
            },
        },
    },
};

export default config;
