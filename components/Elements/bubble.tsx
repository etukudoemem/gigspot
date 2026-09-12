type BubbleProps = {
  children: React.ReactNode,
  className?: string
};

export const Bubble = ({ children, className}: BubbleProps) => {

  return(
    <div className={`${className} w-fit h-fit mx-auto border border-gray-300 rounded-2xl px-4 py-2 shadow-[0px_4px_45px_0px_#00000014]`}>
        {children}
    </div>
  )
};