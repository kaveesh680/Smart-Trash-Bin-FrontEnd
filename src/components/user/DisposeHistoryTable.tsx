import React from "react";
import BootstrapTable, {PaginationOptions} from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {useQuery} from "@apollo/client";
import {Get_Dispose_Data} from '../../graphql/Query';
import Loading from "../loading/Loading";

const DisposeHistoryTable: React.FC = () => {
    const {data, error, loading} = useQuery(Get_Dispose_Data, {pollInterval: 500,});

    if (loading) return <Loading/>;
    if (error) return <h1>error</h1>;
    const transactions: any = [];
    data.disposeDetails.map((transaction: any, index: number) => {
        transactions.push({
            id: index + 1,
            transactionId: transaction._id,
            date: transaction.date,
            numberOfBottles: transaction.no_of_bottles,
            binId: transaction.bin_id,
            points: transaction.no_of_bottles * 5
        })
    })

    const columns = [
        {dataField: 'id', text: '#'},
        {dataField: 'transactionId', text: 'ID'},
        {dataField: 'date', text: 'Date'},
        {dataField: 'numberOfBottles', text: 'No of Bottles'},
        {dataField: 'binId', text: 'Bin ID'},
        {dataField: 'points', text: 'No of Points'}
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
            text: 'All', value: transactions.length
        }]
    };


    return (
        <BootstrapTable
            bootstrap4
            keyField='id'
            data={transactions}
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

export default DisposeHistoryTable;