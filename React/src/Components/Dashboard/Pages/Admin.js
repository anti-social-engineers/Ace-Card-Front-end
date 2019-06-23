import React, { Component } from 'react'
import axios from 'axios'
import config from '../../../config/config'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import {Route, Redirect} from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import jwt from 'jsonwebtoken'
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';


let rows = [
    
];



function createData(name, email,gender,_date,birth,card) {
    let date = new Date(_date).toLocaleDateString()
    let user = {name, email,gender,date, birth,card}
    rows.push(user)
  }

  
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
    { id: 'naam', numeric: false, disablePadding: true, label: 'naam' },
    { id: 'email', numeric: false, disablePadding: false, label: 'email' },
    { id: 'gender', numeric: false, disablePadding: false, label: 'geslacht' },
    { id: 'birth', numeric: false, disablePadding: false, label: 'geboortedatum' },
    { id: 'date', numeric: false, disablePadding: false, label: 'datum_aanvraag' },
    { id: 'card', numeric: false, disablePadding: false, label: 'card' },
  ];
  
  
  const useHeadStyles = makeStyles(theme => ({
    root: {
      fontFamily: 'Montserrat'
    }
  }));
  
  function EnhancedTableHead(props) {
    const classes = useHeadStyles();
    const { order, orderBy, onRequestSort } = props;
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
  
  const useToolbarStyles = makeStyles(theme => ({
    root: {
      paddingLeft: theme.spacing(3),
      fontFamily: 'Montserrat',
      paddingRight: theme.spacing(1),
    },
    MuiTable: {
      backgroundColor: "black",
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: "#767676",
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    spacer: {
      flex: '1 1 100%',
    },
    actions: {
      color: "#4e73df",
    },
    title: {
      flex: '0 0 auto',
    },
  }));
  
  const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
  
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >

        <div className={classes.spacer} />
        <div className={classes.actions}>
          {numSelected > 0 ? (
            <Tooltip title="Delete">
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Filter list">
              <IconButton aria-label="Filter list">
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </Toolbar>
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
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
 
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    function handleRequestSort(event, property) {
      const isDesc = orderBy === property && order === 'desc';
      setOrder(isDesc ? 'asc' : 'desc');
      setOrderBy(property);
    }
  
    function handleSelectAllClick(event) {
      if (event.target.checked) {
        const newSelecteds = rows.map(n => n.name);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    }
  
    function handleClick(event, name) {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }


      setSelected(newSelected);
    }
  
    function handleChangePage(event, newPage) {
      setPage(newPage);
    }
  
    function handleChangeRowsPerPage(event) {
      setRowsPerPage(+event.target.value);
    }
  
    const isSelected = name => selected.indexOf(name) !== -1;
    
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    var spacerPagination = document.querySelector(".MuiTablePagination-spacer");
    
    const email = selected
    return (
      <div>

      <div className="modal fade" id="link" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Gebruiker linken met een kaart</h6>

            <div className="dropdown no-arrow">
                <a className="dropdown-toggle" role="button" data-dismiss="modal">
                    <i className="fas fa-times fa-sm fa-fw text-gray-400" />
                </a>
            </div>
          </div>
          <div className="modal-body">Om {selected} te linken met een Ace Card moet u een 16 cijferige code invoeren.</div>

          <br></br>

          <Form email={email}/>

        </div>
      </div>
    </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-duration="400">
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800 panel-header-text">Admin Paneel</h1>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Lijst van Ace Card aanvragen
            </h6>
          </div>
          <div className={classes.root}>
          <Paper className={classes.paper}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <div className={classes.tableWrapper}>
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                size={'medium'}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(rows, getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.name);
                      const labelId = `enhanced-table-checkbox-${index}`;
  
                      return (
                        <TableRow
                         data-toggle="modal" data-target="#link"hover
                          onClick={event => handleClick(event, row.email)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.name}
                          selected={isItemSelected}
                        >
                          <TableCell className={classes.tablecell} component="th" id={labelId} scope="row" padding="none">
                            {row.name}
                          </TableCell>
                          <TableCell className={classes.tablecell} align="center">{row.email}</TableCell>
                          <TableCell className={classes.tablecell} align="center">{row.gender}</TableCell>
                          <TableCell className={classes.tablecell} align="center">{row.birth}</TableCell>
                          <TableCell className={classes.tablecell} align="center">{row.date}</TableCell>
                          <TableCell className={classes.tablecell} align="center">{row.card}</TableCell>

                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </div>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                'aria-label': 'Previous Page',
              }}
              nextIconButtonProps={{
                'aria-label': 'Next Page',
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      
        </div>            
      </div>
      </div>


   );
  }

  class Form extends Component{
    state = {
      code : '',
    }

    handleChange = (e) => {
      this.setState({
         [e.target.id]: e.target.value,
         code: this.refs.code.value
      })
    }

    handleSubmit = (e) => {
      const refresh = <Route
       render={props => {
           return <Redirect to=
           {
               {
                   pathname: "/dashboard/admin",
                   state: {
                       from: props.location
                     }
               }
           }/>
       }}/>
      const header = 'Bearer ' + localStorage.getItem('jwt token')
      const card_code = this.state.code
      const email = this.props.email[0]
      const body = {card_code, email}
      
      axios.post(config.API_URL+'api/administration/link', body ,{headers: {Authorization:header}})
      .then(res => 
        console.log(res),
        this.setState({code: ''}, () => refresh)
      )
      .catch(err => console.log(err))


    }
    render(){
      return(
        <div>
            <form>
            <div className="modal-body group pb-5">      
            <input type="number" minLength="15" maxLength="16" id="code" ref="code" onChange={this.handleChange} type="number" required/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Code</label>

            </div>
            <div className="modal-footer d-flex justify-content-between">
            <button className="btn btn-secondary" type="button" data-dismiss="modal">Annuleren</button>
            <button onClick={this.handleSubmit} className="btn btn-secondary" type="submit">Submit</button>
            </div>
            </form>

        </div>
      )
    }
  }


  export class Admin extends Component {
    state = {
        users : [],
      
    }

    componentDidMount = () => {
        const header = 'Bearer ' + localStorage.getItem('jwt token')
        axios.get(config.API_URL+'api/administration/openrequests', {headers: {Authorization:header}})
        .then(res => {
            let arr = []
            res.data.map(user=> 
                arr.push(user)
            )
            this.setState({
              users: []
             })
            arr.forEach(user => {
              createData(user.first_name +' '+ user.surname, user.email,user.gender,user.requested_at,user.date_of_birth,user.card)
            });
            this.setState({
              users: arr
            })
        
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
      var decoded = jwt.verify(localStorage.getItem('jwt token'), config.signature);
      let ad = ""
      if(decoded.permissions != "sysop"){
       ad = <Route
       render={props => {
           return <Redirect to=
           {
               {
                   pathname: "/dashboard",
                   state: {
                       from: props.location
                     }
               }
           }/>
           
       }}/>
      }
        return (
         <div>
             <EnhancedTable/>
             {ad}
         </div>
        )
    }
}

export default Admin