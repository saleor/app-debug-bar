type Props = {
  webhooks: Array<{
    event: string;
    invocations: Array<{
      timestamp: string;
      code: number;
      status: string;
    }>;
  }>;
};

export const WebhookFailedInvocationsList = ({ webhooks }: Props) => {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}
    >
      {webhooks.map((wh) => (
        <li key={wh.event}>
          <p
            style={{
              margin: "0 0 1em 0",
              fontWeight: "bold",
            }}
          >
            {wh.event}
          </p>
          <p
            style={{
              margin: "0 0 1em 0",
              fontSize: 10,
              textTransform: "uppercase",
            }}
          >
            Invocations
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              marginBottom: "1rem",
              paddingBottom: "1rem",
              paddingLeft: "1em",
              borderBottom: "1px dashed #ccc",
            }}
          >
            {wh.invocations.map((inv) => (
              <li key={inv.timestamp}>
                <p
                  style={{
                    opacity: 0.8,
                    fontSize: "12px",
                    marginBottom: 0,
                  }}
                >
                  {new Intl.DateTimeFormat(window.navigator.language, {
                    timeStyle: "long",
                    dateStyle: "short",
                  }).format(new Date(inv.timestamp))}
                </p>
                <span
                  style={{
                    fontWeight: 500,
                    marginRight: "1rem",
                  }}
                >
                  {inv.code}
                </span>
                <span>{inv.status}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
