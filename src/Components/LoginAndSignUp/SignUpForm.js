import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import BusinessIcon from "@mui/icons-material/Business";
import Inputs from "./Inputs";
import Checkbox from "@mui/material/Checkbox";
import RegisterButton from "./RegisterButton";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { Buyer, SignUpAPI , agreeToTerms } from "../../Slices/RegisterSlice";
const seller = [
  {
    id: 1,
    name: "firstName",
    placeholder: "FirstName",
    type: "text",
    fullWidth: false,
  },
  {
    id: 2,
    name: "secondName",
    placeholder: "SecondName",
    type: "text",
    fullWidth: false,
  },
  {
    id: 3,
    name: "email",
    placeholder: "Email",
    type: "email",
    fullWidth: true,
  },
  {
    id: 4,
    name: "phoneNumber",
    placeholder: "Phone Number",
    type: "text",
    fullWidth: false,
  },
  {
    id: 5,
    name: "nationalID",
    placeholder: "National ID",
    type: "text",
    fullWidth: false,
  },
  {
    id: 6,
    name: "password",
    placeholder: "Password",
    type: "password",
    fullWidth: true,
  },
  {
    id: 7,
    name: "confirmPassword",
    placeholder: "Confirm Password",
    type: "password",
    fullWidth: true,
  },
];

const buyer = [
  {
    id: 1,
    name: "firstName",
    placeholder: "FirstName",
    type: "text",
    fullWidth: false,
  },
  {
    id: 2,
    name: "secondName",
    placeholder: "SecondName",
    type: "text",
    fullWidth: false,
  },
  {
    id: 3,
    name: "email",
    placeholder: "Email",
    type: "email",
    fullWidth: true,
  },
  {
    id: 4,
    name: "phoneNumber",
    placeholder: "Phone Number",
    type: "text",
    fullWidth: true,
  },
  {
    id: 5,
    name: "password",
    placeholder: "Password",
    type: "password",
    fullWidth: true,
  },
  {
    id: 6,
    name: "confirmPassword",
    placeholder: "Confirm Password",
    type: "password",
    fullWidth: true,
  },
];

export default function SignUpForm() {
  const state = useSelector((state) => state.registerData);
  const dispatch = useDispatch();
  const activeInputs = state.Buyer ? buyer : seller;

function handleSignUP(e) {
  e.preventDefault();
  if (!state.agreeToTerms) return;

  const form = new FormData(e.target);
  const data = state.Buyer
    ? {
        firstName: form.get("firstName"),
        secondName: form.get("secondName"),
        email: form.get("email"),
        phoneNumber: form.get("phoneNumber"),
        password: form.get("password"),
        confirmPassword: form.get("confirmPassword"),
      }
    : {
        firstName: form.get("firstName"),
        secondName: form.get("secondName"),
        email: form.get("email"),
        phoneNumber: form.get("phoneNumber"),
        nationalId: form.get("nationalID"),
        password: form.get("password"),
        confirmPassword: form.get("confirmPassword"),
      };

  dispatch(SignUpAPI(data));
}

  return (
    <div className="SignUp-form">
      <Header
        head={"Create Your Account"}
        message={
          "Joining Thousands Finding Your New property Or Selling Your Old Property"
        }
      />
      <Container
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <Stack
          onClick={() => !state.Buyer && dispatch(Buyer())}
          style={{
            background: state.Buyer
              ? " linear-gradient(135deg, #9c7a2e, #755615 55%, #866a1d)"
              : "transparent",
          }}
          className="Choose-your-account"
          direction="column"
          spacing={1}
        >
          <SearchIcon />
          <p>Buyer</p>
        </Stack>
        <Stack
          onClick={() => state.Buyer && dispatch(Buyer())}
          style={{
            background: !state.Buyer
              ? " linear-gradient(135deg, #9c7a2e, #755615 55%, #866a1d)"
              : "transparent",
          }}
          className="Choose-your-account"
          direction="column"
          spacing={1}
        >
          <BusinessIcon />
          <p>Seller</p>
        </Stack>
      </Container>
      <form onSubmit={handleSignUP}>
        <div className="Sign-inputs inputs">
          {activeInputs.map((input) => (
            <div
              key={`${state.Buyer ? "buyer" : "seller"}-${input.name}`}
              style={{
                width: "100%",
                gridColumn: input.fullWidth ? "span 2" : "span 1",
              }}
            >
              <Inputs
                placeholder={input.placeholder}
                type={input.type}
                fullWidth={input.fullWidth}
                name={input.name}
              />
            </div>
          ))}
        </div>

        <span style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          <Checkbox onChange={() => dispatch(agreeToTerms())}
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
          <p style={{ color: "#B8AD98", fontSize: "14px" }}>
            I Agree to the Terms and Conditions
          </p>
        </span>
        <RegisterButton>Sign Up</RegisterButton>
      </form>
    </div>
  );
}
