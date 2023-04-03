interface buttonContentType{
    buttonContent:string
    width?: string
}

const Button = ({buttonContent, width}: buttonContentType) => {
  return (
    <div className={`border border-[#08fdd8] rounded-sm py-[4px] px-[10px] w-[40%] text-center my-[4px]`}>
        {buttonContent}
    </div>
  )
}

export default Button