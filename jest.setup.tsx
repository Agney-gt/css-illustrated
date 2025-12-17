import "@testing-library/jest-dom";
import "jest-axe/extend-expect";

jest.mock("next/link", () => {
  return ({
    children,
    href,
    ...rest
  }: {
    children: React.ReactNode;
    href: string;
  }) => {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  };
});
