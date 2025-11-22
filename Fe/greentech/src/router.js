import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/user/homePage";
import { ADMIN_PATH, ROUTERS } from "./utils/router";
import MasterLayout from "./pages/user/theme/masterLayout";
import ProfilePage from "./pages/user/profilePage";
import ProductsPage from "pages/user/productsPage";
import NewsPage from "pages/user/newsPage";
import ProductDetailPage from "pages/user/productDetailPage";
import ShoppingCartPage from "pages/user/shoppingCart";
import CheckoutPage from "pages/user/checkoutPage";
import LoginPage from "component/loginPage";
import MasterAdLayout from "pages/admin/masterAdLayout";
import OrderPage from "pages/admin/orderPage";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      element: <HomePage />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      element: <ProfilePage />,
    },
    {
      path: ROUTERS.USER.PRODUCTS,
      element: <ProductsPage />,
    },
    {
      path: ROUTERS.USER.PRODUCT_DETAIL,
      element: <ProductDetailPage />,
    },
    {
      path: ROUTERS.USER.CART,
      element: <ShoppingCartPage />,
    },
    {
      path: ROUTERS.USER.CHECKOUT,
      element: <CheckoutPage />,
    },
    {
      path: ROUTERS.USER.NEWS,
      element: <NewsPage />,
    },
  ];
  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.element} />
        ))}
      </Routes>
    </MasterLayout>
  );
};
const renderAdminRouter = () => {
  const adminRouters = [
    {
      path: ROUTERS.ADMIN.ORDER,
      element: <OrderPage />,
    },
  ];
  return (
    <MasterAdLayout>
      <Routes>
        {adminRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.element} />
        ))}
      </Routes>
    </MasterAdLayout>
  );
};
const RouterCustom = () => {
  const location = useLocation();
  const isAdminRouters = location.pathname.startsWith(ADMIN_PATH);
  return isAdminRouters ? renderAdminRouter() : renderUserRouter();
};

export default RouterCustom;
