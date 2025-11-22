import { memo, useState } from "react";
import "./style.scss";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineShoppingCart, AiOutlineTwitter, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formater } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {
    const [menus, setMenus] = useState([
        {
            name: "Trang chủ ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Sản phẩm ",
            path: ROUTERS.USER.PRODUCT,
            isShowSubMenu: false,
            child: [
                {
                    name: "Trái cây ",
                    path: ""
                },
                {
                    name: "Thực phẩm tươi sống ",
                    path: ""
                },
                {
                    name: "Sản phẩm đông lạnh",
                    path: ""
                },
                {
                    name: "Nước sốt & Gia vị ",
                    path: ""
                },
                {
                    name: "Rau củ",
                    path: ""
                },
                {
                    name: "Sản phẩm nổi bật",
                    path: ""
                }
            ]
        },
        {
            name: "Tin tức ",
            path: ROUTERS.USER.NEWS,
        },
        {
            name: "Giới thiệu",
            path: ROUTERS.USER.ABOUT_US,
        },
        {
            name: "Liên hệ với chúng tôi",
            path: ROUTERS.USER.CONTACT_US,
        }
    ]);
    return (
        <>
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
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header_logo">
                            <Link to={"/"}>
                                <img src="/img/Logo.png" alt="Logo" style={{ width: "180px", height: "auto" }} />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header_menu">
                            <ul>
                                {menus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menu?.path}>{menu?.name}</Link>
                                        {menu.child && (
                                            <ul className="header_menu_dropdown">
                                                {menu.child.map((childItem, childKey) => (
                                                    <li key={`${menuKey}-${childKey}`}>
                                                        <Link to={childItem.path}>{childItem.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3">
                        <div className="header_cart">
                            <div className="header_cart_price">
                                <span>{formater(100200)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineShoppingCart />
                                        <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">trai</div>
                    <div className="col-xl-9">phai</div>

                </div>
            </div>
        </>
    );
};
export default memo(Header);