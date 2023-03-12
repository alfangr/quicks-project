import Image from 'next/image'

interface IQuickProps {
  className?: string,
  onClick?: () => void,
  variant?: string,
  src: string,
  label?: string
}

interface IVariant {
  [key: string]: string;
} 

const Quick = ({ className = '', onClick, variant = 'primary', src, label }: IQuickProps) => {
  const variantClasses: IVariant = {
    default: 'bg-default',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-secondary-2',
  }

  return (
    <div className={`${className} flex flex-col items-center justify-end gap-2`}>
      { label && <span className="text-default">{label}</span> }
      <button type="button" className={`${variantClasses[variant]} flex justify-center items-center rounded-full w-14 h-14 shadow-md`} onClick={onClick}>
        <Image
          className="p-0.5"
          src={src}
          alt="lightning-icon"
          quality={100}
          priority
        />
      </button>
    </div>
  )
}

export default Quick