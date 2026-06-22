import ApartmentIcon from "@mui/icons-material/Apartment";
import { TypeAnimation } from "react-type-animation";

export default function Image() {
  return (
    <div className="image">
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "20px",
        }}
      >
        <ApartmentIcon style={{ fontSize: "30px", color: "#C9A24C" }} />
        <p>Aqar Egypt</p>
      </header>

      <div className="website-info">
        <h1 style={{ letterSpacing: "1px" }}>
          <TypeAnimation
            sequence={[
              "Every Door In Egypt\nLeads SomeWhere Worth\nFinding.",
              2000,
              "",
              500,
            ]}
            wrapper="span"
            className="typed-text"
            speed={50}
            deletionSpeed={65}
            style={{
              whiteSpace: "pre-line",
              display: "block",
              minHeight: "200px",
              color:"#C9A24C"
            }}
            repeat={Infinity}
          />
        </h1>
      </div>
    </div>
  );
}