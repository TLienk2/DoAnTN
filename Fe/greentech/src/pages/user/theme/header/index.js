import { memo } from "react";
import "./style.scss";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineTwitter, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formater } from "utils/fomater";

const Header = () => {
    return (
        <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header_top_left">
                        <ul>
                            <li>
                                <AiOutlineMail />   Dtlienk2@gmail.com
                            </li>
                            <li>Miễn phí ship đơn từ {formater(200000)}</li>
                        </ul>
                    </div>
                    <div className="col-6 header_top_right">
                        <ul>
                            <li>
                                <Link to={""}>
                                    <AiOutlineFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineUser />
                                </Link>
                                <span>Đăng nhập</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>)
};
export default memo(Header);