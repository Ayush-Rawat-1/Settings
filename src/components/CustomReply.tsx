import React, { useState } from "react";

interface CustomReplyProps {
  replies: string[];
  setReplies: React.Dispatch<React.SetStateAction<string[]>>;
}

const CustomReply: React.FC<CustomReplyProps> = ({ replies, setReplies }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddReply = () => {
    const trimmed = inputValue.trim();
    if (trimmed) {
      setReplies([...replies, trimmed]);
      setInputValue("");
    }
  };

  const handleRemoveReply = (reply: string) => {
    setReplies(replies.filter((r) => r !== reply));
  };

  return (
    <div className="p-6 mx-auto">
      <p className="text-lg font-medium">Add Custom Replies</p>

      <div className="relative max-w-md mt-2">
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
          placeholder="Enter custom reply"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddReply()}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {replies.map((reply, index) => (
          <button
            key={index}
            className="flex cursor-pointer items-center px-3 py-1 rounded-full border border-gray-300 text-sm bg-gray-100 hover:bg-gray-200 transition"
          >
            {reply}
            <span
              onClick={() => handleRemoveReply(reply)}
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

export default CustomReply;
