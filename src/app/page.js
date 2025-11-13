import Image from "next/image";
import UserForm from "./UserForm/UserForm";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
<UserForm/>
    </div>
  );
}
