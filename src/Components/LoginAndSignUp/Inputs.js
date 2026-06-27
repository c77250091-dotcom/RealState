import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function Inputs({ name, placeholder, type }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <TextField
      style={{ width: "100%" }}
      id={name}
      name={name}
      label={placeholder}
      variant="outlined"
      size="small"
      type={isPassword && showPassword ? "text" : type}
      InputProps={{
        endAdornment: isPassword && (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword((v) => !v)}
              edge="end"
              size="small"
              disableRipple
              tabIndex={-1}
            >
              {showPassword ? (
                <VisibilityOff fontSize="small" sx={{ color: "#7A7363" }} />
              ) : (
                <Visibility fontSize="small" sx={{ color: "#7A7363" }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}