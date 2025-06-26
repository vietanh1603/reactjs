import React from 'react';
import { memo } from 'react';

function CartItem({ item, onIncrease, onDecrease, onDelete }) {
    console.log(`render: ${item.name}`);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 12,
            border: '1px solid #ddd',
            borderRadius: 6,
            marginBottom: 12
        }}>
            <div>
                <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                <div style={{ fontSize: 13, color: '#666' }}>
                    Số lượng: {item.quantity}
                </div>
            </div>

            <div style={{ display: 'flex', gap: 6 }}>
                <button onClick={() => onIncrease(item.id)}>+</button>
                <button onClick={() => onDecrease(item.id)} disabled={item.quantity <= 1}>-</button>
                <button onClick={() => onDelete(item.id)} style={{ color: 'red' }}>Xóa</button>
            </div>
        </div>
    );
}

function areEqual(prevProps, nextProps) {
    return (
        prevProps.item.id === nextProps.item.id &&
        prevProps.item.quantity === nextProps.item.quantity
    );
}

export default memo(CartItem, areEqual);
