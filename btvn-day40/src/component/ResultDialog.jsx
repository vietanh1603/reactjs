import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

export default function ({ open, score, total, onClose }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Trả lời sai rùi nhé</DialogTitle>
            <DialogContent>
                <p>Điểm hiện tại: {score} / {total}</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Làm lại</Button>
            </DialogActions>
        </Dialog>
    );
}
