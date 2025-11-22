import { memo, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import LoginPage from "component/loginPage";
import { ROUTERS } from "utils/router";
import { useNavigate } from "react-router-dom";

const MasterLayout = ({ children, ...props }) => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const handleOpenLoginModal = () => setIsLoginModalOpen(true);
  const handleCloseLoginModal = () => setIsLoginModalOpen(false);
  const handleAdminLoginSuccess = () => {
    setIsLoginModalOpen(false);
    navigate(ROUTERS.ADMIN.ORDER);
  };
  return (
    <div {...props}>
      <Header onLoginClick={handleOpenLoginModal} />
      <LoginPage
        isOpen={isLoginModalOpen}
        onClose={handleCloseLoginModal}
        onLoginSuccess={handleAdminLoginSuccess}
      />
      {children}
      <Footer />
    </div>
  );
};

export default memo(MasterLayout);
