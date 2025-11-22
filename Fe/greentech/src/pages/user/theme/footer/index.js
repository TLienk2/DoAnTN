import { memo } from "react";
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineLinkedin,
    AiOutlineClockCircle,
    AiOutlinePhone,
    AiOutlineMail,
    AiOutlineEnvironment,
} from "react-icons/ai";
import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    {/* --- Cột 1: Logo & mô tả --- */}
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="footer-col">
                            <h3 className="footer-logo">Logo</h3>
                            <p className="footer-desc">
                                Lorem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
                                diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
                                muvaning, och pesask vyrisat. Viktiga poddradio har un mad och
                                inde.
                            </p>
                            <div className="footer-social">
                                <a href="#"><AiOutlineFacebook /></a>
                                <a href="#"><AiOutlineInstagram /></a>
                                <a href="#"><AiOutlineTwitter /></a>
                                <a href="#"><AiOutlineLinkedin /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        {/* --- Cột 2: Hỗ trợ khách hàng --- */}
                        <div className="footer-col">
                            <h4>Hỗ trợ khách hàng</h4>
                            <ul>
                                <li><a href="#">Giới thiệu</a></li>
                                <li><a href="#">Liên hệ</a></li>
                                <li><a href="#">Chính sách đổi trả</a></li>
                                <li><a href="#">Chính sách bảo mật</a></li>
                                <li><a href="#">Chính sách giao hàng</a></li>
                                <li><a href="#">Chính sách tích điểm dành cho thành viên</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        {/* --- Cột 3: Liên hệ --- */}
                        <div className="footer-col">
                            <h4>Liên hệ</h4>
                            <ul className="footer-contact">
                                <li>
                                    <AiOutlineClockCircle /> Thời gian hoạt động: 07:00 AM - 22:00 PM
                                </li>
                                <li>
                                    <AiOutlineEnvironment /> 124 Nguyễn Văn Thoại, Sơn Trà, Đà Nẵng
                                </li>
                                <li>
                                    <AiOutlinePhone /> (+84) 934743026
                                </li>
                                <li>
                                    <AiOutlineMail /> info@greenmark.vn
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);
