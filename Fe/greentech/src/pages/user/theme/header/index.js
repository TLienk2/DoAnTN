import { memo, use, useEffect, useState } from "react";
import "./style.scss";
import {
  AiOutlineDownCircle,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineShoppingCart,
  AiOutlineTwitter,
  AiOutlineUpCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { formatter } from "utils/formatter";
import { ROUTERS } from "utils/router";
import Logo from "assets/user/images/Logo.jpg";
const Header = ({ onLoginClick, otherPropsIfAny }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isShowHumberger, setShowHumberger] = useState(false);
  const [isHome, setIsHome] = useState(location.pathname.length <= 1);
  const [isShowCategories, setShowCategories] = useState(isHome);
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
          path: "",
        },
        {
          name: "Thực phẩm tươi sống ",
          path: "",
        },
        {
          name: "Sản phẩm đông lạnh",
          path: "",
        },
        {
          name: "Nước sốt & Gia vị ",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Sản phẩm nổi bật",
          path: "",
        },
      ],
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
    },
  ]);
  const categories = [
    "Trái cây",
    "Thực phẩm tươi sống",
    "Sản phẩm đông lạnh & Ướp lạnh",
    "Nước sốt & Gia vị",
  ];
  useEffect(() => {
    const isHome = location.pathname.length <= 1;
    setIsHome(isHome);
    setShowCategories(isHome);
  }, [location]);

  return (
    <>
      <div
        className={`humberger_menu_overlay${isShowHumberger ? " active" : ""}`}
        onClick={() => setShowHumberger(false)}
      />
      <div
        className={`humberger_menu_wrapper${isShowHumberger ? " show" : ""}`}
      >
        <div className="header_logo">
          <img
            src="/img/Logo.png"
            alt="Logo"
            style={{ width: "200px", height: "auto", marginLeft: "-10px" }}
          />
        </div>
        <div className="humberger_menu_cart">
          <ul>
            <li>
              <Link to={""}>
                <AiOutlineShoppingCart /> <span>1</span>
              </Link>
            </li>
          </ul>
          <div className="header_cart_price">
            Giỏ hàng: <span>{formatter(1001230)}</span>
          </div>
        </div>
        <div className="humberger_menu_widget">
          <div className="header_top_right_auth">
            <Link to={""}>
              <BiUser /> Đăng nhập
            </Link>
          </div>
        </div>
        <div className="humberger_menu_nav">
          <ul>
            {menus.map((menu, menuKey) => (
              <li key={menuKey} to={menu.path}>
                <Link
                  to={menu.path}
                  onClick={() => {
                    const newMenus = [...menus];
                    newMenus[menuKey].isShowSubMenu =
                      !newMenus[menuKey].isShowSubMenu;
                    setMenus(newMenus);
                  }}
                >
                  {menu.name}
                  {menu.child &&
                    (menu.isShowSubMenu ? (
                      <AiOutlineDownCircle />
                    ) : (
                      <AiOutlineUpCircle />
                    ))}
                </Link>
                {menu.child && (
                  <ul
                    className={`header_menu_dropdown ${
                      menu.isShowSubMenu ? "show_submenu" : ""
                    }`}
                  >
                    {menu.child.map((childItem, childKey) => (
                      <li key={`${menuKey}-${childKey}`}>
                        <Link to={childItem.path}>{childItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="header_top_right_social">
          <Link to={""}>
            <AiOutlineFacebook />
          </Link>
          <Link to={""}>
            <AiOutlineInstagram />
          </Link>
          <Link to={""}>
            <AiOutlineLinkedin />
          </Link>
          <Link to={""}>
            <AiOutlineTwitter />
          </Link>
        </div>
        <div className="humberger_menu_contact">
          <ul>
            <li>
              <AiOutlineMail /> Dtlienk2@gmail.com
            </li>
            <li>Miễn phí đơn từ {formatter(200000)}</li>
          </ul>
        </div>
      </div>

      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 header_top_left">
              <ul>
                <li>
                  <AiOutlineMail /> Dtlienk2@gmail.com
                </li>
                <li>Miễn phí ship đơn từ {formatter(200000)}</li>
              </ul>
            </div>
            <div className="col-lg-6 header_top_right">
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
                <li onClick={onLoginClick}>
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
          <div className="col-lg-3">
            <div className="header_logo">
              <Link to={"/"}>
                <img
                  src="/img/Logo.png"
                  alt="Logo"
                  style={{ width: "220px", height: "auto" }}
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
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
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header_cart">
              <div className="header_cart_price">
                <span>{formatter(100200)}</span>
              </div>
              <ul>
                <li>
                  <Link to={ROUTERS.USER.CART}>
                    <AiOutlineShoppingCart />
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="humberger_open">
              <AiOutlineMenu
                onClick={() => {
                  setShowHumberger(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero_category_container">
          <div className="col-lg-3 col-sm-12 col-xs-12 col-md-12 hero_category">
            <div
              className="hero_category_all"
              onClick={() => setShowCategories(!isShowCategories)}
            >
              <AiOutlineMenu />
              Danh sách sản phẩm
            </div>
            {isShowCategories && (
              <ul className={isShowCategories ? "" : "hidden"}>
                {categories.map((category, key) => (
                  <li key={key}>
                    <Link to={ROUTERS.USER.PRODUCTS}>{category}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-lg-9 col-sm-12 col-xs-12 col-md-12 hero_search_container">
            <div className="hero_search">
              <div className="hero_search_form">
                <form>
                  <input type="text" placeholder="Bạn cần tìm gì?" />
                  <button type="submit" className="site-btn">
                    Tìm kiếm
                  </button>
                </form>
              </div>
              <div className="hero_search_phone">
                <div className="hero_search_phone_icon">
                  <AiOutlinePhone />
                </div>
                <div className="hero_search_phone_text">
                  <p>0123.456.789</p>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            {isHome && (
              <div className="hero_item">
                <div className="hero_text">
                  <img
                    src={Logo}
                    alt="Logo Green Tech Food"
                    className="hero_logo"
                  />
                  <span>GREEN TECH FOOD</span>
                  <h2>
                    Rau củ
                    <br /> tươi sạch
                  </h2>
                  <p>từ nông trại Dalat Hasfarm</p>
                  <Link to="" className="primary-btn">
                    Mua ngay
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Header);
