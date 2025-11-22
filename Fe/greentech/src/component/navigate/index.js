import React, { memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./style.scss";

/**
 * @param {number} currentPage - Trang hiện tại
 * @param {number} totalPages - Tổng số trang
 * @param {function} paginate - Hàm xử lý chuyển trang (nhận vào số trang mới)
 */
const Pagination = ({ currentPage, totalPages, paginate }) => {
  if (totalPages <= 1) {
    return null;
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      paginate(newPage);
    }
  };

  return (
    <div className="custom-pagination-controls">
      <div className="pagination-info">
        <span className="pagination-text">Trang</span>
        <div className="pagination-current-page-box">{currentPage}</div>
        <span className="pagination-text">trên {totalPages}</span>
      </div>

      <div className="pagination-actions">
        {/* Nút Trang Trước */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-arrow-btn"
          aria-label="Trang trước"
        >
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>

        {/* Nút Trang Sau */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-arrow-btn"
          aria-label="Trang sau"
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default memo(Pagination);
