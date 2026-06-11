// Xử lý khi bấm nút Đăng nhập hoặc Đăng ký
function handleAuth(type) {
    alert(`đã bấm nút ${type}`);
}

// Xử lý khi bấm vào các nút/link khác trên menu điều hướng
function handleMenuClick(menuName) {
    alert(`Bạn đã bấm vào mục: ${menuName}`);
}

// Xử lý khi bấm nút Submit (Đặt xe / Tìm chuyến)
function handleBookingSubmit(event) {
    // Ngăn trang web bị tải lại (reload) khi submit form
    event.preventDefault();

    // Lấy giá trị từ các ô nhập liệu (để logic sau này nếu cần phát triển)
    const startPoint = document.getElementById('startPoint').value;
    const endPoint = document.getElementById('endPoint').value;
    const departureTime = document.getElementById('departureTime').value;

    // Hiển thị thông báo alert như yêu cầu
    alert(`Hệ thống nhận lệnh submit!\n\nThông tin chuyến đi:\n- Điểm đi: ${startPoint}\n- Điểm đến: ${endPoint}\n- Thời gian: ${departureTime}`);
}