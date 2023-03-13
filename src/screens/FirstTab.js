import React from 'react';

const FirstTab = () => {
  const handleNotification = () => {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      new Notification('Notification title', {
        body: 'Notification successfull',
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          new Notification('Notification title', {
            body: 'Successfull Notification',
          });
        }
      });
    }
  };

  return (
    <div style={{textAlign:"center", paddingTop:"200px"}}>
      <button onClick={handleNotification} style={{backgroundColor:"red", color:"white", fontSize:"100px", boxShadow: "0px 15px 20px black"}}>Send Notification</button>
    </div>
  );
};

export default FirstTab;
