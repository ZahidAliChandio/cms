import { useState } from "react";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:4000");
const Notifications = () => {
  const [news, setNews] = useState(null);

  const onSubmitHandler = () => {
    socket.emit("newNews", { news });
  };
  const newsChangeHandler = (e) => {
    setNews(e.target.value);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input value={news} onChange={newsChangeHandler} />
      <button className="" type="submit">
        Send Notification
      </button>
    </form>
  );
};

export default Notifications;
