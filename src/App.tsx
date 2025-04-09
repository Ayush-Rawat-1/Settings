import './App.css';
import { useState, useEffect } from 'react';
import NotificationSettings from './components/NotificationSettings';
import MessageCategories from './components/MessageCategories';
import CustomReply from './components/CustomReply';

interface SettingsState {
  notificationsEnabled: boolean;
  users: string[];
  categories: string[];
  replies: string[];
}

function App() {
  const [settings, setSettings] = useState<SettingsState>({
    notificationsEnabled: false,
    users: [],
    categories: [],
    replies: [],
  });

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (
        settings.notificationsEnabled &&
        settings.users.length > 0 &&
        settings.categories.length > 0 &&
        settings.replies.length > 0
      ) {
        console.log("API Called with settings:", settings);
  
        // Send to dummy API
        /**
         fetch("https://jsonplaceholder.typicode.com/posts", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(settings),
         })
           .then((res) => res.json())
           .then((data) => {
             console.log("Response from dummy API:", data);
           })
           .catch((error) => {
             console.error("Error sending settings to API:", error);
           });
        
         */
      }
    }, 1000);
  
    return () => clearTimeout(debounceTimer);
  }, [settings]);
  

  return (
    <>
      <h1 className='p-6 mx-auto text-2xl font-bold'>Application Settings</h1>
      <hr className='border-gray-300' />

      <NotificationSettings
        notificationsEnabled={settings.notificationsEnabled}
        setNotificationsEnabled={(value) =>
          setSettings((prev) => ({ ...prev, notificationsEnabled: value }))
        }
        users={settings.users}
        setUsers={(users) => setSettings((prev) => ({ ...prev, users }))}
      />

      <hr className='border-gray-300' />

      <MessageCategories
        categories={settings.categories}
        setCategories={(categories) => setSettings((prev) => ({ ...prev, categories }))}
      />

      <CustomReply
        replies={settings.replies}
        setReplies={(replies) => setSettings((prev) => ({ ...prev, replies }))}
      />
    </>
  );
}

export default App;