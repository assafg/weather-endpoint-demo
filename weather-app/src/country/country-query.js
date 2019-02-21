import gql from 'graphql-tag';

export default gql`
    query GetCountry($code: String) {
        getCountry(code: $code) {
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