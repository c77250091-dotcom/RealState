import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState, useRef, useCallback } from "react";

export default function Inputs({ name, placeholder, type, onCommit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("");
  const debounceRef = useRef(null);
  const isPassword = type === "password";

  const handleChange = useCallback(
    (e) => {
      const val = e.target.value;
      setValue(val);
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        onCommit(name, val);
      }, 300);
    },
    [name, onCommit],
  );

  return (
    <TextField
      style={{ width: "100%" }}
      id={name}
      label={placeholder}
      value={value}
      onChange={handleChange}
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
