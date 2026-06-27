
import { useSelector } from "react-redux";

export default function RegisterButton({ children , setReoverdata }) {
  const isLoading = useSelector((state) => state.registerData.isLoading)
  return (
    <button
    disabled ={isLoading}
    onClick={setReoverdata}
    type="submit"
      className="login-btn"
      style={{
        width: "100%",
        padding: "12px",
        backgroundImage:
          "linear-gradient(135deg, #9C7A2E, #C9A24C 55%, #E4C572)",
        color: "#1C1812",
        fontWeight: 700,
        border: "none",
        borderRadius: "60px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
