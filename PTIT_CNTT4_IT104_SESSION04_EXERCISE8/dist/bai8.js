function calculateOrderTotal(order) {
    return order.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);
}
function printOrder(order) {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);
    order.items.forEach(item => {
        const ten = item.product.name;
        const soLuong = item.quantity;
        const tongTien = item.product.price * soLuong;
        console.log(`- ${ten} × ${soLuong} → ${tongTien.toLocaleString()} VND`);
    });
    const tong = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${tong.toLocaleString()} VND`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
}
const order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    note: "Giao sau 18h",
    items: [
        {
            product: { id: "P001", name: "Áo sơ mi", price: 250000 },
            quantity: 2
        },
        {
            product: { id: "P002", name: "Quần tây", price: 400000 },
            quantity: 1
        }
    ]
};
printOrder(order);
