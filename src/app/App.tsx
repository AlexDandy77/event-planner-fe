import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "~/api/queryClient";
import { AppRouter } from "~/routes";

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AppRouter />
        </QueryClientProvider>
    );
};

export default App;
