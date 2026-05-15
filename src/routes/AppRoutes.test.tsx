import { customRender } from "~/utils";

import AppRoutes from "./AppRoutes";

describe("<AppRoutes />", () => {
    it.each([
        ["/calendar", "Calendar"],
        ["/login", "Login"],
        ["/register", "Register"],
    ])("should render %s", (path, heading) => {
        const { getByRole } = customRender(<AppRoutes />, {
            routerProps: { initialEntries: [path] },
        });

        expect(getByRole("heading", { name: heading })).toBeInTheDocument();
    });

    it("should redirect the index route to calendar", () => {
        const { getByRole } = customRender(<AppRoutes />, {
            routerProps: { initialEntries: ["/"] },
        });

        expect(getByRole("heading", { name: "Calendar" })).toBeInTheDocument();
    });
});
