const Notification = (props) => {
  const { className, img, message, imgClass } = props;
  return (
    <div className={className}>
      <img src={img} className={imgClass} /> <p>{message}</p>
    </div>
  );
};

const element = (
  <div className="notifications-container">
    <h1 className="main-heading">Notifications</h1>
    <div className="iconContainer">
      <Notification
        className="primary-notification"
        img="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        imgClass="imageIcon"
        message="Information Message"
      />
    </div>
    <div className="iconContainer">
      <Notification
        className="success-notification"
        img="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
        imgClass="imageIcon"
      />
    </div>
    <div className="iconContainer">
      <Notification
        className="warning-notification"
        img="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
        imgClass="imageIcon"
      />
    </div>
    <div className="iconContainer">
      <Notification
        className="danger-notification"
        img="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
        imgClass="imageIcon"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
