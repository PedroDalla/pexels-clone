import { StyledAuthForm } from "./styles";

export const AuthForm = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"form">): JSX.Element => {
  return <StyledAuthForm {...props}>{children}</StyledAuthForm>;
};
