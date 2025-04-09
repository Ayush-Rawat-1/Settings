import React, { useState } from "react";

interface ParticularNotificationsProps {
  users: string[];
  setUsers: React.Dispatch<React.SetStateAction<string[]>>;
}

const ParticularNotifications: React.FC<ParticularNotificationsProps> = ({ users, setUsers }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddUser = () => {
    const trimmed = inputValue.trim();
    if (trimmed) {
      setUsers([...users, trimmed]);
      setInputValue("");
    }
  };

  const handleRemoveUser = (name: string) => {
    setUsers(users.filter((u) => u !== name));
  };

  return (
    <div className="p-6 mx-auto">
      <p className="text-sm font-medium">Add users to get particular notifications</p>

      <div className="relative max-w-md">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search Users"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddUser()}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {users.map((name, index) => (
          <button
            key={index}
            className="flex cursor-pointer items-center px-3 py-1 rounded-full border border-gray-300 text-sm bg-gray-100 hover:bg-gray-200"
          >
            {name}
            <span
              onClick={() => handleRemoveUser(name)}
              className="ml-3 text-gray-500 hover:text-red-500 text-sm font-bold cursor-pointer"
            >
              X
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ParticularNotifications;
