const sanphan = [
    {
        id: "P001",
        name: "Áo sơ mi",
        price: 300000,
        discount: 20,
        caregory: {
            id: "C001",
            name: "Thời trang nam"
        }
    },
    {
        id: "P002",
        name: "Quần jeans",
        price: 500000,
        caregory: {
            id: "C001",
            name: "Thời trang nam"
        }
    },
    {
        id: "P003",
        name: "Giày thể thao",
        price: 800000,
        discount: 10,
        caregory: {
            id: "C002",
            name: "Giày dép"
        }
    }
];
function giamgiasanpham(sanpham) {
    if (sanpham.discount) {
        return sanpham.price * (1 - sanpham.discount / 100);
    }
}
function displayProductInfo(sanpham) {
    console.log(`Sản phẩm: ${sanpham.name}`);
    console.log(`Giá gốc: ${sanpham.price} VND`);
    if (sanpham.discount) {
        console.log(`Giá sau khi giảm: ${giamgiasanpham(sanpham)} VND`);
    }
    else {
        console.log("Không có giảm giá");
    }
    console.log(`Danh mục: ${sanpham.caregory.name}`);
}
sanphan.forEach(sanpham => {
    displayProductInfo(sanpham);
    console.log("-------------------------");
});
