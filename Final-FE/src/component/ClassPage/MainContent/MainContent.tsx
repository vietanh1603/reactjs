
import {
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Avatar,
    Button,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Divider
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PersonIcon from '@mui/icons-material/Person';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import KeyIcon from '@mui/icons-material/VpnKey';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const activities = [
    { id: 1, name: 'test 1', date: '16-07-2025 09:31:14' },
    { id: 2, name: 'test bài thi', date: '13-07-2025 09:39:27' },
    { id: 3, name: 'test5', date: '07-07-2025 02:58:37' },
    { id: 4, name: 'test 4', date: '07-07-2025 02:35:15' },
    { id: 5, name: '123123', date: '06-07-2025 09:32:32' },
    { id: 6, name: 'Thu Thu 5', date: '22-04-2024 06:24:49' },
];

const members = [
    { id: 1, name: 'Trần Xuân Bằng', role: 'Giáo viên' },
    { id: 2, name: 'Phạm Thùy Dương', role: 'Học sinh' },
    { id: 3, name: 'bang', role: 'Học sinh' },
    { id: 4, name: 'Putin', role: 'Học sinh' },
];


export default function () {
    return(
        <Box p={3} className={'main-container'}>
            <Grid container spacing={3}>
                {/* Thông tin lớp */}
                <Grid size={{ xs: 12, md: 8 }}>
                    <Card sx={{ background: 'linear-gradient(to right, #45b2ef, #73c2ed)', color: '#fff' }}>
                        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box>
                                <Typography variant="h6" fontWeight="bold">Test Thi Thu</Typography>
                                <Typography variant="body2">Giáo viên: Trần Xuân Bằng</Typography>
                                <Box mt={1} display="flex" alignItems="center" gap={1}>
                                    <Typography variant="body2">Chia sẻ lớp học</Typography>
                                    <Button size="small" variant="outlined" color="inherit" startIcon={<ContentCopyIcon />}>
                                        Sao chép liên kết
                                    </Button>
                                </Box>
                            </Box>
                            <Box display="flex" gap={1}>
                                {['P', 'B', 'PD', 'TB'].map((initial, index) => (
                                    <Avatar key={index} sx={{ backgroundColor: ['#673ab7', '#2c003e', '#27c0e2', '#9c27b0'][index], width: 40, height: 40 }}>
                                        {initial}
                                    </Avatar>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Hoạt động gần đây */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1" fontWeight="bold">
                                🗒️ Hoạt động gần đây
                            </Typography>
                            <Divider sx={{ mt: 1, mb: 2 }} />
                            <Box display="flex" flexDirection="column" gap={2}>
                                {activities.map((activity) => (
                                    <Box key={activity.id} display="flex" alignItems="flex-start" gap={1}>
                                        <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" sx={{ width: 32, height: 32 }} />
                                        <Box>
                                            <Typography fontSize={14}>
                                                Bài thi <b>{activity.name}</b> vừa được tải lên
                                            </Typography>
                                            <Box display="flex" alignItems="center" gap={0.5}>
                                                <AccessTimeIcon sx={{ fontSize: 14 }} />
                                                <Typography fontSize={12}>{activity.date}</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Tổng quan */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card>
                        <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <PersonIcon sx={{ fontSize: 40, color: '#45b2ef' }} />
                            <Typography fontSize={16} fontWeight="bold">{members.length} Thành Viên</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card>
                        <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <InsertDriveFileIcon sx={{ fontSize: 40, color: '#45b2ef' }} />
                            <Typography fontSize={16} fontWeight="bold">10 Bài Kiểm Tra</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Danh sách thành viên */}
                <Grid size={{ xs: 12, md: 8 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1" fontWeight="bold" color="primary">
                                Danh sách thành viên
                            </Typography>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>No.</TableCell>
                                        <TableCell>Họ Tên</TableCell>
                                        <TableCell>Vị Trí</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {members.map((member, index) => (
                                        <TableRow key={member.id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{member.name}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={member.role}
                                                    color={member.role === 'Giáo viên' ? 'warning' : 'success'}
                                                    variant="outlined"
                                                    sx={{ backgroundColor: member.role === 'Giáo viên' ? '#ffd1d1' : '#d1ffd1' }}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                {member.role === 'Giáo viên' && <KeyIcon sx={{ color: '#d6a404' }} />}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}