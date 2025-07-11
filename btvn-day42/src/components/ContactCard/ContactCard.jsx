import {Button} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import './style.sass'

export default function ContactCard({ contact, onEdit, onDelete }) {
    const { firstName, lastName, email, phone, image } = contact;

    return (
        <div className="contact-card">
            <div className="card-top">
                <div className="buttons">
                    <Button onClick={() => onEdit(contact)} size="small" startIcon={<EditIcon />}>Sửa</Button>
                    <Button onClick={() => onDelete(contact.id)} size="small" color="error" startIcon={<DeleteIcon />}>Xoá</Button>
                </div>
                <div className="avatar-wrapper">
                    <img src={image} alt="avatar" />
                </div>
            </div>
            <div className="card-body">
                <h3>{firstName} {lastName}</h3>
                <p className="position">Marketing Officer</p>
                <p className="description">Lorem ipsum dolor sit amet.</p>
                <p>📞 {phone}</p>
                <p>📧 {email}</p>
            </div>
            <div className="card-footer">
                <button className="add-btn">+ Add to Contacts</button>
            </div>
        </div>
    );
}
