import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';
import config from '../../../../config/config'

export default class Table extends Component {
    state = {
        deposits: [],
        hasMoreItems: true,
        count: 0,
        nextHref: null
    };

    componentDidMount() {
        this.count = 0;
        // console.log("inside table");
        // console.log(this.props.data);
        // const header = 'Bearer ' + localStorage.getItem('jwt token')
        // var url = config.API_URL + '/api/account/deposits/asc';
        // axios.get(url, {headers: {Authorization:header}})
        //     .then((resp, err) => {
        //         this.count = resp.data.deposits.length;
        //         console.log("current length", resp.data.deposits.length);
        //         this.setState({count: resp.data.deposits.length})
        //     });
    }
    
    loadItems = (page) => {
        // console.log(this.count++);
        console.log(page);
        // var url = config.API_URL + '/api/account/deposits/asc';
        // if(this.state.nextHref) {
        //     url = this.state.nextHref;
        // }
        // const header = 'Bearer ' + localStorage.getItem('jwt token')
        // axios.get(url, {headers: {Authorization:header}})
        //     .then((resp, err) => {
        //         // console.log("axios resp");
        //         if(resp.data) {
        //             // resp.data.deposits.map((deposit) => {
        //             //     console.log(deposit);
        //             // })
        //             var deposits = this.state.deposits;
        //             console.log("current amount of deps: ", deposits.length);
        //             resp.data.deposits.map((deposit) => {
        //                 deposits.push(deposit);
        //             });

        //             // this.props.updateCount(resp.data.deposits.length);

        //             if(resp.data.next_cursor) {
        //                 this.setState({
        //                     deposits: deposits,
        //                     nextHref: resp.next_cursor
        //                 });
        //             } else {
        //                 this.setState({
        //                     hasMoreItems: false
        //                 });
        //             }
        //         }
        //     });
    }

    // updateCount = () => {
    //     this.props.upd
    // }
    

    render() {
        const loader = <div className="loader">Loading ...</div>;

        var items = [];
        this.state.deposits.map((deposit, i) => {
            items.push(
                <tr>
                    <td className="sorting_1">{deposit.id}</td>
                    <td>€{deposit.amount}</td>
                    <td>{deposit.time}</td>
                    <td>21</td>
                    <td>2009/02/27</td>
                    <td>$103,500</td>
                </tr>
            );
        });

        return (
            <div className="row no-gutters">
            <div className="col-sm-12">
                <table
                className="table table-bordered dataTable"
                id="dataTable"
                width="100%"
                cellSpacing={0}
                style={{ width: "100%" }}
                >
                <thead>
                    <tr role="row">
                    <th
                        className="sorting_asc"
                        tabIndex={0}
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 265 }}
                    >
                        Stort ID
                    </th>
                    <th
                        className="sorting"
                        tabIndex={0}
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 419 }}
                    >
                        Bedrag
                    </th>
                    <th
                        className="sorting"
                        tabIndex={0}
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 197 }}
                    >
                        Datum
                    </th>
                    <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="dataTable"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 99 }}
                    >
                        Age
                    </th>
                    <th
                        className="sorting"
                        tabIndex={0}
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 184 }}
                    >
                        Start date
                    </th>
                    <th
                        className="sorting"
                        tabIndex={0}
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 168 }}
                    >
                        Salary
                    </th>
                    </tr>
                </thead>
                    <InfiniteScroll
                        pageStart={0}
                        element={'tbody'}
                        loadMore={this.loadItems}
                        hasMore={this.state.hasMoreItems}
                        loader={loader}>

                        {items}
                    </InfiniteScroll>
                </table>
            </div>
            </div>
            
        )
    }
}
