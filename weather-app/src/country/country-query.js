import gql from 'graphql-tag';

export default gql`
    query GetCountry($code: String) {
        getCountry(code: $code) {
            id
            name
            code
            capital
            weatherInCapital {
                temp
                main
                description
                icon
            }
            borders {
                id
                name
                code
                capital
                weatherInCapital {
                    temp
                    main
                    description
                    icon
                }
            }
        }
    }
`;
