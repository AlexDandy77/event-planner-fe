/* eslint-disable react-refresh/only-export-components */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { RenderHookOptions, RenderOptions } from "@testing-library/react";
import { render, renderHook } from "@testing-library/react";

import type { MemoryRouterProps } from "react-router";
import { MemoryRouter } from "react-router";

const createTestQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });

const customRender = (
    ui: React.ReactNode,
    options?: Omit<RenderOptions, "queries"> & {
        routerProps?: MemoryRouterProps;
    },
): ReturnType<typeof render> => {
    const queryClient = createTestQueryClient();

    return {
        ...render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter {...options?.routerProps}>{ui}</MemoryRouter>
            </QueryClientProvider>,
        ),
    };
};

const customRenderHook = <T,>(
    hook: (props: unknown) => T,
    options?: RenderHookOptions<unknown>,
) => {
    const queryClient = createTestQueryClient();

    return {
        ...renderHook(hook, {
            wrapper: ({ children }) => (
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            ),
            ...options,
        }),
    };
};

export * from "@testing-library/react";
export { customRender, customRenderHook };
