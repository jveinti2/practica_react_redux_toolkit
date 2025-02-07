import { useSelector } from "react-redux";

export default function Header() {
  const user = useSelector((state) => state.user);
  return (
    <header>
      <ul>
        <li>Name: {user.name}</li>
        <li>User name: {user.username}</li>
        <li>Email: {user.email}</li>
      </ul>
    </header>
  );
}
