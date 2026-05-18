import { render } from "@testing-library/react";

import DashboardShell from "./DashboardShell";

describe("<DashboardShell />", () => {
    it("should render the dashboard regions", () => {
        const { getByLabelText } = render(<DashboardShell />);

        expect(getByLabelText("Calendar sidebar")).toBeInTheDocument();
        expect(getByLabelText("Calendar header")).toBeInTheDocument();
        expect(getByLabelText("Calendar workspace")).toBeInTheDocument();
    });

    it("should render the requested header and sidebar controls", () => {
        const { getAllByText, getByLabelText, getByRole } = render(
            <DashboardShell />,
        );

        expect(getByRole("button", { name: "Logout" })).toBeInTheDocument();
        expect(getByRole("button", { name: "Year" })).toBeInTheDocument();
        expect(getByLabelText("Search events")).toBeInTheDocument();
        expect(getAllByText("MON")[0]).toBeInTheDocument();
    });
});
