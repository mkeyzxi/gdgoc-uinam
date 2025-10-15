export function TypographyH4({className, children}: {className?:string,children?: string}) {
  return (
    <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
      {children}
    </h4>
  )
}
