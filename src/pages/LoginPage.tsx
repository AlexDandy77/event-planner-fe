import { routePaths } from "~/utils/routePaths";

import { Link } from "react-router";

const LoginPage: React.FC = () => {
    return (
        <section className="space-y-4">
            <p className="text-sm font-semibold uppercase text-emerald-700">
                Account
            </p>
            <h1 className="text-4xl font-bold text-slate-950">Login</h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
                Login page placeholder. Authentication forms and API integration
                are scheduled for Week 5.
            </p>
            <Link
                className="inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                to={routePaths.Register}
            >
                Create an account
            </Link>
        </section>
    );
};

export default LoginPage;
