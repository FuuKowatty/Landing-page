

interface TooltipProps {
  children: string
}

export function Tooltip({ children }: TooltipProps) {
    return (
      <div className="tooltip">
        {children}
      </div>
    )
  }