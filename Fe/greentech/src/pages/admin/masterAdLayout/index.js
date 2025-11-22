import { memo, useState } from "react";
import Footer from "../../user/theme/footer";
import { useLocation } from "react-router-dom";
import { ROUTERS } from "utils/router";
import Header from "pages/user/theme/header";
import LoginPage from "../../../component/loginPage";
// Ví dụ: src/pages/user/theme/MasterLayout/index.js (Hoặc MasterAdLayout)

const MasterAdLayout = ({ children }) => {
  return <>{children}</>;
};

export default memo(MasterAdLayout);
