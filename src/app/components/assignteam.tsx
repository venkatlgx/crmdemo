import { makeStyles } from '@material-ui/core';
import { Message, MoreVert } from '@mui/icons-material';
import { Delete, Person, Star, Visibility } from '@mui/icons-material';
import DoneIcon from '@mui/icons-material/Done';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Menu } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import React, { useState } from 'react';
const useStyles = makeStyles(() => ({
  menuPaper: {
    backgroundColor: 'rgba(255, 250, 234, 1)',
  },
  tableRow: {
    height: 30,
  },
  tableCell: {
    padding: '0px 16px',
  },
}));

function BasicMenu({ onClick }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    onClick();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div style={{ padding: 5 }}>
      <MoreVert onClick={handleClick}></MoreVert>
      <Menu
        classes={{ paper: classes.menuPaper }}
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem style={{}}>
          <ListItemIcon>
            <Person fontSize='small'></Person>
          </ListItemIcon>
          <ListItemText>View Profile</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Message fontSize='small'></Message>
          </ListItemIcon>
          <ListItemText>Message</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Star fontSize='small'></Star>
          </ListItemIcon>
          <ListItemText>Assign Brands</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Visibility fontSize='small'></Visibility>
          </ListItemIcon>
          <ListItemText>View Events</ListItemText>
        </MenuItem>
        <Divider
          style={{
            height: '0.5px',
            backgroundColor: 'transparent',
            border: '1px dashed rgba(0, 0, 0, 0.2)', // Change color as needed
            margin: '2px 0', // Adjust the margin as needed
          }}
        />
        <MenuItem>
          <ListItemIcon>
            <Delete fontSize='small' style={{ color: 'red' }}></Delete>
          </ListItemIcon>
          <ListItemText style={{ color: 'red' }}>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}

interface Data {
  id: number;
  uid: number;
  fullname: string;
  events: number;
  vertical: string;
  role: string;
  team: string;
  city: string;
  status: number;
}

function createData(
  id: number,
  uid: number,
  fullname: string,
  events: number,
  vertical: string,
  role: string,
  team: string,
  city: string,
  status: number
): Data {
  return {
    id,
    uid,
    fullname,
    events,
    vertical,
    role,
    team,
    city,
    status,
  };
}

const rows = [
  createData(
    0,
    1,
    'Ramesh',
    'Bengalaru Team',
    8,
    'Ground Sales',
    'Sales',
    'Bengauru',
    1
  ),
  createData(
    1,
    2,
    'Amit',
    'Bengalaru Team',
    8,
    'Ground Sales',
    'Sales',
    'Bengauru',
    3
  ),
  createData(
    2,
    3,
    null,
    'Bengalaru Team',
    8,
    'Ground Sales',
    'Sales',
    'Bengauru',
    2
  ),
  createData(
    3,
    4,
    'Paka',
    'Bengalaru Team',
    8,
    'Ground Sales',
    'Sales',
    'Bengauru',
    3
  ),
  createData(
    20,
    1,
    'Ramesh',
    'Bengalaru Team',
    8,
    'Ground Sales',
    'Sales',
    'Bengauru',
    1
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: number;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 1,
    numeric: true,
    disablePadding: false,
    label: 'No',
  },
  {
    id: 2,
    numeric: true,
    disablePadding: false,
    label: 'Team Name',
  },
  {
    id: 3,
    numeric: true,
    disablePadding: false,
    label: 'Team Owner',
  },
  {
    id: 4,
    numeric: true,
    disablePadding: false,
    label: 'Members',
  },
  {
    id: 5,
    numeric: true,
    disablePadding: false,
    label: 'Vertical',
  },
  {
    id: 6,
    numeric: true,
    disablePadding: false,
    label: 'Department',
  },
  {
    id: 7,
    numeric: true,
    disablePadding: false,
    label: 'City',
  },
  ,
  {
    id: 8,
    numeric: true,
    disablePadding: false,
    label: '',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  const classes = useStyles();
  return (
    <TableHead sx={{}} style={{}}>
      <TableRow style={{}} className={classes.tableRow}>
        {headCells.map((headCell, index) => (
          <TableCell
            className={classes.tableCell}
            key={headCell.id}
            align='left'
            padding='normal'
            style={{ width: index == 0 ? 100 : 'auto' }}
            sortDirection={false}
          >
            <TableSortLabel
              active={false}
              direction='asc'
              style={{ marginLeft: index == 0 ? 40 : null ,color:"rgba(18, 18, 18, 1)",fontSize:14,      fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'}}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function AssignTeam({ onsave }) {
  const [type, setType] = useState(null);
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('uid');
  const [hoveredRow, setHoveredRow] = React.useState<number | null>(null);
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [totalpages, settotalpages] = useState(2);
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );
  const handleSelectChange = (event) => {
    const totalPage = (rows.length / event.target.value).toFixed(1)[0];
    settotalpages(Number(totalPage) + 1);

    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = useState(1);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const saveUserInfo = () => {
    setStatus(2);
  };

  return (
    <div style={{ padding: 12, flex: 1, height: '100%', overflow: 'scroll' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p
            style={{
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.6)',
              fontFamily:"Mulish",fontWeight:'normal'
            }}
          >
            Assign
          </p>
          <p
            style={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 14,
       
              marginLeft: '5px',
              marginRight: '5px',
              fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
            }}
          >
            Araving Krishnan
          </p>
          <p
            style={{
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.6)',
              fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
            }}
          >
            as
          </p>
          <div style={{ display: 'flex', marginLeft: '20px' }}>
            <button
              onClick={() => setType('member')}
              style={{
                borderWidth: 1,
                height: 40,
                width: 200,
                backgroundColor:
                  type == 'member' ? 'rgba(0, 148, 255, 0.1)' : null,
                borderRadius: 8,
                borderColor:
                  type == 'member'
                    ? 'rgba(0, 148, 255, 1)'
                    : 'rgba(180, 180, 180, 1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <DoneIcon
                style={{
                  color: 'black',
                  fontSize: 15,
                  padding: 2,
                  backgroundColor: 'white',
                  borderRadius: 30,
                  opacity: type == 'member' ? 1 : 0,
                }}
              ></DoneIcon>
              <p
                style={{
                  color: 'white',
                  fontSize: 14,
                 
                  textTransform: 'capitalize',
                  marginLeft: type == 'member' ? '10px' : null,
                  fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
                }}
              >
                User
              </p>
            </button>
            <button
              onClick={() => setType('owner')}
              style={{
                borderWidth: 1,
                height: 40,
                width: 200,
                borderColor:
                  type == 'owner'
                    ? 'rgba(0, 148, 255, 1)'
                    : 'rgba(180, 180, 180, 1)',
                borderRadius: 8,
                marginLeft: '20px',
                backgroundColor:
                  type == 'owner' ? 'rgba(0, 148, 255, 0.1)' : null,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <DoneIcon
                style={{
                  color: 'black',
                  fontSize: 15,
                  padding: 2,
                  backgroundColor: 'white',
                  borderRadius: 30,
                  opacity: type == 'owner' ? 1 : 0,
                }}
              ></DoneIcon>
              <p
                style={{
                  color: 'white',
                  fontSize: 14,
              
                  textTransform: 'capitalize',
                  marginLeft: type == 'owner' ? '10px' : null,
                  fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
                }}
              >
                Admin
              </p>
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              borderWidth: 1,
              borderColor: 'rgba(80, 81, 91, 1)',
              backgroundColor: 'rgba(36, 38, 50, 1)',
            }}
          >
            <FilterAltIcon
              style={{ fontSize: 20, color: 'rgba(255, 255, 255, 1)' }}
            ></FilterAltIcon>
          </button>
          <input
            placeholder='Search Team'
            style={{
              height: 40,
              width: 250,
              backgroundColor: 'rgba(36, 38, 50, 1)',
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: 50,
              fontSize: 14,
       
              marginLeft: '20px',
              color: 'white',
              fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
            }}
            type='text'
            id='search'
            name='search'
          ></input>
          <SearchIcon
            style={{ color: 'white', position: 'absolute', right: '30px' }}
          ></SearchIcon>
        </div>
      </div>
      <Box sx={{ width: '100%' }}>
        <Paper
          sx={{
            width: '100%',
            mb: 2,
            background: 'rgba(255, 250, 234, 1)',
            height: '450px',
            marginTop: '10px',
            overflow: 'scroll',
            borderRadius: 2,
            padding: 2,
            paddingTop: 0,
          }}
        >
          <TableContainer>
            <Table
              style={{
                minWidth: 50,
                borderCollapse: 'separate',
                borderSpacing: '0px 12px',
              }}
              aria-labelledby='tableTitle'
              size='small'
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody
                sx={{
                  '& .MuiTableRow-root th:first-child': {
                    borderTopLeftRadius: '10px',
                    borderBottomLeftRadius: '10px',
                  },
                  '& .MuiTableRow-root th:last-child': {
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px',
                  },
                }}
              >
                {visibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      onMouseEnter={() => setHoveredRow(row.id)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={classes.tableRow}
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role='checkbox'
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      style={{
                        backgroundColor:
                          hoveredRow === row.id
                            ? 'rgba(252, 250, 240, 1)'
                            : 'white',
                      }}
                    >
                      {/* <TableCell style={{borderTopLeftRadius:30,borderBottomLeftRadius:30}}   className={classes.tableCell} padding="checkbox">
                      <Checkbox
                      
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell> */}
                      <TableCell
                        style={{
                          borderTopLeftRadius: 30,
                          borderBottomLeftRadius: 30,
                          borderTopWidth: 1,
                          borderBottomWidth: 1,
                          borderLeftWidth: 1,
                          borderColor:
                            hoveredRow === row.id
                              ? 'rgba(255, 176, 162, 1)'
                              : 'white',
                        }}
                        className={classes.tableCell}
                        align='center'
                      >
                     <p style={{color:"rgba(4, 4, 4, 1)",fontWeight:'normal',fontSize:16,fontFamily:"Mulish",}}>                         {row.uid} </p>

                      </TableCell>
                      <TableCell
                        style={{
                          borderTopWidth: 1,
                          borderBottomWidth: 1,
                          borderColor:
                            hoveredRow === row.id
                              ? 'rgba(255, 176, 162, 1)'
                              : 'white',
                        }}
                        align='left'
                        className={classes.tableCell}
                      >
                                 <p style={{color:"rgba(4, 4, 4, 1)",fontWeight:'bold',fontSize:16,fontFamily:"Mulish"}}>        {row.events}</p>
                  
                      </TableCell>

                      <TableCell
                        style={{
                          borderTopWidth: 1,
                          borderBottomWidth: 1,
                          borderColor:
                            hoveredRow === row.id
                              ? 'rgba(255, 176, 162, 1)'
                              : 'white',
                        }}
                        className={classes.tableCell}
                        align='center'
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          {row.fullname ? (
                            <img
                              style={{
                                height: 30,
                                width: 30,
                                borderRadius: 30,
                              }}
                              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU'
                              alt='User Avatar'
                            />
                          ) : null}

<p style={{color:"rgba(4, 4, 4, 1)",fontWeight:'bold',fontSize:16,fontFamily:"Mulish",marginLeft:"10px"}}>  
                            {row.fullname ? row.fullname : '-'}
                   </p>
                        </div>
                      </TableCell>
                      <TableCell
                        style={{
                          borderTopWidth: 1,
                          borderBottomWidth: 1,
                          borderColor:
                            hoveredRow === row.id
                              ? 'rgba(255, 176, 162, 1)'
                              : 'white',
                        }}
                        className={classes.tableCell}
                        align='left'
                      >
                        <select style={{ borderWidth: 0,color:"rgba(4, 4, 4, 1)",fontWeight:'normal',fontSize:16,fontFamily:"Mulish" }} id='rpp'>
                          <option style={{ fontSize: 12 }} value='8'>
                            8
                          </option>
                          <option value='10'>12</option>
                          <option value='15'>16</option>
                          <option value='20'>20</option>
                        </select>
                      </TableCell>
                      <TableCell
                        style={{
                          borderTopWidth: 1,
                          borderBottomWidth: 1,
                          borderColor:
                            hoveredRow === row.id
                              ? 'rgba(255, 176, 162, 1)'
                              : 'white',
                        }}
                        className={classes.tableCell}
                        align='left'
                      >
                                      <p style={{color:"rgba(4, 4, 4, 1)",fontWeight:'bold',fontSize:16,fontFamily:"Mulish"}}>       {row.role} </p>
                  
                      </TableCell>
                      <TableCell
                        style={{
                          borderTopWidth: 1,
                          borderBottomWidth: 1,
                          borderColor:
                            hoveredRow === row.id
                              ? 'rgba(255, 176, 162, 1)'
                              : 'white',
                        }}
                        className={classes.tableCell}
                        align='left'
                      >
                                 <p style={{color:"rgba(4, 4, 4, 1)",fontWeight:'bold',fontSize:16,fontFamily:"Mulish"}}>                         {row.team} </p>

                      </TableCell>
                      <TableCell
                        style={{
                          borderTopWidth: 1,
                          borderBottomWidth: 1,
                          borderColor:
                            hoveredRow === row.id
                              ? 'rgba(255, 176, 162, 1)'
                              : 'white',
                        }}
                        className={classes.tableCell}
                        align='left'
                      >
                                 <p style={{color:"rgba(4, 4, 4, 1)",fontWeight:'bold',fontSize:16,fontFamily:"Mulish"}}>            {row.city} </p>
             
                      </TableCell>
                      <TableCell
                        className={classes.tableCell}
                        align='left'
                        style={{
                          borderTopRightRadius: 30,
                          borderBottomRightRadius: 30,
                          borderTopWidth: 1,
                          borderBottomWidth: 1,
                          borderRightWidth: 1,
                          borderColor:
                            hoveredRow === row.id
                              ? 'rgba(255, 176, 162, 1)'
                              : 'white',
                          padding: 5,
                        }}
                      >
                        <button
                          style={{
                            height: 36,
                            width: 112,
                            borderRadius: 36,
                            borderWidth: 1,
                            borderColor: 'rgba(180, 180, 180, 1)',
                            backgroundColor:
                              row.status == 2 ? 'rgba(18, 18, 18, 1)' : null,
                            opacity: row.status == 3 ? 0.3 : 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {row.status == 2 ? (
                            <DoneIcon
                              style={{
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                                height: 14,
                                width: 14,
                                borderRadius: 14,
                                marginRight: '5px',
                              }}
                            ></DoneIcon>
                          ) : null}

                          <p
                            style={{
                              color:
                                row.status == 2
                                  ? 'rgba(255, 255, 255, 1)'
                                  : 'rgba(28, 30, 39, 1)',
                               fontWeight:'bold',fontSize:16,fontFamily:"Mulish",fontStyle:"italic"
                            }}
                          >
                            Assign
                          </p>
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
      <hr
        style={{
          borderTop: '1px dashed white',
          marginTop: '10px',
          marginBottom: '20px',
        }}
      ></hr>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p
          style={{
            fontSize: 14,
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: 'bold',
  fontFamily:"Mulish"
          }}
        >
          Total: 06 Teams
        </p>
        <div style={{ display: 'flex' }}>
          <Button
            onClick={onsave}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              color: 'rgba(56, 56, 56, 1)',
              borderRadius: 58,
              fontSize: 16,
              fontWeight: 'bold',
            
              textTransform: 'none',
              width:"250px",height:"50px",

fontFamily:"Mulish",fontStyle:"italic"
            }}
          >
            Save and add another
          </Button>
          <Button
            onClick={onsave}
            style={{
              backgroundColor: 'rgba(0, 148, 255, 1)',
              color: 'rgba(255, 255, 255, 1)',
              borderRadius: 58,
              fontSize: 16,
              fontWeight: 'bold',
        
              textTransform: 'none',
            
              marginLeft: '20px',
              width:"250px",height:"50px",fontStyle:"italic",fontFamily:"Mulish"

            }}
          >
            Skip
          </Button>
        </div>
      </div>
    </div>
  );
}
