import { Box, Button, IconButton, Link, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { deleteEmployee, getEmployees, updateEmployee } from "../utils/getAPIData";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const EmployeesDashboard = () => {

    interface Employee {
        id: number,
        name: string,
        email: string,
        phone: string
        company: number
    }

    const [employees, setEmployees] = useState<Employee[]>([]);
    const [modalOpen, setModalOpen] = useState(false)

    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        email: '',
        phone: '',
    });

    const columns: GridColDef<(typeof employees)[number]>[] = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 0.3,
            editable: false,
            disableColumnMenu: true
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 0.3,
            editable: false,
            disableColumnMenu: true,
            renderCell: (params) => {
                return (
                    <Link href={`mailto:${params?.value}`}>{params?.value}</Link>
                )
            }
        },
        {
            field: 'phone',
            headerName: 'Phone',
            type: 'number',
            flex: 0.2,
            align: "left",
            headerAlign: 'left',
            editable: false,
            disableColumnMenu: true,
            renderCell: (params) => {
                return (
                    <Link href={`tel:${params?.value}`}>{params?.value}</Link>
                )
            }
        },
        {
            field: 'actions',
            headerName: '',
            flex: 0.2,
            disableColumnMenu: true,
            renderCell: (params) => {
                const handleEditClick = () => {
                    setFormData({
                        id: params?.row?.id,
                        name: params?.row?.name,
                        email: params?.row?.email,
                        phone: params?.row?.phone,
                    });
                    setModalOpen(true)
                };

                const handleDeleteClick = async () => {
                    let data = {
                        id: params?.row?.id
                    }
                    await deleteEmployee(data)
                    location.reload();
                };

                return (
                    <Box sx={{ textAlign: 'center' }}>
                        <IconButton onClick={handleEditClick} sx={{ color: '#E6E2DD' }}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={handleDeleteClick} sx={{ color: '#AE371F' }}>
                            <DeleteOutlineIcon />
                        </IconButton>
                    </Box>
                );
            },
        }
    ];

    const getData = async () => {
        let company = null;
        if (window != undefined) {
            company = localStorage.getItem('company')
        }
        const results = await getEmployees(company)
        if (results?.data != 'Nessun dipendente') {
            setEmployees(results?.data)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await updateEmployee(formData);
        setModalOpen(false);
        location.reload()
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    return (
        <Box>
            <Box sx={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <Button className="button" href={'/om/addEmployee'} startIcon={<AddIcon></AddIcon>}>New Employee</Button>
            </Box>
            <Box sx={{ height: 400, width: '100%', padding: '4rem', paddingTop: '2rem' }}>
                <DataGrid
                    rows={employees}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    editMode="row"
                    pageSizeOptions={[5, 10, 20, 50]}
                    disableRowSelectionOnClick
                    classes={{
                        root: 'rootDG',
                        cell: 'cell',
                        columnHeaders: 'columnHeaders',
                        columnHeaderTitle: 'columnHeaderTitle',
                        row: 'row',
                        columnHeader: 'columnHeader',
                        footerContainer: 'footerContainer',

                    }}
                />
            </Box>
            <Modal open={modalOpen} onClose={handleCloseModal} className="modal employee-modal">
                <Box className="modal-inner-box">
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton sx={{ color: '#E6E2DD' }} onClick={handleCloseModal}><CloseIcon></CloseIcon></IconButton>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <h1 className="h1-title">Edit employee data</h1>
                        <form onSubmit={handleSubmit}>
                            <Box sx={{ padding: '1rem' }}>
                                <Typography>Name</Typography>
                                <input
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                />
                            </Box>
                            <Box sx={{ padding: '1rem' }}>
                                <Typography>Email</Typography>
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                />
                            </Box>
                            <Box sx={{ padding: '1rem' }}>
                                <Typography>Phone</Typography>
                                <input
                                    name="phone"
                                    type="text"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                />
                            </Box>
                            <Box sx={{ padding: '1rem' }}><Button className='button' type="submit">Update</Button></Box>
                        </form>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default EmployeesDashboard;