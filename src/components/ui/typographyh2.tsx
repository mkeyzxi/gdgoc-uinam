export function TypographyH2({className, children}: {className?:string,children: string}) {
  return (
    <h2 className={`scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}>
      {children}
    </h2>
  )
}
