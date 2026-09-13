type ButtonProps = {
  children: React.ReactNode,
  className?: string,
  onClick?: () => any,
  disabled?: boolean
};

export const Button = ({ children, className, onClick, disabled }: ButtonProps) => {

  return(
    <button onClick={onClick}
      className={`${className} hover:scale-102 ease-in-out duration-200 cursor-pointer`}
      disabled
    >
      {children}      
    </button>
  )
};