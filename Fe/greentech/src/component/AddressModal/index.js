import React, { useState } from "react";
import "./style.scss";
import { AiFillCloseSquare } from "react-icons/ai";

const countries = [{ code: "VN", name: "Việt Nam" }];
const dummyOptions = ["Vui lòng chọn", "Hải Châu", "Hòa Cường Bắc"];

const AddressModal = ({ isOpen, onClose, initialData = {} }) => {
  // State để lưu trữ dữ liệu form
  const [formData, setFormData] = useState({
    fullName: initialData.fullName || "",
    phone: initialData.phone || "(+84) 989 897 6281", // Giữ nguyên theo ảnh mẫu
    country: initialData.country || "Việt Nam",
    province: initialData.province || "",
    district: initialData.district || "",
    ward: initialData.ward || "",
    specificAddress:
      initialData.specificAddress ||
      "146 Nguyễn Văn Linh, Hải Châu, Đà Nẵng, Việt Nam", // Giữ nguyên theo ảnh mẫu
    isDefault: initialData.isDefault || true,
  });

  if (!isOpen) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu lưu:", formData);
    alert("Đã lưu thay đổi!");
    onClose(); // Đóng modal sau khi lưu
  };

  // Component nhỏ cho Input Field để giữ mã gọn gàng
  const InputField = ({
    label,
    name,
    value,
    placeholder,
    required = false,
    type = "text",
    readOnly = false,
  }) => (
    <div className="form-group">
      <label>
        {label}
        {required && <span className="required">*</span>}
      </label>
      {name === "phone" ? (
        <div className="input-with-flag">
          <span className="flag-icon">🇻🇳 (+84)</span>
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
          />
        </div>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          className={readOnly ? "input-readonly" : ""}
        />
      )}
    </div>
  );

  // Component nhỏ cho Select Field
  const SelectField = ({ label, name, value, options, required = false }) => (
    <div className="form-group">
      <label>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <div className="select-wrapper">
        <select
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Thêm địa chỉ mới</h3>
          <button className="close-button" onClick={onClose}>
            <AiFillCloseSquare />
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            {/* Hàng 1: Họ và tên | Quốc gia */}
            <div className="form-row">
              <InputField
                label="Họ và tên"
                name="fullName"
                value={formData.fullName}
                placeholder="Vui lòng nhập"
                required={true}
              />
              <SelectField
                label="Quốc gia"
                name="country"
                value={formData.country}
                options={countries.map((c) => c.name)}
                required={true}
              />
            </div>

            {/* Hàng 2: Số điện thoại | Tỉnh/Thành */}
            <div className="form-row">
              <InputField
                label="Số điện thoại"
                name="phone"
                value={formData.phone}
                required={true}
              />
              <SelectField
                label="Tỉnh/Thành"
                name="province"
                value={formData.province}
                options={dummyOptions}
                required={true}
              />
            </div>

            {/* Hàng 3: Quận/Huyện | Phường/Xã */}
            <div className="form-row">
              <SelectField
                label="Quận/Huyện"
                name="district"
                value={formData.district}
                options={dummyOptions}
                required={true}
              />
              <SelectField
                label="Phường/Xã"
                name="ward"
                value={formData.ward}
                options={dummyOptions}
                required={true}
              />
            </div>

            {/* Hàng 4: Địa chỉ cụ thể */}
            <InputField
              label="Địa chỉ cụ thể"
              name="specificAddress"
              value={formData.specificAddress}
              required={true}
            />

            {/* Checkbox */}
            <div className="checkbox-group">
              <input
                type="checkbox"
                name="isDefault"
                id="isDefault"
                checked={formData.isDefault}
                onChange={handleChange}
              />
              <label htmlFor="isDefault">Đặt làm địa chỉ mặc định</label>
            </div>

            {/* Nút lưu */}
            <div className="modal-footer">
              <button type="submit" className="save-button button_submit">
                Thêm địa chỉ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
