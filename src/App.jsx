import "./App.css";
import Email from "./components/Email";
import Header from "./components/Header";
import { addUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";

const newUserData = {
  name: "jhonatan",
  username: "jhonatan becerra",
  email: "jbecerrap95@gmail.com",
};

export default function App() {
  const dispatch = useDispatch();

  const handleChangeUserState = () => {
    dispatch(addUser(newUserData));
  };

  return (
    <div>
      <button onClick={handleChangeUserState}>change user example</button>
      <Header />
      <Email />
    </div>
  );
}
