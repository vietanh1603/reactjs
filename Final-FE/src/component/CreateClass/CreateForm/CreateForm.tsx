import {TextField} from "@mui/material";

export default function () {
    return(
        <>
            <div className='container'>
                <div className='title'>
                    <h4>Thêm lớp học mới</h4>
                </div>
                <div className="add-class-form">
                    <label htmlFor="class-name" className="form-label">
                        <p className="label-text">Tên lớp học <span style={{ color: 'red' }}>*</span></p>
                        <TextField
                            id="class-name"
                            placeholder="Nhập tên lớp học"
                            type="text"
                            className="input-field"
                            fullWidth
                        />
                    </label>

                    <label htmlFor="security-code" className="form-label">
                        <p className="label-text">Mã bảo vệ <span style={{ color: 'red' }}>*</span></p>
                        <TextField
                            id="security-code"
                            placeholder="Nhập mã bảo vệ"
                            type="text"
                            className="input-field"
                            fullWidth
                        />
                    </label>

                    <div className="form-actions">
                        <button className="cancel-button">Hủy</button>
                        <button className="submit-button">Tạo mới</button>
                    </div>
                </div>
            </div>
        </>
    )
}