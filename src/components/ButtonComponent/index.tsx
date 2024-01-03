import { Button } from 'antd'

function ButtonComponent({
  icon,
  name,
  onClick,
  className,
  htmlType,
  disabled,
  ...props
}: any) {
  return (
    <Button
      htmlType={htmlType}
      {...props}
      onClick={() => onClick && onClick()}
      className={`!flex !items-center !justify-center bg-primary !text-center hover:!opacity-90 ${className}`}
      type="primary"
      icon={icon}
      disabled={disabled}
    >
      {name}
    </Button>
  )
}

export default ButtonComponent
