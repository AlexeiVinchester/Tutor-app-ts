import { useSelector } from "react-redux";
import { Store } from "../../../redux/store/interface/store.interface";
import { Container, Dialog, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { RoundAddButton } from "../../../share/components/RoundAddButton/RoundAddButton";
import { useState } from "react";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', type: 'number', width: 90 },
    { field: 'name', headerName: 'Name'},
    { field: 'price', headerName: 'Price'},
    { field: 'date', headerName: 'Date', type: 'number' },
    { field: 'paidStatus', headerName: 'Status', type: 'boolean'},
];

const paginationModel = { page: 0, pageSize: 10 };

const LessonsPage = () => {
    const lessons = useSelector((store: Store) => store.lessons);
    const [isOpenCreateWindow, setIsOpenCreateWindow] = useState(false);
    const openCreateWindowHandler = () => setIsOpenCreateWindow(true);
    const closeCreateWindowHandler = () => setIsOpenCreateWindow(false);

    return (
        <div>
            <Container sx={{marginTop: 20}}>
                <Paper sx={{ height: 400}}>
                    <DataGrid
                        rows={lessons}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        
                        sx={{ border: 0}}
                    />
                </Paper>
            </Container>
            <Dialog open={isOpenCreateWindow} onClose={closeCreateWindowHandler}>

            </Dialog>
            <RoundAddButton openHandler={openCreateWindowHandler}/>
        </div>
    );
};

export { LessonsPage };