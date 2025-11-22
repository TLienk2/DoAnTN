import React, { useState, memo } from "react";
import Logo from "assets/admin/logo.webp";
import "./style.scss";
import {
  AiOutlineBarChart,
  AiOutlineBell,
  AiOutlineComment,
  AiOutlineFileText,
  AiOutlineGift,
  AiOutlineSetting,
  AiOutlineShareAlt,
  AiOutlineTags,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
const menuItems = [
  {
    title: "Thống kê & Báo cáo",
    icon: AiOutlineBarChart, // KHÔNG dùng JSX literal, truyền component Class/Function
    path: "dashboard",
  },
  {
    title: "Quản lý đơn hàng",
    icon: AiOutlineFileText,
    path: "order-management",
  },
  {
    title: "Quản lý tin tức",
    icon: AiOutlineFileText, // Dùng lại icon File Text
    path: "news-management",
  },
  {
    title: "Quản lý nhân viên",
    icon: AiOutlineUsergroupAdd,
    path: "staff-management",
  },
  {
    title: "Quản lý sản phẩm",
    icon: AiOutlineTags,
    path: "product-management",
  },
  {
    title: "Quản lý khách hàng",
    icon: AiOutlineUser,
    path: "customer-management",
  },
  {
    title: "Voucher/Ưu đãi",
    icon: AiOutlineGift,
    path: "vouchers-promotions",
  },
  {
    title: "Quản lý đánh giá",
    icon: AiOutlineComment,
    path: "review-management",
  },
  {
    title: "Phân quyền",
    icon: AiOutlineShareAlt,
    path: "permissions",
  },
  {
    title: "Thông báo",
    icon: AiOutlineBell,
    path: "notifications",
  },
  {
    title: "Cài đặt",
    icon: AiOutlineSetting,
    path: "settings",
  },
];

const MenuBar = () => {
  const [activePath, setActivePath] = useState("order");
  const handleNavigate = (path) => {
    setActivePath(path);
    console.log(`Điều hướng đến: /admin/${path}`);
  };

  return (
    <div className="admin-sidebar">
      <img src={Logo} alt="Logo" className="logo" />
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <a
              href="#"
              className={activePath === item.path ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleNavigate(item.path);
              }}
            >
              <span className="icon">
                <item.icon size={20} />
              </span>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(MenuBar);
