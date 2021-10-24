import {gql} from "@apollo/client";

export const Get_Dispose_Data = gql`
    query Query {
        disposeDetails {
            _id
            user_id
            date
            no_of_bottles
            bin_id
        }
    }
`;

export const Get_Bin_Details = gql`
    query Query($area: String!) {
        binDetails(area: $area) {
            _id
            area
            status
            bottle_count
        }
    }
`;