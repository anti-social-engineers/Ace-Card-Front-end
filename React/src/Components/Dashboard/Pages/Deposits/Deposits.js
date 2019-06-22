import React, { Component } from 'react'
import axios from 'axios'
import config from '../../../../config/config'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import jwt from 'jsonwebtoken'
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import { relativeTimeRounding } from 'moment';


let rows = [
    
];
  
function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
}
  
function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}
  
function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}
  
const headRows = [
    { id: 'storting', numeric: false, disablePadding: true, label: 'Storting ID' },
    { id: 'bedrag', numeric: true, disablePadding: false, label: 'Bedrag' },
    { id: 'datum', numeric: false, disablePadding: false, label: 'Datum' }
];
  
  
const useHeadStyles = makeStyles(theme => ({
    root: {
      fontFamily: 'Montserrat'
    }
}));
  
function EnhancedTableHead(props) {
    const classes = useHeadStyles();
    const { order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = property => event => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          
          {headRows.map(row => (
            <TableCell
              className={classes.root}
              key={row.id}
              align={'center'}
              padding={row.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === row.id ? order : false}
            >
              <TableSortLabel
                className={classes.root}
                active={orderBy === row.id}
                direction={order}
                onClick={createSortHandler(row.id)}
              >
                {row.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      fontFamily: 'Montserrat'
    },
    tablecell: {
      fontFamily: 'Montserrat',
      textAlign: 'center'
    },
    paper: {
      width: '100%',
    },
    table: {
      minWidth: 750,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
    checkBox: {
      color: "#4e73df"
    },
    spacerNoMoreRows: {
      position: "relative"
    }
  }));
  
function EnhancedTable(props) {
    const rows = props.rows;
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
  
    function handleRequestSort(event, property) {
      const isDesc = orderBy === property && order === 'desc';
      setOrder(isDesc ? 'asc' : 'desc');
      setOrderBy(property);
    }
  
  function handleLoad() {
      if (props.next) {
        props.loadMore(props.next);
      }
    }
  
    return (
          <div className={classes.root}>

          <Paper className={classes.paper}>
            <div className={classes.tableWrapper}>

              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                size={'medium'}
              >
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(rows, getSorting(order, orderBy))
                    .map((row, index) => {
                      return (
                        <TableRow
                          tabIndex={-1}
                          key={row.name}
                        >
                          <TableCell className={classes.tablecell}>
                            {row.id}
                          </TableCell>
                          <TableCell className={classes.tablecell} align="center">€ {row.amount}</TableCell>
                          <TableCell className={classes.tablecell} align="center">{new Date(row.time).toLocaleString()}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </div>
          <div className="row pagination-area no-gutters d-flex justify-content-between">
            <div className="py-4 px-4">
              {props.next ? <button onClick={handleLoad} className="text-xs font-weight-bold mb-1 text-link">
                Meer laden...
              </button> : <span class="text-gray-600 small">Alle stortingen geladen.</span>}
              </div>
              <div className="py-4 px-4">
                <span className="text-gray-600 small">Aantal stortingen: {rows.length}</span>
              </div>
            </div>
          </Paper>
        </div>           
   );
  }


export class Deposits extends Component {
  state = {
    rows: [],
    next: ""
  }
  
  header = 'Bearer ' + localStorage.getItem('jwt token');

  componentDidMount = () => {
      axios.get(config.API_URL+'api/account/deposits/desc', {headers: {Authorization:this.header}})
        .then(res => {
            this.setState({rows: res.data.deposits, next: res.data.next_cursor}, () => console.log(this.state.rows));
        }).catch(err => {
            console.log(err)
        })
  }

  loadMore = (next) => {
    axios.get(config.API_URL + 'api/account/deposits/desc/' + next, { headers: { Authorization: this.header } })
      .then(res => {
        var current_rows = this.state.rows;
        current_rows.push(...res.data.deposits);
        this.setState({ rows: current_rows, next: res.data.next_cursor}, () => console.log(this.state.rows));
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
      return (
        <div className="container-fluid" data-aos="fade-up" data-aos-duration="400">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800 panel-header-text">Storting overzicht</h1>
        </div>
        <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Lijst van uw stortingen
              </h6>
            </div>
            { !this.state.rows && <p className="px-4 pt-3 text-gray-600 small">U heeft nog geen transacties!</p>}
            {this.state.rows && <EnhancedTable rows={this.state.rows} next={this.state.next} loadMore={this.loadMore} />}
            </div>
        </div>
      )
  }
}

export default Deposits