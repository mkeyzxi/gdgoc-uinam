export function TypographyAbout({ children }: { children: string }) {
  return (
    <p className="text-xl leading-7 [&:not(:first-child)]:mt-6">
      {children}
    </p>
  )
}
