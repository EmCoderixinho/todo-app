import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight mb-2 text-white">Users List</h1>
      <ul>
        {users.map((user) => (
          <div className="flex flex-col flex-grow p-5" key={user.id}>
            <h5 className="text-2xl font-bold tracking-tight mb-2 text-white">
              User Name: {user.fullName}
            </h5>
            <p className="mb-3 flex-grow overflow-hidden text-white">
              User Email: {user.email}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Users;
