export function TypographyHeading({children}: {children: string}) {
  return (
    <p className="leading-7[&:not(:first-child)]:mt-6 max-w-xl md:text-xl sm:text-left mb-2 text-slate-800">
  {children}
    </p>
  )
}
