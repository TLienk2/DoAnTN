import React, { useState } from "react";
import { memo } from "react";
import "./style.scss";
import Logo from "assets/admin/logo.webp";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ROUTERS } from "utils/router";
import { useNavigate } from "react-router-dom";
const LoginPage = ({ isOpen, onClose, onLoginSuccess }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  if (!isOpen) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "");

      if (numericValue.length > 10) {
        return;
      }

      let finalValue = numericValue;
      if (numericValue.length > 0 && !numericValue.startsWith("0")) {
        finalValue = "0" + numericValue.substring(1);
      }
      setFormData((prev) => ({
        ...prev,
        [name]: finalValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const ADMIN_PHONE = "0123456789";
    const ADMIN_PASSWORD = "Admin123@";

    if (
      formData.phone === ADMIN_PHONE &&
      formData.password === ADMIN_PASSWORD
    ) {
      console.log("Đăng nhập Admin thành công!");
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } else {
      console.log("Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản.");
      onClose();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={Logo} alt="GREEN TECH FOOD Logo" className="logo-img " />

        <h3 className="modal-title">Đăng nhập</h3>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="phone">Số điện thoại *</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Số điện thoại"
              required
              maxLength="10"
              inputMode="numeric"
            />
          </div>

          {/* Trường Mật khẩu */}
          <div className="form-group">
            <label htmlFor="password">Mật khẩu *</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Nhập mật khẩu"
                required
              />
              {/* Nút hiển thị/ẩn mật khẩu */}
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
            </div>
          </div>

          {/* Tùy chọn nhớ tài khoản & Quên mật khẩu */}
          <div className="options-row">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Nhớ tài khoản</label>
            </div>
            <a href="#" className="forgot-password">
              Quên mật khẩu?
            </a>
          </div>

          {/* Nút Đăng nhập */}
          <button type="submit" className="login-btn button_submit">
            Đăng nhập ngay!
          </button>

          {/* Đăng ký */}
          <p className="signup-link">
            Bạn chưa có tài khoản?{" "}
            <a href="#" className="register-now">
              Đăng ký ngay!
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default memo(LoginPage);
