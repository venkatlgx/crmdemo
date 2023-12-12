'use client';

import { makeStyles } from '@material-ui/core';
import { Message, MoreVert } from '@mui/icons-material';
import { Delete, Person, Star, Visibility } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TuneIcon from '@mui/icons-material/Tune';
import WarningIcon from '@mui/icons-material/Warning';
import { Menu } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import React, { useState } from 'react';

import UserForm from '@/app/components/adduserform';
import AssignBrands from '@/app/components/assignbrand';
import AssignTeam from '@/app/components/assignteam';
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
          <ListItemText >View Profile</ListItemText>
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
}

function createData(
  id: number,
  uid: number,
  fullname: string,
  events: number,
  vertical: string,
  role: string,
  team: string,
  city: string
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
  };
}

const rows = [
  createData(
    0,
    1,
    'Ramesh',
    305,
    'Ground Sales',
    'BO',
    'Anbarasan Anbu',
    'Bengauru'
  ),
  createData(
    1,
    2,
    'Amit',
    2,
    'Ground Sales',
    'BO',
    'Anbarasan Anbu',
    'Bengauru'
  ),
  createData(
    2,
    3,
    'Rajagopala Chari',
    62,
    'Ground Sales',
    'BO',
    'Anbarasan Anbu',
    'Bengauru'
  ),
  createData(
    3,
    4,
    'Paka',
    159,
    'Ground Sales',
    'BO',
    'Anbarasan Anbu',
    'Bengauru'
  ),
  createData(
    20,
    1,
    'Ramesh',
    305,
    'Ground Sales',
    'BO',
    'Anbarasan Anbu',
    'Bengauru'
  ),
  createData(
    21,
    2,
    'Amit',
    2,
    'Ground Sales',
    'BO',
    'Anbarasan Anbu',
    'Bengauru'
  ),
  createData(
    22,
    3,
    'Rajagopala Chari',
    62,
    'Ground Sales',
    'BO',
    'Anbarasan Anbu',
    'Bengauru'
  ),
  createData(
    23,
    4,
    'Paka',
    159,
    'Ground Sales',
    'BO',
    'Anbarasan Anbu',
    'Bengauru'
  ),
  createData(
    30,
    1,
    'Ramesh',
    305,
    'Ground Sales',
    'BO',
    'Anbarasan Anbu',
    'Bengauru'
  ),
  createData(
    31,
    2,
    'Amit',
    2,
    'Ground Sales',
    'BO',
    'Anbarasan Anbu',
    'Bengauru'
  ),
  createData(
    32,
    3,
    'Rajagopala Chari',
    62,
    'Ground Sales',
    'BO',
    'Anbarasan Anbu',
    'Bengauru'
  ),
  createData(
    33,
    4,
    'Paka',
    159,
    'Ground Sales',
    'BO',
    'Anbarasan Anbu',
    'Bengauru'
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
    label: 'Full Name',
  },
  {
    id: 3,
    numeric: true,
    disablePadding: false,
    label: 'Events',
  },
  {
    id: 4,
    numeric: true,
    disablePadding: false,
    label: 'Vertical',
  },
  {
    id: 5,
    numeric: true,
    disablePadding: false,
    label: 'Role',
  },
  {
    id: 6,
    numeric: true,
    disablePadding: false,
    label: 'Team',
  },
  {
    id: 7,
    numeric: true,
    disablePadding: false,
    label: 'City',
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
            {index == 0 ? (
              <Checkbox
                style={{
                  position: 'absolute',
                  marginLeft: -0.5,
                  marginTop: -8,
                }}
                color='primary'
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  'aria-label': 'select all desserts',
                }}
              />
            ) : null}
            <TableSortLabel
              active={false}
              direction='asc'
              style={{ marginLeft: index == 0 ? 40 : null ,color:"rgba(18, 18, 18, 1)",fontWeight:'bolder',fontSize:14,fontFamily:"Mulish",fontStyle:'italic'}}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function UsersPage() {
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
  const [openTwo, setOpenTwo] = React.useState(false);
  const [status, setStatus] = useState(1);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpenTwo(true);
  const handleOpenTwo = () => setOpenTwo(true);
  const handleCloseTwo = () => setOpenTwo(false);
  const saveUserInfo = () => {
    setStatus(2);
  };
  const saveTeamInfo = () => {
    setStatus(3);
  };
  const saveBrandInfo = () => {
    setOpen(false);
  };
  return (
    <div className='text-black' style={{ padding: 12 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 15,
        }}
      >
        <div style={{ display: 'flex',alignItems:"center" }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 14,fontWeight:"normal",fontFamily:"Mulish" }}>
            Total:
          </p>
          <p style={{ color: 'white', fontSize: 16,fontWeight:"bold",fontFamily:"Mulish",marginLeft:"10px" }}> 30 Users</p>
          <div
            style={{
              height: 34,
              width: 65,
              padding: 2,
              borderRadius: 8,
              backgroundColor: 'rgba(42, 42, 42, 1)',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-around',
              marginLeft: 20,
            }}
          >
            <TuneIcon fontSize='22' style={{ color: 'white' }}></TuneIcon>
            <p style={{ color: 'white', fontSize: 12,fontWeight:"normal",fontFamily:"Mulish" }}>Filter</p>
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <select
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              paddingTop: 2,
              paddingBottom: 2,
              borderRadius: 41,
              fontSize: 14,
              width:141,
              height:36,
              fontStyle:'italic',
              fontWeight: 'bold'
              ,fontFamily:"Mulish"
            
            }}
            name='rowsperpage'
            id='rpp'
          >
            <option style={{ fontSize: 12 }} value='8'>
              Import users
            </option>
            <option value='10'>New users</option>
            <option value='15'>Current users</option>
          </select>
          <button
            onClick={handleOpen}
            style={{
              backgroundColor: '#0094ff',
             
              borderRadius: 41,
            
              fontSize: 14,
             
              width:103,
              height:36,
              color: 'white',
              marginLeft: 10,
              fontStyle:'italic',
              fontWeight: 'bold'
              ,fontFamily:"Mulish"
            }}
            type='button'
          >
            Add User
          </button>
        </div>
      </div>
      <Box sx={{ width: '100%' }}>
        <Paper
          sx={{
            width: '100%',
            mb: 2,
            background: 'rgba(255, 250, 234, 1)',
            borderRadius: 2,
            padding: 2,
            paddingTop: 0,
          }}
        >
          <TableContainer style={{height:"450px"}}>
            <Table
              style={{
                minWidth: 50,
                borderCollapse: 'separate',
                borderSpacing: '0px 12px',
              }}
              stickyHeader aria-label="sticky table"
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
                        align='left'
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <Checkbox
                            style={{
                              opacity:
                                hoveredRow === row.id || isItemSelected ? 1 : 0,
                            }}
                            color='primary'
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
<p style={{color:"rgba(4, 4, 4, 1)",fontWeight:'normal',fontSize:16,fontFamily:"Mulish"}}>              {row.uid}</p>
            
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
                        align='left'
                        className={classes.tableCell}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <img
                            style={{ height: 30, width: 30, borderRadius: 30 }}
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU'
                            alt='User Avatar'
                          />
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              marginLeft: '8px',
                            }}
                          >
                            <span style={{color:"rgba(4, 4, 4, 1)",fontWeight:'bold',fontSize:16,fontFamily:"Mulish"}}>{row.fullname}</span>
                            <span style={{fontFamily:"Mulish",fontWeight:"normal",fontSize:14,color:"rgba(23, 10, 0, 0.7)"}}>36 Brands</span>
                          </div>
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
                        align='left'
                      >
                         <p style={{color:"rgba(4, 4, 4, 1)",fontWeight:'bold',fontSize:16,fontFamily:"Mulish"}}>      {row.vertical}</p>
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
                         <p style={{color:"rgba(4, 4, 4, 1)",fontWeight:'bold',fontSize:16,fontFamily:"Mulish"}}>      {row.role}</p>
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
                      <p style={{color:"rgba(4, 4, 4, 1)",fontWeight:'bold',fontSize:16,fontFamily:"Mulish"}}>         {row.team}</p>
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
                        <p style={{color:"rgba(4, 4, 4, 1)",fontWeight:'bold',fontSize:16,fontFamily:"Mulish"}}>       {row.city}</p>
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
                        }}
                      >
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                          }}
                        >
                          <BasicMenu onClick={() => {}}></BasicMenu>
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: 14,
              fontWeight: 'normal'
              ,fontFamily:"Mulish"
            }}
          >
            View
          </p>
          <select
            value={rowsPerPage}
            onChange={handleSelectChange}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              height: 25,
              width: 59,
              borderRadius: 8,
              padding: 0,
              justifyContent: 'space-between',
              paddingLeft: 5,
              marginLeft: 5,
              marginRight: 5
              ,fontFamily:"Mulish",fontWeight:'normal'
            }}
            name='rowsperpage'
            id='rpp'
          >
            <option style={{ fontSize: 12 }} value='8'>
              8
            </option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
          </select>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: 14,
              fontWeight: 'normal'
              ,fontFamily:"Mulish"
            }}
          >
            users per page
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <KeyboardDoubleArrowLeftIcon
            onClick={() => {
              setPage(0);
            }}
            style={{
              color: 'rgba(22, 22, 22, 1)',
              padding: 5,
              fontSize: 27,
              backgroundColor: page > 0 ? 'white' : 'grey',
              borderRadius: 20,
              marginRight: 10,
            }}
          ></KeyboardDoubleArrowLeftIcon>
          <KeyboardArrowLeftIcon
            onClick={() => {
              if (page > 0) {
                setPage(page - 1);
              }
            }}
            style={{
              color: 'rgba(22, 22, 22, 1)',
              padding: 5,
              fontSize: 27,
              backgroundColor: page > 0 ? 'white' : 'grey',
              borderRadius: 20,
              marginRight: 10,
            }}
          ></KeyboardArrowLeftIcon>
          <p
            style={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 14,
              fontWeight: '500',
              marginRight: 10
              ,fontFamily:"mulish"

            }}
          >
            {page + 1} of {totalpages} Pages
          </p>
          <KeyboardArrowRightIcon
            onClick={() => {
              if (page + 1 < totalpages) {
                setPage(page + 1);
              }
            }}
            style={{
              color: 'rgba(22, 22, 22, 1)',
              padding: 5,
              fontSize: 27,
              backgroundColor: page + 1 < totalpages ? 'white' : 'grey',
              borderRadius: 20,
              marginRight: 10,
            }}
          ></KeyboardArrowRightIcon>
          <KeyboardDoubleArrowRightIcon
            onClick={() => {
              setPage(totalpages - 1);
            }}
            style={{
              color: 'rgba(22, 22, 22, 1)',
              padding: 5,
              fontSize: 27,
              backgroundColor: page + 1 < totalpages ? 'white' : 'grey',
              borderRadius: 20,
            }}
          ></KeyboardDoubleArrowRightIcon>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div
          style={{
            width: '97%',
            height: '88%',
            margin: '0 auto',
            marginTop: '70px',
            position: 'relative',
            backgroundColor: '#191a23',
            borderRadius: '0 6px 6px 6px',
            boxShadow: '4px 4px 7px rgba(0, 0, 0, 0.59)',
          }}
        >
          <div
            style={{
              content: '',
              width: '20%',
              height: '60px',
              borderRadius: '10px 0 0 0',
              backgroundColor: '#191a23',
              position: 'absolute',
              top: '-60px',
              left: '0px',
              padding: 5,
            }}
          >
            <Image
        src="/images/dacurve.png" 
        alt="Description of the image"
        width={87} 
        height={87}
        style={{position:"absolute",marginLeft:"90%",marginTop:"-7px"}}
      />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PersonAddIcon
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  borderRadius: 30,
                  fontSize: 35,
                  padding: 10,
                  marginRight: '10px',
                }}
              ></PersonAddIcon>
              <div>
                <p style={{ color: 'white', fontSize: 16, fontWeight: 'light',fontFamily:"Mulish" }}>
                  Create new user
                </p>
                <p style={{ color: 'white', fontSize: 24, fontWeight: 'bold',fontFamily:"Mulish",fontStyle:'italic' }}>
                  {status == 1
                    ? 'Enter User Info'
                    : status == 2
                    ? 'Assign Team'
                    : 'Assign Brands'}{' '}
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              marginLeft: '400px',
              display: 'flex',
            }}
          >
            <button
              style={{
                height: 52,
                paddingLeft: 15,
                paddingRight: 15,
                borderRadius: 58,
                backgroundColor:
                  status == 1
                    ? 'rgba(255, 234, 142, 1)'
                    : 'rgba(28, 30, 39, 1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {status != 1 ? (
                <DoneIcon
                  style={{
                    color: 'white',
                    fontSize: 20,
                    backgroundColor: 'green',
                    borderRadius: 16,
                    marginRight: 10,
                  }}
                ></DoneIcon>
              ) : (
                <p
                  style={{
                    backgroundColor: status == 1 ? 'rgba(17, 17, 17, 1)' : null,
                    height: 24,
                    width: 24,
                    borderRadius: 24,
                    color: status == 1 ? 'white' : 'rgba(255, 255, 255, 0.6)'
                    ,fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
                  }}
                >
                  1
                </p>
              )}

              <p
                style={{
                  color:
                    status == 1
                      ? 'rgba(18, 18, 18, 1)'
                      : 'rgba(255, 255, 255, 0.6)',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: status == 1 ? '10px' : null
                  ,fontFamily:"Mulish",fontStyle:'italic'
                }}
              >
                User Info
              </p>
            </button>
            <button
              style={{
                height: 52,
                paddingLeft: 15,
                paddingRight: 15,
                borderRadius: 58,
                backgroundColor:
                  status == 2
                    ? 'rgba(255, 234, 142, 1)'
                    : 'rgba(28, 30, 39, 1)',
                marginLeft: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {status == 3 ? (
                <DoneIcon
                  style={{
                    color: 'white',
                    fontSize: 20,
                    backgroundColor: 'green',
                    borderRadius: 16,
                    marginRight: 10,
                  }}
                ></DoneIcon>
              ) : (
                <p
                  style={{
                    backgroundColor: status == 2 ? 'rgba(17, 17, 17, 1)' : null,
                    height: 24,
                    width: 24,
                    borderRadius: 24,
                    color: status == 2 ? 'white' : 'rgba(255, 255, 255, 0.6)',
                    fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
                  }}
                >
                  2
                </p>
              )}

              <p
                style={{
                  color:
                    status == 2
                      ? 'rgba(18, 18, 18, 1)'
                      : 'rgba(255, 255, 255, 0.6)',
                  fontSize: 16,
        
                  marginLeft: status == 2 ? '10px' : null,
                  fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
                }}
              >
                Assign Team
              </p>
            </button>
            <button
              style={{
                height: 52,
                paddingLeft: 15,
                paddingRight: 15,
                borderRadius: 58,
                backgroundColor:
                  status == 3
                    ? 'rgba(255, 234, 142, 1)'
                    : 'rgba(28, 30, 39, 1)',
                marginLeft: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p
                style={{
                  backgroundColor: status == 3 ? 'rgba(17, 17, 17, 1)' : null,
                  height: 24,
                  width: 24,
                  borderRadius: 24,
                  color: status == 3 ? 'white' : 'rgba(255, 255, 255, 0.6)',
                  fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
                }}
              >
                3
              </p>
              <p
                style={{
                  color:
                    status == 3
                      ? 'rgba(18, 18, 18, 1)'
                      : 'rgba(255, 255, 255, 0.6)',
                  fontSize: 16,
                 
                  marginLeft: status == 3 ? '10px' : null,
                  fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
                }}
              >
                Assign Brands
              </p>
            </button>
          </div>

          <CloseIcon
            onClick={handleClose}
            style={{
              color: 'rgba(125, 125, 125, 1)',
              position: 'absolute',
              right: '15px',
              backgroundColor: 'rgba(28, 30, 39, 1)',
              marginTop: -45,
              padding: 12,
              fontSize: '40px',
              borderRadius: 30,
            }}
          ></CloseIcon>
          {status == 1 ? (
            <UserForm onsave={saveUserInfo}></UserForm>
          ) : status == 2 ? (
            <AssignTeam onsave={saveTeamInfo}></AssignTeam>
          ) : (
            <AssignBrands onsave={saveBrandInfo}></AssignBrands>
          )}
        </div>
      </Modal>
      <Modal
        open={openTwo}
        onClose={handleCloseTwo}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div
          style={{
            height: 236,
            width: 524,
            borderRadius: 12,
            backgroundColor: 'rgba(42, 42, 42, 1)',
            marginTop: '15%',
            marginLeft: '35%',
            padding: 10,
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', marginLeft: '28%' }}
          >
            <WarningIcon style={{ color: 'yellow' }}></WarningIcon>
            <h3
              style={{
                color: 'white',
                marginLeft: '10px',
                marginRight: '10px',
                fontFamily:"Mulish",fontWeight:"bold",fontStyle:"italic"
              }}
            >
              Data Loss Aert
            </h3>
            <WarningIcon style={{ color: 'yellow' }}></WarningIcon>
          </div>
          <p style={{ color: 'white', fontSize: 14, textAlign: 'center',fontFamily:"Mulish" }}>
            All unsaved data will be lost, and assigned items will revert to
            unassigned if you close the page without saving.
          </p>
          <p
            style={{
              color: 'white',
              fontSize: 14,
              textAlign: 'center',
              marginTop: '30px',
              fontFamily:"Mulish"
            }}
          >
            Are you sure you want to proceed?
          </p>

          <button
            style={{
              height: 50,
              width: 200,
              backgroundColor: 'white',
              borderRadius: 58,
              marginTop: '20px',
              marginLeft: '40px',
            }}
            onClick={() => {
              setOpenTwo(false);
              setOpen(false);
            }}
          >
            <p
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'rgba(56, 56, 56, 1)',
                fontFamily:"Mulish",fontStyle:"italic"
              }}
            >
              Yes, proceed
            </p>
          </button>
          <button
            style={{
              height: 50,
              width: 200,
              backgroundColor: 'rgba(0, 148, 255, 1)',
              borderRadius: 58,
              marginLeft: '25px',
            }}
            onClick={() => {
              setOpenTwo(false);
            }}
          >
            <p style={{ fontSize: 16, fontWeight: 'bold', color: 'white',fontFamily:"Mulish",fontStyle:'italic' }}>
              No, go back{' '}
            </p>
          </button>
        </div>
      </Modal>
    </div>
  );
}
