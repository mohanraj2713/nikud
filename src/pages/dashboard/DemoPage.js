import { paramCase } from 'change-case';
import { useState } from 'react';
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
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { TableEmptyRows, TableHeadCustom, TableNoData, TableSelectedActions } from '../../components/table';
// sections
import { UserTableToolbar, UserTableRow } from '../../sections/@dashboard/user/list';
import ModalDialogue from '../../components/dialogue/ModalComponent';
import TableComponent from '../../components/custom-table/TableComponent';
import CustomeTableComponent from '../../components/custom-table/CustomTableComponent';
import DynamicTableComponent from '../../components/custom-table/Table';

// ----------------------------------------------------------------------

const STATUS_OPTIONS = ['all', 'active', 'banned'];

const ROLE_OPTIONS = [
    'all',
    'ux designer',
    'full stack designer',
    'backend developer',
    'project manager',
    'leader',
    'ui designer',
    'ui/ux designer',
    'front end developer',
    'full stack developer',
];

const TABLE_HEAD = [
    { id: 'name', label: 'Name', align: 'left' },
    { id: 'company', label: 'Company', align: 'left' },
    { id: 'role', label: 'Role', align: 'left' },
    { id: 'isVerified', label: 'Verified', align: 'center' },
    { id: 'status', label: 'Status', align: 'left' },
    { id: '' },
];

// ----------------------------------------------------------------------


const SM = "sm"
const LG = "lg"
const MD = "md"
const XL = "xl"
const XS = "xs"

export default function DemoPage() {
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

    const [tableData, setTableData] = useState(_userList);

    const [filterName, setFilterName] = useState('');

    const [filterRole, setFilterRole] = useState('all');

    const [isOpen, setIsOpen] = useState(false)
    const [fullWidth, setFullWidth] = useState(true)

    const { currentTab: filterStatus, onChangeTab: onChangeFilterStatus } = useTabs('all');

    const handleFilterName = (filterName) => {
        setFilterName(filterName);
        setPage(0);
    };

    const handleFilterRole = (event) => {
        setFilterRole(event.target.value);
    };

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

    const dataFiltered = applySortFilter({
        tableData,
        comparator: getComparator(order, orderBy),
        filterName,
        filterRole,
        filterStatus,
    });

    const denseHeight = dense ? 52 : 72;

    const isNotFound =
        (!dataFiltered.length && !!filterName) ||
        (!dataFiltered.length && !!filterRole) ||
        (!dataFiltered.length && !!filterStatus);

    return (
        <Page title="User: List">
            {/* <Container maxWidth={themeStretch ? false : 'lg'}> */}
            <HeaderBreadcrumbs
                heading="User List"
                links={[
                    { name: 'Dashboard', href: PATH_DASHBOARD.root },
                    { name: 'User', href: PATH_DASHBOARD.user.root },
                    { name: 'List' },
                ]}
                action={
                    <>
                        {/* <Modal /> */}

                        <Button variant='outlined' color='success' onClick={() => setIsOpen(true)}>User Modal</Button>
                    </>
                }
            />



            <ModalDialogue isOpen={isOpen}
                fullWidth={fullWidth}
                maxWidth={XL}
                modalClose={() => setIsOpen(false)}
                dialogTitle={"User Details"}
                dialogContent={"user details for nukid"}
                modalSubmit={() => setIsOpen(false)}
            >



                <UserTableToolbar
                    filterName={filterName}
                    filterRole={filterRole}
                    onFilterName={handleFilterName}
                    onFilterRole={handleFilterRole}
                    optionsRole={ROLE_OPTIONS}
                />

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
                                {dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <UserTableRow
                                        key={row.id}
                                        row={row}
                                        selected={selected.includes(row.id)}
                                        onSelectRow={() => onSelectRow(row.id)}
                                        onDeleteRow={() => handleDeleteRow(row.id)}
                                        onEditRow={() => handleEditRow(row.name)}
                                    />
                                ))}

                                <TableEmptyRows height={denseHeight} emptyRows={emptyRows(page, rowsPerPage, tableData.length)} />

                                <TableNoData isNotFound={isNotFound} />
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Scrollbar>

                <Box sx={{ position: 'relative' }}>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={dataFiltered.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={onChangePage}
                        onRowsPerPageChange={onChangeRowsPerPage}
                    />

                    <FormControlLabel
                        control={<Switch checked={dense} onChange={onChangeDense} />}
                        label="Dense"
                        sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
                    />
                </Box>
                {/* </Card> */}

            </ModalDialogue>

            <TableComponent />

            <CustomeTableComponent />

            <DynamicTableComponent header={[
                { id: 'name', label: 'Name', align: 'left' },
                { id: 'company', label: 'Company', align: 'left' },
                { id: 'role', label: 'Role', align: 'left' },
                { id: 'isVerified', label: 'Verified', align: 'center' },
                { id: 'status', label: 'Status', align: 'left' },
                { id: '' },
            ]} TABLE_DATA={_userList}/>

        </Page>
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

    if (filterName) {
        tableData = tableData.filter((item) => item.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1);
    }

    if (filterStatus !== 'all') {
        tableData = tableData.filter((item) => item.status === filterStatus);
    }

    if (filterRole !== 'all') {
        tableData = tableData.filter((item) => item.role === filterRole);
    }

    return tableData;
}
