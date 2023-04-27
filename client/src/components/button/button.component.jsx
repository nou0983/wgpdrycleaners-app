const Button = ({color, text, href}) => {
  return (
    <a href={href} className={`btn btn-animated btn-${color}`}>{text}</a>
  )
}

export default Button;