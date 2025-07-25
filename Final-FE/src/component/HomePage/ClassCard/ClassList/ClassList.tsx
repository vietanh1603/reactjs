import './style.sass'
import {Button, Grid} from "@mui/material";

export default function () {
    const classList = [
        { id: 1, name: "Toán Cao Cấp", code: "A12345", members: 12 },
        { id: 2, name: "Lập Trình Web", code: "B23456", members: 18 },
        { id: 3, name: "Hóa Học Đại Cương", code: "C34567", members: 10 },
        { id: 4, name: "Vật Lý Ứng Dụng", code: "D45678", members: 15 },
        { id: 5, name: "Kỹ Thuật Số", code: "E56789", members: 9 },
        { id: 6, name: "Nhập Môn AI", code: "F67890", members: 20 },
        { id: 7, name: "Mạng Máy Tính", code: "G78901", members: 14 },
        { id: 8, name: "Phát Triển Phần Mềm", code: "H89012", members: 16 },
    ];

    return(
        <Grid container spacing={2} className="class-list">
            {classList.map(cls => (
                <Grid
                    key={cls.id}
                    size={4}
                    className="class-card"
                >
                    <div className="top">
                        <h3>{cls.name}</h3>
                        <Button variant="text" sx={{ color: "white" }}>Vào lớp</Button>
                    </div>
                    <div className="bottom">
                        <div>
                            <strong>{cls.members}</strong>
                            <p>Thành viên tham gia</p>
                        </div>
                        <p>Mã lớp: {cls.code}</p>
                        <Button
                            className='share-button'
                            variant="outlined"
                        >
                            Chia sẻ
                        </Button>
                    </div>
                </Grid>
            ))}
        </Grid>
    )
}