import React from "react";
import {IUser} from "../../types/types";
import BootstrapTable, {PaginationOptions} from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Button} from "react-bootstrap";
import {ApolloError, FetchResult, useMutation, useQuery} from "@apollo/client";
import {Get_Bin_Details} from "../../graphql/Query";
import Loading from "../loading/Loading";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import {Set_Bin_Empty} from "../../graphql/Mutation";
import {toast} from "react-toastify";

const TrashBinTable: React.FC = () => {

    const currentUser: IUser | null = useSelector((state: RootState) => state.statusReducer.user)
    const {data, error, loading} = useQuery(Get_Bin_Details, {
        variables: {area: currentUser?.area},
        pollInterval: 500,
    });
    const [setBinEmpty] = useMutation(Set_Bin_Empty);
    if (loading) return <Loading/>;
    if (error) return <h1>{`${error}hghg`}</h1>;

    const handleOnClick = (binId: string) => {
        toast.info('🙄 Loading...');
        setBinEmpty({
            variables: {
                id: binId
            }
        }).then((res: FetchResult) => {
            toast.success('😍 bin cleaned')
        }).catch((err: ApolloError) => {
            toast.error('😪 error');
        });
    }

    const trashBins: any = [];
    data.binDetails.map((trashBin: any, index: number) => {
        trashBins.push({
            id: index + 1,
            trashBinId: trashBin._id,
            location: trashBin.area,
            status: <Button variant={trashBin.status ? "primary" : "secondary"}
                            disabled={!trashBin.status} onClick={() => handleOnClick(trashBin._id)}>Collect</Button>
        })
    })

    const columns = [
        {dataField: 'id', text: '#'},
        {dataField: 'trashBinId', text: 'TrashBin ID'},
        {dataField: 'location', text: 'Location'},
        {dataField: 'status', text: 'status'}
    ];

    const customTotal = (from: number, to: number, size: number) => (
        <span className="react-bootstrap-table-pagination-total text-secondary">
            Showing {from} to {to} of {size} Results
        </span>
    );

    const options: PaginationOptions = {
        paginationSize: 4,
        pageStartIndex: 1,
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        }, {
            text: 'All', value: trashBins.length
        }]
    };

    return (
        <BootstrapTable
            bootstrap4
            keyField='id'
            data={trashBins}
            columns={columns}
            wrapperClasses='table-responsive overflow-x'
            classes='custom-table item-table'
            rowClasses='text-wrap'
            headerClasses='header-class'
            pagination={paginationFactory(options)}
            defaultSortDirection="asc"
        />
    )
}

export default TrashBinTable;