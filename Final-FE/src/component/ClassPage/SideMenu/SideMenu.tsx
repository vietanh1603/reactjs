
import {Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography, Toolbar} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/Group';
import GridViewIcon from '@mui/icons-material/GridView';

const menuItems = [
    { text: 'Tổng quan', icon: <GridViewIcon />, active: true },
    { text: 'Bài thi', icon: <EmojiEventsIcon />, active: false },
    { text: 'Thành viên', icon: <GroupIcon />, active: false },
];

export default function () {
    return(
        <>
            <Drawer
                variant="permanent"
                anchor="left"
                className="sidebar"
            >
                <Toolbar/>
                <Box className="menu-container">
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItemButton
                                key={index}
                                selected={item.active}
                                className={`menu-item ${item.active ? 'active' : ''}`}
                            >
                                <ListItemIcon className="menu-icon">{item.icon}</ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    className="menu-text"
                                />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>

                <Box className="sidebar-footer">
                    <Typography variant="body2" color="textSecondary">
                        © 2024 Allrights reserved BKStar
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                        Version 1.3.1
                    </Typography>
                </Box>
            </Drawer>
        </>
    )
}