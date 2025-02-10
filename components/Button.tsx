'use client'

import Image from "next/image"

interface ButtonProps {
  isDisabled?: boolean
  btnType?: 'button' | 'submit'
  className?: string
  textStyles?: string
  title: string
  rightIcon?: string
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  isDisabled, btnType, className,
  textStyles, title, rightIcon, handleClick
}: ButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || 'button'}
      className={`custom-btn ${className}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  )
}

export default Button