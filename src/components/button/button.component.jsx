import Wrapper from "./button.styles";

const Button = ({color, text, href}) => {
  return (
    <Wrapper href={href} className={`btn-${color}`}>{text}</Wrapper>
  )
}

export default Button;