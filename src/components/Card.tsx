type CardProp = {
    children: React.ReactNode;
    className: string;
}

const Card = ({ children, className }: CardProp) => {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default Card