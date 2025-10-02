import { memo } from "react";
import HomePage from "../../homePage";
import Header from "../header"
import Footer from "../footer"

const MasterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default memo(MasterLayout);