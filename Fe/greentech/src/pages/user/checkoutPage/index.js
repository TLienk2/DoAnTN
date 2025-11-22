import { memo } from "react";
import { useState } from "react";
import "./style.scss";
import cat5Img from "assets/user/images/cat5.jpg";
import cat1Img from "assets/user/images/cat1.jpg";
import { formatter } from "utils/formatter";
import AddressModal from "component/AddressModal";

const CheckoutPage = () => {
  const [address, setAddress] = useState(null);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const products = [
    { id: 1, name: "Sản phẩm A", img: cat5Img, price: 120000, quantity: 2 },
    { id: 2, name: "Sản phẩm B", img: cat1Img, price: 80000, quantity: 1 },
  ];

  const total = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = 20000;
  const finalTotal = total - discount;

  const handleOpenAddressModal = () => {
    setIsAddressModalOpen(true);
  };

  const handleCloseAddressModal = () => {
    setIsAddressModalOpen(false);
  };

  return (
    <div className="container payment_page">
      <h2 className="title">Thanh toán</h2>
      <p>Vui lòng kiểm tra và điền thông tin để hoàn tất đơn hàng!</p>
      {/* Địa chỉ nhận hàng */}
      <div className="address_box">
        <h3>Địa chỉ nhận hàng</h3>
        <div className="address">
          {address ? (
            <div className="address_detail">
              <p>
                <strong>{address.name}</strong> | {address.phone}
              </p>
              <p>{address.detail}</p>
            </div>
          ) : (
            <p className="no_address">
              Chưa có địa chỉ nào. Vui lòng chọn hoặc thêm địa chỉ.
            </p>
          )}
          <button
            className="button_submit change_address_btn"
            onClick={handleOpenAddressModal}
          >
            Thay đổi địa chỉ
          </button>
        </div>
      </div>

      {/* Bảng sản phẩm (Giữ nguyên) */}
      <div className="product_table">
        <table>
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Giá tiền</th>
              <th>Số lượng</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td className="product-info">
                  <img src={p.img} alt="" />
                  <h4>{p.name}</h4>
                </td>
                <td>{p.price.toLocaleString()} đ</td>
                <td>{p.quantity}</td>
                <td>{(p.price * p.quantity).toLocaleString()} đ</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Thanh toán */}
      <div className="payment_summary">
        <h3>Thanh toán</h3>

        <div className="row">
          <p>Tổng tiền:</p>
          <span>{formatter(total)}</span>
        </div>

        <div className="row">
          <p>Giảm giá:</p>
          <span>-{formatter(discount)}</span>
        </div>

        <div className="row total">
          <p>Tổng cộng:</p>
          <span>{formatter(finalTotal)}</span>
        </div>
      </div>
      <button className="container order-btn button_submit ">
        Đặt hàng ngay
      </button>

      {/* 5. HIỂN THỊ COMPONENT MODAL Ở CUỐI COMPONENT CHÍNH */}
      <AddressModal
        isOpen={isAddressModalOpen}
        onClose={handleCloseAddressModal}
        // Bạn có thể truyền dữ liệu địa chỉ hiện tại xuống đây nếu cần chỉnh sửa
        // initialData={address}
      />
      {/* ---------------------------------------------------------------------- */}
    </div>
  );
};

export default memo(CheckoutPage);
