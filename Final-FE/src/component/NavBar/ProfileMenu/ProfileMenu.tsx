import { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ProfileMenu() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={menuRef}>
            <button className="profile-button" onClick={toggleMenu}>
                <div className="avatar">
                    <img
                        src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        alt="avatar"
                    />
                </div>
                <div className="info">
                    <p className="name">
                        Trần Xuân Bàng
                        <KeyboardArrowDownIcon className="arrow-icon" fontSize="small" />
                    </p>
                    <p>Giáo viên</p>
                </div>
            </button>
            {open && (
                <div className="menu">
                    <div className="menu-item">Thông tin cá nhân</div>
                    <div className="menu-item logout">Đăng xuất</div>
                </div>
            )}
        </div>
    );
}
