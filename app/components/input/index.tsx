import { Input as CustonInput } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { ComponentProps, forwardRef } from 'react'

interface InputProps extends ComponentProps<'input'> {
  name: string
  placeholder: string
  label: string
  type?: string
  error?: string
  isColumn?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, placeholder, label, type, error, isColumn, ...props }, ref) => {
    return (
      <div
        className={cn(
          isColumn ? 'flex flex-col w-full' : 'flex flex-row w-full',
        )}
      >
        <Label htmlFor={name} className="text-gray-800 font-bold mb-2 block">
          {label}
        </Label>
        <CustonInput
          ref={ref}
          {...props}
          className={`border border-gray-700 ${error ? 'border-red-500' : ''}`}
          type={type}
          id={name}
          placeholder={placeholder}
          name={name}
        />
        {error && (
          <p className="text-red-500 font-medium text-xs pt-1">{error}</p>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'
