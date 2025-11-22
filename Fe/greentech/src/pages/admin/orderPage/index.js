import React, { useState, memo } from "react";
import { Plus, Filter } from "lucide-react";
import MenuBar from "../common/menuBar";
import AdminHeader from "../common/header";
import "./style.scss";
import avt from "assets/admin/avt.png";
// Chú ý: Nên thay thế react-icons/ai bằng thư viện sẵn có như lucide-react hoặc icon tĩnh
import { AiOutlinePlusSquare, AiOutlineSearch } from "react-icons/ai";
import { formatter } from "utils/formatter";
import Pagination from "component/navigate";

const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  const lower = string.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

const INITIAL_ORDERS = [
  {
    id: "FH423451",
    customer: { name: "NK Quốc", email: "nkquoc@gmail.com" },
    phone: "093xxxxx024",
    total: 999500,
    status: "Chờ xác nhận",
  },
  {
    id: "FH453894",
    customer: { name: "Admin Mod", email: "admin@gtf.org" },
    phone: "093xxxxx613",
    total: 640000,
    status: "Đã từ chối",
  },
  {
    id: "FH545893",
    customer: { name: "Admin Mod", email: "admin@gtf.org" },
    phone: "093xxxxx613",
    total: 249700,
    status: "Đã xác nhận",
  },
  {
    id: "FH227771",
    customer: { name: "NK Quốc", email: "nkquoc@gmail.com" },
    phone: "093xxxxx024",
    total: 404456,
    status: "Đã hủy",
  },
  {
    id: "FH886614",
    customer: { name: "Admin Mod", email: "admin@gtf.org" },
    phone: "093xxxxx613",
    total: 151600,
    status: "Hoàn thành",
  },
  {
    id: "FH224200-1",
    customer: { name: "Admin Mod", email: "admin@gtf.org" },
    phone: "093xxxxx613",
    total: 601800,
    status: "Đang vận chuyển",
  },
  {
    id: "FH224200-2",
    customer: { name: "Admin Mod", email: "admin@gtf.org" },
    phone: "093xxxxx613",
    total: 601800,
    status: "Đang vận chuyển",
  },
  {
    id: "FH224200-3",
    customer: { name: "Admin Mod", email: "admin@gtf.org" },
    phone: "093xxxxx613",
    total: 601800,
    status: "Đang vận chuyển",
  },
  {
    id: "FH224200-4",
    customer: { name: "Admin Mod", email: "admin@gtf.org" },
    phone: "093xxxxx613",
    total: 601800,
    status: "Đang vận chuyển",
  },
  {
    id: "FH224200-5",
    customer: { name: "Admin Mod", email: "admin@gtf.org" },
    phone: "093xxxxx613",
    total: 601800,
    status: "Đang vận chuyển",
  },
  {
    id: "FH224200-6", // Đơn hàng thứ 11
    customer: { name: "Admin Mod", email: "admin@gtf.org" },
    phone: "093xxxxx613",
    total: 601800,
    status: "Đang vận chuyển",
  },
];

// Các trạng thái cần hiển thị dropdown để chỉnh sửa
const DROPDOWN_STATUSES = [
  "đã xác nhận",
  "đang vận chuyển",
  "đã hủy",
  "đã từ chối",
];

// Hàm ánh xạ trạng thái sang class CSS
const getStatusClassName = (status) => {
  const normalizedStatus = status.toLowerCase();
  switch (normalizedStatus) {
    case "chờ xác nhận":
      return "status-cho-xac-nhan";
    case "hoàn thành":
      return "status-hoan-thanh";
    case "đã xác nhận":
      return "status-da-xac-nhan";
    case "đang vận chuyển":
      return "status-dang-van-chuyen";
    case "đã hủy":
      return "status-da-huy";
    case "đã từ chối":
      return "status-da-tu-choi";
    default:
      return "status-default";
  }
};
const StatusBadge = ({ status }) => (
  <span className={`status-badge ${getStatusClassName(status)}`}>
    {capitalizeFirstLetter(status)}{" "}
  </span>
);
// Component Dropdown (Giản lược)
const StatusDropdown = ({ currentStatus, orderId, onStatusChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const allStatuses = [
    "Chờ xác nhận",
    "Đã xác nhận",
    "Đang vận chuyển",
    "Hoàn thành",
    "Đã từ chối",
    "Đã hủy",
  ];

  const handleSelectStatus = (newStatus) => {
    onStatusChange(orderId, newStatus);
    setIsOpen(false);
  };

  return (
    <div className="status-dropdown-wrapper">
      <span
        className={`status-badge status-dropdown-trigger ${getStatusClassName(
          currentStatus
        )}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {capitalizeFirstLetter(currentStatus)}
        <span className="dropdown-arrow"></span>
      </span>

      {isOpen && (
        <div className="status-dropdown-menu">
          {allStatuses.map((status) => (
            <div
              key={status}
              className={`dropdown-item ${
                status.toLowerCase() === currentStatus.toLowerCase()
                  ? "current"
                  : ""
              }`}
              onClick={() => handleSelectStatus(status)}
            >
              {status}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const OrderPage = () => {
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const ordersPerPage = 10;

  // Trạng thái cho trang hiện tại
  const [currentPage, setCurrentPage] = useState(1);

  const handleLogout = () => {
    alert("Thực hiện Đăng xuất...");
  };

  const handleStatusUpdate = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const filteredOrders = orders.filter((order) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const matchesSearch =
      order.id.toLowerCase().includes(lowerCaseSearchTerm) ||
      order.customer.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      order.phone.toLowerCase().includes(lowerCaseSearchTerm);

    const matchesStatus =
      statusFilter === "all" ||
      order.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  // TÍNH TOÁN: Tổng số trang cần thiết (Count prop cho MUI)
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  // LOGIC CẮT MẢNG: Tính toán chỉ mục (index) của đơn hàng đầu tiên và cuối cùng
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;

  // Cắt mảng để chỉ hiển thị đơn hàng của trang hiện tại
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  // Đặt lại trang về 1 khi có thay đổi Filter hoặc Search
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  const adminInfo = {
    role: "ADMIN MOD",
    email: "admin@gmail.com",
    avatarUrl: avt, // Sử dụng avt đã import
  };

  const StatusCell = ({ order }) => {
    const isDropdown = DROPDOWN_STATUSES.includes(order.status.toLowerCase());

    if (isDropdown) {
      return (
        <StatusDropdown
          currentStatus={order.status}
          orderId={order.id}
          onStatusChange={handleStatusUpdate}
        />
      );
    } else {
      return <StatusBadge status={order.status} />;
    }
  };

  return (
    <div className="admin-layout">
      <MenuBar className="menu_bar" />
      <div className="admin-content">
        <AdminHeader
          adminInfo={adminInfo}
          onLogout={handleLogout}
          className="admin_header"
        />

        {/* Filter Bar */}
        <div className="filter-bar">
          <div className="search-box">
            <AiOutlineSearch className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Tìm kiếm mã đơn, tên khách, số điện thoại"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="dropdown_select"
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="chờ xác nhận">Chờ xác nhận</option>
            <option value="đã xác nhận">Đã xác nhận</option>
            <option value="đang vận chuyển">Đang vận chuyển</option>
            <option value="hoàn thành">Hoàn thành</option>
            <option value="đã hủy">Đã hủy</option>
            <option value="đã từ chối">Đã từ chối</option>
          </select>

          <input type="date" placeholder="Từ ngày" className="dropdown_date" />
          <input type="date" placeholder="Đến ngày" className="dropdown_date" />

          <button className="button_submit">
            <AiOutlinePlusSquare className="icon_button" size={20} />
            Tạo đơn hàng mới
          </button>
        </div>

        {/* Order Table */}
        <div className="order-table-container">
          <table className="order-table">
            <thead>
              <tr>
                <th>Mã đơn</th>
                <th>Tên khách hàng</th>
                <th>Số điện thoại</th>
                <th>Tổng thanh toán</th>
                <th>Trạng thái đơn hàng</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {/* SỬ DỤNG currentOrders ĐÃ ĐƯỢC CẮT MẢNG */}
              {currentOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>
                    <div className="customer-info">
                      <div className="name">{order.customer.name}</div>
                      <div className="email">{order.customer.email}</div>
                    </div>
                  </td>
                  <td>{order.phone}</td>
                  <td>{formatter(order.total)}</td>

                  {/* CỘT TRẠNG THÁI */}
                  <td>
                    <StatusCell order={order} />
                  </td>
                  <td>
                    {order.status.toLowerCase() === "chờ xác nhận" ? (
                      <button className="action-btn btn-duyet">Duyệt</button>
                    ) : (
                      <button className="action-btn btn-xem-chi-tiet">
                        Xem chi tiết
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4. CHỈ HIỂN THỊ PHÂN TRANG KHI CÓ > 1 TRANG */}
        {totalPages > 1 && (
          <div className="pagination">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              paginate={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(OrderPage);
