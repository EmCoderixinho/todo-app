// Import necessary modules and components
import { useEffect, useState } from "react";

// Define the Users component
const Users = () => {
  // State variable to store the list of users
  const [users, setUsers] = useState([]);

  // Effect hook to fetch users when the component mounts
  useEffect(() => {
    // Function to fetch users data from the API
    const fetchUsers = async () => {
      try {
        // Fetch users data from the "/api/users" endpoint
        const response = await fetch("/api/users");
        // Parse the response data as JSON
        const data = await response.json();
        // Set the users state with the fetched data
        setUsers(data);
      } catch (error) {
        // Log an error message if there is an error fetching users
        console.error("Error fetching users:", error);
      }
    };

    // Call the fetchUsers function
    fetchUsers();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Render the Users component
  return (
    <div>
      {/* Users List Title */}
      <h1 className="text-2xl font-bold tracking-tight mb-2 text-white">Users List</h1>
      
      {/* Render the list of users */}
      <ul>
        {users.map((user) => (
          <div className="flex flex-col flex-grow p-5" key={user.id}>
            {/* User Name */}
            <h5 className="text-2xl font-bold tracking-tight mb-2 text-white">
              User Name: {user.fullName}
            </h5>
            {/* User Email */}
            <p className="mb-3 flex-grow overflow-hidden text-white">
              User Email: {user.email}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

// Export the Users component as the default export
export default Users;