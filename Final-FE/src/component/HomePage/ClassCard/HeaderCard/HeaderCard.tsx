
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from "@mui/icons-material/Add";
import {Button} from "@mui/material";
import {Link} from "react-router-dom"


export default function () {
    return(
        <>
            <div className='header-card-container'>
                <div className='title'>
                    <h4>Danh sách lớp học</h4>
                </div>
                <div className='right-header'>
                    <Paper
                        component="form"
                        sx={{ display: 'flex', alignItems: 'center', width: 300, height: 40 }}
                    >
                        <IconButton type="button" sx={{ p: '8px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            placeholder="Tìm kiếm"
                            inputProps={{ 'aria-label': 'tim kiem' }}
                        />
                    </Paper>
                    <Link to={'/classes/add'}>
                        <Button
                            sx={{height:40,  background:'#ECC94B', border:'none', color:'white', fontWeight:900,marginLeft: 5}}
                            variant="outlined"
                            startIcon={<AddIcon />}
                            className="create-class-button"
                        >
                            Thêm lớp học
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}