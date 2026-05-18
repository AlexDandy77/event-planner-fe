import { BrowserRouter } from "react-router";

import AppRoutes from "./AppRoutes";

function AppRouter() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default AppRouter;
