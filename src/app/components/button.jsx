"use client"
const CustomButton = ({text, fn, value}) => {

// console.log(fn)
  return (
    <button className={`px-3 py-2 rounded-md bg-bgShade text-textcolor text-xs mx-2`} value={value} onClick={fn}>{text}</button>
  )
}



export default CustomButton;
