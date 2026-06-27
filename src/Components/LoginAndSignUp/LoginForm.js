import Inputs from "./Inputs";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import RegisterButton from "./RegisterButton";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { forgetPassword , RecoverAPI , LoginAPI } from "../../Slices/RegisterSlice";

const LoginInputs = [
  { id: 1, name: "email", placeholder: "Email", type: "email" },
  { id: 2, name: "password", placeholder: "Password", type: "password" },
];

const ForgetPasswordInputs = [
  { id: 1, name: "email", placeholder: "Email", type: "email" },
  { id: 2, name: "phoneNumber", placeholder: "PhoneNumber", type: "text" },
];

export default function LoginForm() {
  const state = useSelector((state) => state.registerData);
  const dispatch = useDispatch();

  function handleLoginSubmit(e){
     e.preventDefault();
     const form = new FormData(e.target)
     dispatch(LoginAPI({
      email : form.get("email"),
      password : form.get("password")
     }))
  }
function handleRecoverData(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  dispatch(RecoverAPI({
    email: form.get("email"),
    phoneNumber: form.get("phoneNumber"),
  }));
}





  return (
    <div className="Login-form">
      <Header
        head={"Welcome Back"}
        message={"Login to manage your listings, chats, and saved homes."}
      />
      {!state.hasForgetPassword ? (
        <>
          <form onSubmit={handleLoginSubmit}>
            <div className="Login-inputs inputs">
              {LoginInputs.map((input) => (
                <div style={{ width: "100%" }} key={input.id}>
                  <Inputs
                    placeholder={input.placeholder}
                    type={input.type}
                    name={input.name}
                  />
                </div>
              ))}
            </div>
          <div className="checkbox">
            <span style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <Checkbox
                sx={{
                  color: "#3D3526",
                  "&.Mui-checked": {
                    color: "#C9A24C",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(201, 162, 76, 0.08)",
                  },
                }}
              />
              <p style={{ color: "#B8AD98", fontSize: "14px" }}>Remember Me</p>
            </span>
            <p
              onClick={() => dispatch(forgetPassword())}
              style={{
                color: "#C9A24C",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </p>
          </div>
          <RegisterButton>Login</RegisterButton>
            </form>
          <Divider
            sx={{
              color: "#C9A24C",
              fontSize: "12px",
              "&::before, &::after": {
                borderColor: "#866318",
              },
            }}
            variant="fullWidth"
          >
            or continue with
          </Divider>
          <section
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Button type="button"
              style={{
                color: "#C9A24C",
                textTransform: "none",
                borderRadius: "20px",
                border: "1px solid #866318",
              }}
              variant="outlined"
              startIcon={<GoogleIcon />}
            >
              Google
            </Button>
            <Button type="button"
              style={{
                color: "#C9A24C",
                textTransform: "none",
                borderRadius: "20px",
                border: "1px solid #866318",
              }}
              variant="outlined"
              startIcon={<FacebookOutlinedIcon />}
            >
              Facebook
            </Button>
          </section>
        </>
      ) : (
        <>
        <form onSubmit={handleRecoverData}>
          <div className="Login-inputs inputs">
            {ForgetPasswordInputs.map((input) => (
              <div style={{ width: "100%" }} key={input.id}>
                <Inputs
                  placeholder={input.placeholder}
                  type={input.type}
                  name={input.name}
                />
              </div>
            ))}
            <RegisterButton >Send Email</RegisterButton>

            <Button type="button"
              onClick={() => dispatch(forgetPassword())}
              style={{
                color: "#C9A24C",
                textTransform: "none",
                borderRadius: "20px",
                border: "1px solid #866318",
              }}
              variant="outlined"
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
          </div>
          </form>
        </>
      )}
    </div>
  );
}
