import React, { Component } from 'react'

export default class Table extends Component {

    componentDidMount() {
        console.log(this.props.data);
    }
    

    render() {
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
                        Name
                    </th>
                    <th
                        className="sorting"
                        tabIndex={0}
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 419 }}
                    >
                        Position
                    </th>
                    <th
                        className="sorting"
                        tabIndex={0}
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 197 }}
                    >
                        Office
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
                <tfoot>
                    <tr>
                    <th rowSpan={1} colSpan={1}>
                        Name
                    </th>
                    <th rowSpan={1} colSpan={1}>
                        Position
                    </th>
                    <th rowSpan={1} colSpan={1}>
                        Office
                    </th>
                    <th rowSpan={1} colSpan={1}>
                        Age
                    </th>
                    <th rowSpan={1} colSpan={1}>
                        Start date
                    </th>
                    <th rowSpan={1} colSpan={1}>
                        Salary
                    </th>
                    </tr>
                </tfoot>
                <tbody>
                    <tr role="row" className="odd">
                    <td className="sorting_1">Jennifer Chang</td>
                    <td>Regional Director</td>
                    <td>Singapore</td>
                    <td>28</td>
                    <td>2010/11/14</td>
                    <td>$357,650</td>
                    </tr>
                    <tr role="row" className="even">
                    <td className="sorting_1">Jonas Alexander</td>
                    <td>Developer</td>
                    <td>San Francisco</td>
                    <td>30</td>
                    <td>2010/07/14</td>
                    <td>$86,500</td>
                    </tr>
                    <tr role="row" className="odd">
                    <td className="sorting_1">Lael Greer</td>
                    <td>Systems Administrator</td>
                    <td>London</td>
                    <td>21</td>
                    <td>2009/02/27</td>
                    <td>$103,500</td>
                    </tr>
                    <tr role="row" className="even">
                    <td className="sorting_1">Martena Mccray</td>
                    <td>Post-Sales support</td>
                    <td>Edinburgh</td>
                    <td>46</td>
                    <td>2011/03/09</td>
                    <td>$324,050</td>
                    </tr>
                    <tr role="row" className="odd">
                    <td className="sorting_1">Michael Bruce</td>
                    <td>Javascript Developer</td>
                    <td>Singapore</td>
                    <td>29</td>
                    <td>2011/06/27</td>
                    <td>$183,000</td>
                    </tr>
                    <tr role="row" className="even">
                    <td className="sorting_1">Michael Silva</td>
                    <td>Marketing Designer</td>
                    <td>London</td>
                    <td>66</td>
                    <td>2012/11/27</td>
                    <td>$198,500</td>
                    </tr>
                    <tr role="row" className="odd">
                    <td className="sorting_1">Michelle House</td>
                    <td>Integration Specialist</td>
                    <td>Sidney</td>
                    <td>37</td>
                    <td>2011/06/02</td>
                    <td>$95,400</td>
                    </tr>
                    <tr role="row" className="even">
                    <td className="sorting_1">Olivia Liang</td>
                    <td>Support Engineer</td>
                    <td>Singapore</td>
                    <td>64</td>
                    <td>2011/02/03</td>
                    <td>$234,500</td>
                    </tr>
                    <tr role="row" className="odd">
                    <td className="sorting_1">Paul Byrd</td>
                    <td>Chief Financial Officer (CFO)</td>
                    <td>New York</td>
                    <td>64</td>
                    <td>2010/06/09</td>
                    <td>$725,000</td>
                    </tr>
                    <tr role="row" className="even">
                    <td className="sorting_1">Prescott Bartlett</td>
                    <td>Technical Author</td>
                    <td>London</td>
                    <td>27</td>
                    <td>2011/05/07</td>
                    <td>$145,000</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
            
        )
    }
}
