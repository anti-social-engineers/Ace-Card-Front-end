import React, { Component } from 'react'
import Table from './Table';

export default class AccountContent extends Component {

    render() {
        return (
            <div className="container-fluid" data-aos="fade-up" data-aos-duration="400">
                {/* Page Heading */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800 panel-header-text">Storting overzicht</h1>
                  <a href="#" onClick={this.showModal} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm text-xs"><i className="fas fa-download fa-sm text-white-50" /> Genereer Rapport</a>
                </div>
                <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                    DataTables Example
                    </h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                    <div
                        id="dataTable_wrapper"
                        className="dataTables_wrapper dt-bootstrap4"
                    >
                        <div className="row no-gutters d-flex justify-content-between">
                        <div>
                            <div className="dataTables_length" id="dataTable_length">
                            <label>
                                Show{" "}
                                <select
                                name="dataTable_length"
                                aria-controls="dataTable"
                                className="custom-select custom-select-sm form-control form-control-sm"
                                >
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                                </select>{" "}
                                entries
                            </label>
                            </div>
                        </div>
                        <div>
                            <div id="dataTable_filter" className="dataTables_filter">
                            <label>
                                Search:<input
                                type="search"
                                className="form-control form-control-sm"
                                placeholder
                                aria-controls="dataTable"
                                />
                            </label>
                            </div>
                        </div>
                        </div>
                        <Table/>
                        <div className="row no-gutters d-flex justify-content-between">
                        <div>
                            <div
                            className="dataTables_info"
                            id="dataTable_info"
                            role="status"
                            aria-live="polite"
                            >
                            Showing 31 to 40 of 57 entries
                            </div>
                        </div>
                        <div>
                            <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="dataTable_paginate"
                            >
                            <ul className="pagination">
                                <li
                                className="paginate_button page-item previous"
                                id="dataTable_previous"
                                >
                                <a
                                    href="#"
                                    aria-controls="dataTable"
                                    data-dt-idx={0}
                                    tabIndex={0}
                                    className="page-link"
                                >
                                    Previous
                                </a>
                                </li>
                                <li className="paginate_button page-item ">
                                <a
                                    href="#"
                                    aria-controls="dataTable"
                                    data-dt-idx={1}
                                    tabIndex={0}
                                    className="page-link"
                                >
                                    1
                                </a>
                                </li>
                                <li className="paginate_button page-item ">
                                <a
                                    href="#"
                                    aria-controls="dataTable"
                                    data-dt-idx={2}
                                    tabIndex={0}
                                    className="page-link"
                                >
                                    2
                                </a>
                                </li>
                                <li className="paginate_button page-item ">
                                <a
                                    href="#"
                                    aria-controls="dataTable"
                                    data-dt-idx={3}
                                    tabIndex={0}
                                    className="page-link"
                                >
                                    3
                                </a>
                                </li>
                                <li className="paginate_button page-item active">
                                <a
                                    href="#"
                                    aria-controls="dataTable"
                                    data-dt-idx={4}
                                    tabIndex={0}
                                    className="page-link"
                                >
                                    4
                                </a>
                                </li>
                                <li className="paginate_button page-item ">
                                <a
                                    href="#"
                                    aria-controls="dataTable"
                                    data-dt-idx={5}
                                    tabIndex={0}
                                    className="page-link"
                                >
                                    5
                                </a>
                                </li>
                                <li className="paginate_button page-item ">
                                <a
                                    href="#"
                                    aria-controls="dataTable"
                                    data-dt-idx={6}
                                    tabIndex={0}
                                    className="page-link"
                                >
                                    6
                                </a>
                                </li>
                                <li
                                className="paginate_button page-item next"
                                id="dataTable_next"
                                >
                                <a
                                    href="#"
                                    aria-controls="dataTable"
                                    data-dt-idx={7}
                                    tabIndex={0}
                                    className="page-link"
                                >
                                    Next
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

              </div>
        )
    }
}
