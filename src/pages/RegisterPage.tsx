import { routePaths } from "~/utils/routePaths";

import { Link } from "react-router";

const RegisterPage: React.FC = () => {
    return (
        <section className="space-y-4">
            <p className="text-sm font-semibold uppercase text-emerald-700">
                Account
            </p>
            <h1 className="text-4xl font-bold text-slate-950">Register</h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
                Register page placeholder. The final form flow will be connected
                when authentication endpoints are introduced.
            </p>
            <Link
                className="inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                to={routePaths.Login}
            >
                Already have an account?
            </Link>
        </section>
    );
};

export default RegisterPage;
