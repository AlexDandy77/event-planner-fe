import { BrowserRouter } from "react-router";

import AppRoutes from "./AppRoutes";

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};

export default AppRouter;
