import { memo, useState } from "react";
import "./style.scss";
import { formatter } from "utils/formatter";
import Quantity from "component/Quantity";
import cat5Img from "assets/user/images/cat5.jpg";
import cat1Img from "assets/user/images/cat1.jpg";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";

const ShoppingCartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "THĂN BÒ (250g)",
      img: cat5Img,
      price: 406000,
      quantity: 2,
      checked: false,
    },
    {
      id: 2,
      name: "Cá hồi (250g)",
      img: cat1Img,
      price: 37500,
      quantity: 1,
      checked: false,
    },
  ]);

  // Toggle chọn sản phẩm
  const handleCheck = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // Tăng / giảm số lượng
  const handleQuantity = (id, value) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, quantity: value } : item))
    );
  };

  // Xóa sản phẩm
  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Tổng tiền theo từng dòng
  const getItemTotal = (item) => item.price * item.quantity;

  // Tổng thanh toán
  const totalPayment = cart.reduce((sum, item) => sum + getItemTotal(item), 0);

  return (
    <div className="container shopping-cart-page">
      <h2 className="title">Giỏ hàng của bạn</h2>
      <p>Bạn đang có {cart.length} sản phẩm trong giỏ hàng!</p>

      {/* Bảng giỏ hàng */}
      <div className="table_cart">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Sản phẩm</th>
              <th>Giá tiền</th>
              <th>Số lượng</th>
              <th>Tổng tiền</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheck(item.id)}
                  />
                </td>

                <td className="product-info">
                  <img src={item.img} alt="" />
                  <h4>{item.name}</h4>
                </td>

                <td>{formatter(item.price)}</td>

                <td className="quantity">
                  <Quantity
                    quantity={item.quantity}
                    onChange={(value) => handleQuantity(item.id, value)}
                  />
                </td>

                <td>{formatter(getItemTotal(item))}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Thanh toán */}
      <div className=" payment-box ">
        <h2>Thanh toán</h2>
        <div className="row payment-info">
          <div className="col-lg-6">
            <p>Tổng thanh toán</p>
          </div>
          <div className="col-lg-6 text-end">
            <p>{formatter(totalPayment)}</p>
          </div>
        </div>
        <div className="shopping_continue">
          <div className="col-lg-6">
            <p>Mã giảm giá</p>
          </div>
          <div className="col-lg-6 shopping_discount">
            <input type="text" placeholder="Nhập mã giảm giá"></input>
            <button type="button" className="button_submit">
              Áp dụng
            </button>
          </div>
        </div>

        <div className="note">
          <input type="text" placeholder="Ghi chú"></input>
        </div>

        <div className="row payment-info">
          <div className="col-lg-6">
            <p>Giảm giá</p>
          </div>
          <div className="col-lg-6 text-end">
            <p>{formatter(totalPayment)}</p>
          </div>
        </div>
        <div className="row payment-info">
          <div className="col-lg-6">
            <h3>Tổng thanh toán</h3>
          </div>
          <div className="col-lg-6 text-end">
            <h3>{formatter(totalPayment)}</h3>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="container order-btn button_submit"
        onClick={() => navigate(ROUTERS.USER.CHECKOUT)}
      >
        Đặt hàng ngay!
      </button>
    </div>
  );
};

export default memo(ShoppingCartPage);
