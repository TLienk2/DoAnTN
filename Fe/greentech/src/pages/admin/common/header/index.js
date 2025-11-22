import React, { useState, useRef, useEffect, memo } from "react";
import {
  AiOutlineUser,
  AiOutlineLogout,
  AiOutlineCaretDown,
} from "react-icons/ai"; // Icons cho dropdown và caret
import "./style.scss";
import Avt from "assets/admin/avt.png";
const AdminHeader = ({ adminInfo, onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleInfoClick = () => {
    alert("Chuyển đến trang Thông tin tài khoản");
    setIsDropdownOpen(false);
  };

  return (
    <header className="admin-header">
      <div className="header-content">
        <div
          className="admin-info-wrapper"
          ref={dropdownRef}
          onClick={handleToggleDropdown}
        >
          <div className="admin-details">
            <span className="admin-role">ADMIN</span>
            <span className="admin-email">{adminInfo.email}</span>
          </div>
          {adminInfo && adminInfo.avatarUrl ? (
            <img
              src={adminInfo.avatarUrl}
              alt="Admin Avatar"
              className="admin-avatar"
            />
          ) : (
            <img src={Avt} alt="Default Avatar" className="admin-avatar" />
          )}
          <AiOutlineCaretDown
            className={`dropdown-caret ${isDropdownOpen ? "open" : ""}`}
          />

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="admin-dropdown-menu">
              <div className="dropdown-item" onClick={handleInfoClick}>
                <AiOutlineUser size={18} />
                Thông tin tài khoản
              </div>
              <div className="dropdown-item logout" onClick={onLogout}>
                <AiOutlineLogout size={18} />
                Đăng xuất
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default memo(AdminHeader);
