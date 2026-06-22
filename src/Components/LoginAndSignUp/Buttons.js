import { useDispatch, useSelector } from "react-redux";
import { member } from "../../Slices/RegisterSlice";

export default function Buttons() {
  const state = useSelector((state) => state.registerData);
  const dispatch = useDispatch();
  return (
    <div className="buttons">
      <p
        className={!state.isNewMember  ? "active" : ""}
        onClick={() => state.isNewMember && dispatch(member()) }
      >
        Login
      </p>
      <p
        className={state.isNewMember ? "active" : ""}
        onClick={() => !state.isNewMember && dispatch(member())}
      >
        Sign Up
      </p>
    </div>
  );
}
