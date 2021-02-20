import React, { useEffect, useState } from "react";

const isBrowser = () => typeof window !== 'undefined'

export const useCheckOnline = () => {
  const [onlineStatus, setOnlineStatus] = useState(() => isBrowser() && navigator.onLine);

  useEffect(() => {
    const onOnline = () => setOnlineStatus(true);
    const onOffline = () => setOnlineStatus(false);

    isBrowser() && window.addEventListener('online', onOnline);
    isBrowser() && window.addEventListener('offline', onOffline);
    
    return () => {
      isBrowser() && window.removeEventListener('online', onOnline);
      isBrowser() && window.removeEventListener('offline', onOffline);
    };
  }, []);

  return onlineStatus;
};

export const NetworkStatus = () => {
  const isOnline = useCheckOnline();

  return (
    <div>Your Network Status: {isOnline ? '🟢 online' : '🔴 offline'}</div>
  )
}
