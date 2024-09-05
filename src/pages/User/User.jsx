import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

function User() {
  const { user, updateUser } = useAuth();
  const [name, setName] = useState(user?.displayName);
  const [photo, setPhoto] = useState(user?.photoURL);
  const handleChangeFullName = () => {
    updateUser(name, user?.photoURL).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Full Name changed successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  const handleChangePhotoURL = () => {
    updateUser(user?.displayName, photo).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Photo URL changed successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  return (
    <div className="h-screen">
      <h2 className="text-4xl text-center mt-10">Customize User</h2>
      <div className="flex flex-col md:flex-row">
        <div className="join mx-auto mt-5">
          <input
            className="input input-bordered join-item"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            defaultValue={user?.displayName}
            name="name"
          />
          <button
            onClick={handleChangeFullName}
            className="btn join-item rounded-r-full"
          >
            Change Full Name
          </button>
        </div>
        <div className="join mx-auto mt-5">
          <input
            className="input input-bordered join-item"
            placeholder="Photo URL"
            onChange={(e) => setPhoto(e.target.value)}
            defaultValue={user?.photoURL}
            name="name"
          />
          <button
            onClick={handleChangePhotoURL}
            className="btn join-item rounded-r-full"
          >
            Change Full Name
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
