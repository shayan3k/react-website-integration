"use strict";

const Button = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

const LikeButton = () => {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked this.";
  }

  return <Button onClick={() => setLiked(true)}>Click me!</Button>;
};

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(LikeButton), domContainer);
