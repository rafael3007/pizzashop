import { Link, type LinkProps, useLocation } from 'react-router-dom'

export interface NavLinkProps extends LinkProps {}
export default function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex text-muted-foreground items-center gap-1.5 text-sm font-medium hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}
