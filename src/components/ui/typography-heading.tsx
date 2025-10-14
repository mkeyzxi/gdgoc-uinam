export function TypographyHeading({children}: {children: string}) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-xl sm:text-center mb-2">
  {children}
    </p>
  )
}
