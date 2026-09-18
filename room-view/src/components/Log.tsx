import type { LogEntry } from "../types/log";

interface LogProps {
  entries: LogEntry[];
}

export function Log({ entries }: Readonly<LogProps>) {
  const newestFirst = entries.slice().reverse();

  return (
    <div
      style={{
        fontFamily: "monospace",
        fontSize: "0.5rem",
        overflowY: "auto",
        border: "1px solid",
        borderRadius: 4,
        padding: "0.5rem 1rem",
        textAlign: "left",
      }}
    >
      {newestFirst.length === 0 ? (
        <div>Waiting for first poll…</div>
      ) : (
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {newestFirst.map((entry) => (
            <li
              key={entry.timestamp + entry.text}
              style={entry.changed ? { color: "green" } : undefined}
            >
              {entry.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
