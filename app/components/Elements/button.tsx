type ButtonProps = {
  children: React.ReactNode,
  className?: string,
  onClick?: () => any
};

export const Button = ({ children, className, onClick }: ButtonProps) => {

  return(
    <button onClick={onClick}
      className={`${className} hover:scale-102 ease-in-out duration-200 cursor-pointer`}
    >
      {children}      
    </button>
  )
};