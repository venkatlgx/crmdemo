import { makeStyles } from '@material-ui/core';
import DoneIcon from '@mui/icons-material/Done';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
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
    label: 'Brand Name',
  },
  {
    id: 3,
    numeric: true,
    disablePadding: false,
    label: 'Brand Owner(s)',
  },
  {
    id: 4,
    numeric: true,
    disablePadding: false,
    label: 'Company',
  },
  {
    id: 5,
    numeric: true,
    disablePadding: false,
    label: 'City',
  },
  {
    id: 6,
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
              style={{ marginLeft: index == 0 ? 40 : index == 1 ? 40 : null ,color:"rgba(18, 18, 18, 1)",fontWeight:'bold',fontSize:14,fontFamily:"Mulish",fontStyle:'italic'}}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function AssignBrands({ onsave }) {
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
              fontWeight: 'normal',
              fontFamily:"Mulish"
            }}
          >
            Assign Brands to
          </p>
          <p
            style={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: '5px',
              marginRight: '5px',
              fontFamily:"Mulish",fontStyle:"italic"
            }}
          >
            Araving Krishnan
          </p>
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
            placeholder='Search Brands'
            style={{
              height: 40,
              width: 250,
              backgroundColor: 'rgba(36, 38, 50, 1)',
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: 50,
              fontSize: 14,
              fontWeight: 'bold',
              marginLeft: '20px',
              color: 'white',
              fontFamily:"Mulish"
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
                                                  <p style={{color:"rgba(4, 4, 4, 1)",fontWeight:'normal',fontSize:16,fontFamily:"Mulish"}}>            


                        {row.uid}
                        </p>
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
                        <div style={{ display: 'flex' }}>
                          <img
                            style={{ height: 30, width: 30, borderRadius: 30 }}
                            src='data:image/png;base64,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'
                          ></img>
                          <div style={{ marginLeft: '5px' }}>
                          <p style={{color:"rgba(4, 4, 4, 1)",fontWeight:'bold',fontSize:16,fontFamily:"Mulish",textDecorationLine:"underline"}}>            
                              Google Pvt. Ltd...
                            </p>
                            <p
                              style={{
                                fontSize: 10,
                                color: 'rgba(23, 10, 0, 0.7)',
                                fontWeight: 'bold',fontFamily:"Mulish"
                              }}
                            >
                              NBFC - Non-Banking Financia...
                            </p>
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

                          <div style={{ marginLeft: '10px' }}>
                            <span
                              style={{
                                color: !row.fullname
                                  ? 'rgba(4, 4, 4, 0.6)'
                                  : null,
                            fontWeight:'bold',fontSize:16,fontFamily:"Mulish",
                              }}
                            >
                              {row.fullname ? row.fullname : 'Yet to Add'}
                            </span>
                            <p
                              style={{
                                fontSize: 12,
                                color: 'rgba(23, 10, 0, 0.7)',
                                fontWeight: 'bold',fontFamily:"Mulish"
                              }}
                            >
                              {' '}
                              {row.fullname ? '36 Brands' : null}
                            </p>
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
                        <p style={{color:"rgba(4, 4, 4, 1)",fontWeight:'bold',fontSize:16,fontFamily:"Mulish",}}>Alphabet Inc.,.</p>
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
                        <p style={{color:"rgba(4, 4, 4, 1)",fontWeight:'bold',fontSize:16,fontFamily:"Mulish",}}>Bengaluru</p>
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
                            fontFamily:"Mulish",fontWeight:"bold",fontStyle:"italic"
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
                              fontSize: 13,
                              fontWeight: '550',
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
        <div>
          <p
            style={{
              fontSize: 14,
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 'bold',
              fontFamily:"Mulish",fontStyle:"italic"
            }}
          >
            Assigned: 04 Brands
          </p>
          <p
            style={{
              fontSize: 12,
              color: 'rgba(255, 255, 255, 0.3)',
              fontWeight: 'normal',
              fontFamily:"Mulish"
            }}
          >
            Total: 06 Brands
          </p>
        </div>
        <div style={{ display: 'flex' }}>
          <Button
            onClick={onsave}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              color: 'rgba(56, 56, 56, 1)',
              borderRadius: 58,
              fontSize: 16,
              fontWeight: 'bold',
              width:"250px",height:"50px",

              textTransform: 'none',
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
              width:"250px",height:"50px",
              paddingLeft:10,paddingRight:10,
              marginLeft: '20px',
              fontFamily:"Mulish",fontStyle:"italic"
            }}
          >
            Skip and Save
          </Button>
        </div>
      </div>
    </div>
  );
}
