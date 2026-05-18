const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const calendarRows = Array.from({ length: 6 }, (_, rowIndex) => rowIndex);
const calendarColumns = Array.from(
    { length: 7 },
    (_, columnIndex) => columnIndex,
);

type ChevronIconProps = {
    direction: "left" | "right";
};

function ChevronIcon({ direction }: ChevronIconProps) {
    const path = direction === "left" ? "M10 12L6 8l4-4" : "M6 4l4 4-4 4";

    return (
        <svg
            aria-hidden="true"
            className="size-4"
            fill="none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={path}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
}

function DashboardShell() {
    return (
        <div className="min-h-dvh bg-white text-zinc-950 lg:grid lg:grid-cols-[360px_minmax(0,1fr)]">
            <aside
                aria-label="Calendar sidebar"
                className="min-h-[420px] bg-zinc-900 px-4 py-4 text-white lg:min-h-dvh"
            >
                <div className="flex items-center justify-between">
                    <button
                        className="rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                        type="button"
                    >
                        Logout
                    </button>
                    <button
                        aria-label="Add event"
                        className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-xl leading-none text-white shadow-sm"
                        type="button"
                    >
                        +
                    </button>
                </div>

                <section className="mt-12 flex items-center justify-between gap-3">
                    <h2 className="whitespace-nowrap text-3xl font-semibold">
                        May{" "}
                        <span className="font-normal text-red-500">2026</span>
                    </h2>
                    <div className="flex shrink-0 items-center gap-1">
                        <button
                            aria-label="Previous month"
                            className="flex size-8 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
                            type="button"
                        >
                            <ChevronIcon direction="left" />
                        </button>
                        <button
                            aria-label="Next month"
                            className="flex size-8 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
                            type="button"
                        >
                            <ChevronIcon direction="right" />
                        </button>
                    </div>
                </section>

                <section
                    aria-label="Mini calendar"
                    className="mt-8 border-t border-white/10 pt-6"
                >
                    <div className="grid grid-cols-7 gap-y-4 text-center text-xs text-zinc-500">
                        {weekDays.map((day) => (
                            <span key={day}>{day}</span>
                        ))}
                        {calendarRows.flatMap((row) =>
                            calendarColumns.map((column) => {
                                const dayNumber = row * 7 + column + 1;
                                const isSelected = dayNumber === 20;

                                return (
                                    <span
                                        className={[
                                            "mx-auto flex size-7 items-center justify-center rounded-full text-sm",
                                            isSelected
                                                ? "bg-blue-500 text-white"
                                                : "text-zinc-300",
                                        ].join(" ")}
                                        key={`${row}-${column}`}
                                    >
                                        {dayNumber <= 31 ? dayNumber : ""}
                                    </span>
                                );
                            }),
                        )}
                    </div>
                </section>

                <section
                    aria-label="Upcoming events"
                    className="mt-10 border-t border-white/10 pt-6"
                >
                    <h2 className="text-sm font-semibold text-zinc-200">
                        Upcoming
                    </h2>
                    <div className="mt-4 space-y-3">
                        {[0, 1, 2].map((item) => (
                            <div
                                className="grid grid-cols-[12px_minmax(0,1fr)] gap-3 rounded-md py-2"
                                key={item}
                            >
                                <span className="mt-1 size-3 rounded-full bg-blue-500" />
                                <div className="space-y-2">
                                    <div className="h-3 w-20 rounded bg-zinc-600" />
                                    <div className="h-3 w-full max-w-48 rounded bg-zinc-700" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </aside>

            <section className="min-w-0">
                <h1 className="sr-only">Calendar</h1>
                <header
                    aria-label="Calendar header"
                    className="grid min-h-15 grid-cols-1 gap-3 border-b border-zinc-200 px-5 py-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center"
                >
                    <div className="flex h-9 w-fit items-center justify-self-start overflow-hidden rounded-lg bg-zinc-100 text-sm font-medium text-zinc-950">
                        <button
                            aria-label="Previous period"
                            className="flex h-full w-9 items-center justify-center border-r border-white/70 transition-colors hover:bg-zinc-200"
                            type="button"
                        >
                            <ChevronIcon direction="left" />
                        </button>
                        <button
                            className="h-full px-5 transition-colors hover:bg-zinc-200"
                            type="button"
                        >
                            Today
                        </button>
                        <button
                            aria-label="Next period"
                            className="flex h-full w-9 items-center justify-center border-l border-white/70 transition-colors hover:bg-zinc-200"
                            type="button"
                        >
                            <ChevronIcon direction="right" />
                        </button>
                    </div>

                    <div className="flex h-9 justify-self-start text-sm font-semibold text-zinc-500 lg:justify-self-center gap-1">
                        <button
                            className="rounded-lg px-4 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                            type="button"
                        >
                            Day
                        </button>
                        <button
                            className="rounded-lg bg-red-600 px-4 text-white shadow-sm transition-colors hover:bg-red-700"
                            type="button"
                        >
                            Week
                        </button>
                        <button
                            className="rounded-lg px-4 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                            type="button"
                        >
                            Month
                        </button>
                        <button
                            className="rounded-lg px-4 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                            type="button"
                        >
                            Year
                        </button>
                    </div>

                    <label className="relative w-full max-w-[184px] justify-self-start lg:justify-self-end">
                        <span className="sr-only">Search events</span>
                        <input
                            className="h-9 w-full rounded border border-zinc-200 bg-zinc-100 px-3 text-sm text-zinc-950 outline-none transition-colors placeholder:text-zinc-500 focus:border-zinc-400 focus:bg-white"
                            placeholder="Search"
                            type="search"
                        />
                    </label>
                </header>

                <main
                    aria-label="Calendar workspace"
                    className="min-h-[calc(100dvh-61px)] overflow-hidden bg-white"
                >
                    <div className="grid min-h-[760px] grid-cols-[64px_repeat(7,minmax(120px,1fr))] grid-rows-[64px_repeat(10,72px)] text-sm">
                        <div className="border-b border-r border-zinc-200 bg-white" />
                        {weekDays.map((day, index) => (
                            <div
                                className={[
                                    "flex items-center justify-center border-b border-r border-zinc-200 font-medium text-zinc-500",
                                    index === 4 ? "bg-blue-50" : "bg-white",
                                ].join(" ")}
                                key={day}
                            >
                                {day}
                            </div>
                        ))}

                        {Array.from({ length: 10 }, (_, rowIndex) => {
                            const hour = rowIndex + 7;

                            return [
                                <div
                                    className="border-b border-r border-zinc-200 bg-white px-3 py-3 text-xs text-zinc-500"
                                    key={`time-${hour}`}
                                >
                                    {hour > 12 ? hour - 12 : hour}{" "}
                                    {hour >= 12 ? "PM" : "AM"}
                                </div>,
                                ...weekDays.map((day, columnIndex) => (
                                    <div
                                        className={[
                                            "border-b border-r border-zinc-200",
                                            columnIndex === 4
                                                ? "bg-blue-50"
                                                : columnIndex === 0 ||
                                                    columnIndex === 6
                                                  ? "bg-zinc-50"
                                                  : "bg-white",
                                        ].join(" ")}
                                        key={`${day}-${hour}`}
                                    />
                                )),
                            ];
                        })}
                    </div>
                </main>
            </section>
        </div>
    );
}

export default DashboardShell;
