export const ADMIN_PATH = "/admin";
export const ROUTERS = {
  USER: {
    HOME: "",
    PROFILE: "/profile",
    PRODUCTS: "/products",
    PRODUCT_DETAIL: "/products/:id",
    CART: "/cart",
    CHECKOUT: "/checkout",
    NEWS: "/news",
    NEWS_DETAIL: "/news/:id",
    ABOUT_US: "/about-us",
    CONTACT_US: "/contact-us",
  },
  ADMIN: {
    LOGIN: `${ADMIN_PATH}/login`,
    ORDER: `${ADMIN_PATH}/order`,
  },
};
