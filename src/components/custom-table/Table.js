import { paramCase } from 'change-case';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import {
    Box,
    Tab,
    Tabs,
    Card,
    Table,
    Switch,
    Button,
    Tooltip,
    Divider,
    TableBody,
    Container,
    IconButton,
    TableContainer,
    TablePagination,
    FormControlLabel,
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useTabs from '../../hooks/useTabs';
import useSettings from '../../hooks/useSettings';
import useTable, { getComparator, emptyRows } from '../../hooks/useTable';
// _mock_
import { _userList } from '../../_mock';
// components
import Page from '../Page';
import Iconify from '../Iconify';
import Scrollbar from '../Scrollbar';
import HeaderBreadcrumbs from '../HeaderBreadcrumbs';
import { TableEmptyRows, TableHeadCustom, TableNoData, TableSelectedActions } from '../table';
// sections
import { UserTableToolbar, UserTableRow } from '../../sections/@dashboard/user/list';

// ----------------------------------------------------------------------



// const ROLE_OPTIONS = [
//     'all',
//     'ux designer',
//     'full stack designer',
//     'backend developer',
//     'project manager',
//     'leader',
//     'ui designer',
//     'ui/ux designer',
//     'front end developer',
//     'full stack developer',
// ];

// ----------------------------------------------------------------------



const DynamicTableComponent = (props) => {
    const { header, TABLE_DATA } = props
    const {
        dense,
        page,
        order,
        orderBy,
        rowsPerPage,
        setPage,
        //
        selected,
        setSelected,
        onSelectRow,
        onSelectAllRows,
        //
        onSort,
        onChangeDense,
        onChangePage,
        onChangeRowsPerPage,
    } = useTable();

    const { themeStretch } = useSettings();

    const navigate = useNavigate();
    const [tableData, setTableData] = useState(TABLE_DATA);
    const [TABLE_HEAD, setTableHead] = useState(header)
    
    const [fullWidth, setFullWidth] = useState(true)

    const { currentTab: filterStatus, onChangeTab: onChangeFilterStatus } = useTabs('all');

    useEffect(() => {
        setTableData(TABLE_DATA)
    }, [TABLE_DATA])


    const dataFiltered = applySortFilter({
        tableData,
        comparator: getComparator(order, orderBy)
    });
    
    const handleDeleteRow = (id) => {
        const deleteRow = tableData.filter((row) => row.id !== id);
        setSelected([]);
        setTableData(deleteRow);
    };

    const handleDeleteRows = (selected) => {
        const deleteRows = tableData.filter((row) => !selected.includes(row.id));
        setSelected([]);
        setTableData(deleteRows);
    };

    const handleEditRow = (id) => {
        navigate(PATH_DASHBOARD.user.edit(paramCase(id)));
    };


    const denseHeight = dense ? 52 : 72;
    const isNotFound = dataFiltered ? !dataFiltered.length : false

    return (
        <>
            <Scrollbar>
                <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
                    {selected.length > 0 && (
                        <TableSelectedActions
                            dense={dense}
                            numSelected={selected.length}
                            rowCount={tableData.length}
                            onSelectAllRows={(checked) =>
                                onSelectAllRows(
                                    checked,
                                    tableData.map((row) => row.id)
                                )
                            }
                            actions={
                                <Tooltip title="Delete">
                                    <IconButton color="primary" onClick={() => handleDeleteRows(selected)}>
                                        <Iconify icon={'eva:trash-2-outline'} />
                                    </IconButton>
                                </Tooltip>
                            }
                        />
                    )}

                    <Table size={dense ? 'small' : 'medium'}>
                        <TableHeadCustom
                            order={order}
                            orderBy={orderBy}
                            headLabel={TABLE_HEAD}
                            rowCount={tableData.length}
                            numSelected={selected.length}
                            onSort={onSort}
                            onSelectAllRows={(checked) =>
                                onSelectAllRows(
                                    checked,
                                    tableData.map((row) => row.id)
                                )
                            }
                        />

                        <TableBody>
                            {dataFiltered && dataFiltered.length > 0 && dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <UserTableRow
                                    key={row.id}
                                    row={row}
                                    selected={selected.includes(row.id)}
                                    onSelectRow={() => onSelectRow(row.id)}
                                    onDeleteRow={() => handleDeleteRow(row.id)}
                                    onEditRow={() => handleEditRow(row.name)}
                                />
                            ))}

                            <TableEmptyRows height={denseHeight} emptyRows={emptyRows(page, rowsPerPage, tableData ? tableData.length : 0)} />

                            <TableNoData isNotFound={isNotFound} />
                        </TableBody>
                    </Table>
                </TableContainer>
            </Scrollbar>

            <Box sx={{ position: 'relative' }}>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    component="div"
                    count={dataFiltered ? dataFiltered.length : 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={onChangePage}
                    onRowsPerPageChange={onChangeRowsPerPage}
                />

                {/* <FormControlLabel
                    control={<Switch checked={dense} onChange={onChangeDense} />}
                    label="Dense"
                    sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
                /> */}
            </Box>

        </>
    );
}

// ----------------------------------------------------------------------

function applySortFilter({ tableData, comparator, filterName, filterStatus, filterRole }) {
    const stabilizedThis = tableData.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    tableData = stabilizedThis.map((el) => el[0]);

    return tableData;
}


export default DynamicTableComponent