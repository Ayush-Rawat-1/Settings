import React from "react";

interface NotificationSettingsProps {
  notificationsEnabled: boolean;
  setNotificationsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({
  notificationsEnabled,
  setNotificationsEnabled,
}) => {
  return (
    <div className="p-6 mx-auto">
      <h2 className="text-xl font-medium">Notification Settings</h2>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600">
            Do you want notifications for every message? You will receive notification on the registered email address.
          </p>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-700 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      

      
    </div>
  );
};

export default NotificationSettings;
