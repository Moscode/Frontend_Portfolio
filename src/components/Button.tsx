interface buttonContentType{
    buttonContent:string
    customStyle?: string
}

const Button = ({buttonContent, customStyle}: buttonContentType) => {
  return (
    <div className={`border border-[#08fdd8] rounded-sm py-[4px] px-[10px] text-center my-[4px] ${customStyle}`}>
        {buttonContent}
    </div>
  )
}

export default Button