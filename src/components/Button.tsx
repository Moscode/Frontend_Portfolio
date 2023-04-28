interface buttonContentType{
    buttonContent:string
    customStyle?: string
    link?: string
}

const Button = ({buttonContent, customStyle, link}: buttonContentType) => {
  return (
    <div className={`border bg-[#08fdd8] rounded-md text-[#fff] font-extrabold text-center my-[4px] w-[40%] ${customStyle}`}>
      <a href={link} target="_blank" className={`flex items-center justify-center w-[100%] h-[100%] py-[4px] px-[10px] ${customStyle}`}>
        {buttonContent}
      </a>
    </div>
  )
}

export default Button