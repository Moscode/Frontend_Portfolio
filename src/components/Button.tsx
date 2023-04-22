interface buttonContentType{
    buttonContent:string
    customStyle?: string
    link?: string
}

const Button = ({buttonContent, customStyle, link}: buttonContentType) => {
  return (
    <div className={`border border-[#08fdd8] rounded-sm text-center my-[4px] w-[40%] ${customStyle}`}>
      <a href={link} target="_blank" className={`block w-[100%] h-[100%] py-[4px] px-[10px] ${customStyle}`}>
        {buttonContent}
      </a>
    </div>
  )
}

export default Button