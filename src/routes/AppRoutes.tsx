import { CalendarPage, LoginPage, RegisterPage } from "~/pages";
import { routePaths } from "~/utils/routePaths";

import { Link, Navigate, Route, Routes, useLocation } from "react-router";

const navigationItems = [
    { label: "Calendar", path: routePaths.Calendar },
    { label: "Login", path: routePaths.Login },
    { label: "Register", path: routePaths.Register },
];

const AppRoutes: React.FC = () => {
    const location = useLocation();

    return (
        <div className="min-h-dvh bg-slate-50 text-slate-950">
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                        className="text-lg font-bold text-slate-950"
                        to={routePaths.Calendar}
                    >
                        Event Planner
                    </Link>
                    <nav
                        aria-label="Primary navigation"
                        className="flex flex-wrap gap-2"
                    >
                        {navigationItems.map((item) => {
                            const isActive = location.pathname === item.path;

                            return (
                                <Link
                                    aria-current={isActive ? "page" : undefined}
                                    className={[
                                        "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                                        isActive
                                            ? "bg-emerald-100 text-emerald-900"
                                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
                                    ].join(" ")}
                                    key={item.path}
                                    to={item.path}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </header>
            <main className="mx-auto w-full max-w-6xl px-6 py-12">
                <Routes>
                    <Route
                        path={routePaths.Index}
                        element={<Navigate replace to={routePaths.Calendar} />}
                    />
                    <Route
                        path={routePaths.Calendar}
                        element={<CalendarPage />} 
                    />
                    <Route 
                        path={routePaths.Login}
                        element={<LoginPage />}  
                    />
                    <Route
                        path={routePaths.Register}
                        element={<RegisterPage />}
                    />
                    <Route
                        path="*"
                        element={<Navigate replace to={routePaths.Calendar} />}
                    />
                </Routes>
            </main>
        </div>
    );
};

export default AppRoutes;
