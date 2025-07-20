// pages/users/index.tsx

import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  users: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserData[]>(users);

  const handleAddUser = (newUser: UserData) => {
    setUserList([...userList, { ...newUser, id: userList.length + 1 }]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">User List</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {userList
            .filter((user) => typeof user.id === "number")
            .map((user) => (
              <UserCard key={user.id} {...user} id={user.id as number} />
            ))}
        </div>
      </main>

      {/* Modal toggle logic here */}
      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
