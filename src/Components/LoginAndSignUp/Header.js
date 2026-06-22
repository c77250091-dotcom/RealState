export default function Header({head , message}) {
  return (
    <>
      <header>
        <h2
          style={{
            fontSize: "35px",
            color: "#F2E9D5",
            letterSpacing: "1px",
          }}
        >
          {head}
        </h2>
        <p style={{ color: "#B8AD98", whiteSpace: "nowrap", fontSize: "12px" }}>
          {message}
        </p>
      </header>
    </>
  );
}
