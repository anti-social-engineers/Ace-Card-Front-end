import React, { Component } from 'react'
import BarChart from '../../../Charts/BarChart'
import axios from 'axios';
import config from '../../../../../config/config'

export default class Graph extends Component {

    state = {
        graph_values: [],
        labels: []
    }
    

    componentDidMount() {
        console.log(this.props.header)
        this.getGraphPayments();
    }
    
    getGraphPayments = async () => {
        try {
          const res = await axios.get(config.API_URL+'api/account/graphs/payments', {headers: {Authorization:this.props.header}});
          const graph = res.data.data[0]
          this.setupGraphData(graph);
        } catch (err) {
          console.log(err);
        }
    }

    setupGraphData = (graph) => {
        var data = []
        var now = new Date();
        for (var i = 0; i < 30; i++) {
          now = new Date(now)
          now.setDate(now.getDate() - 1);
          data.push(now.toISOString().substring(0, 10));
        }
        data = data.reverse();
  
        var graph_values = data.map(item => {
          for (var key in graph) {
            if (key === item) return graph[key];
            return 0;
          }
        });

        this.setState({graph_values: Object.values(graph_values), dates:data});
    }


    render() {
        return (
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Uitgaves afgelopen maand</h6>
                <div className="dropdown no-arrow">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                </div>
                <div className="card-body">
                <div className="chart-area">
                    <BarChart ref="chart" data={this.state.graph_values} labels={this.state.dates}/>
                </div>
                </div>
            </div>
        )
    }
}
