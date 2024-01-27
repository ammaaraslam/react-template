import { PropsWithChildren } from "react";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-screen">{children}</div>;
};

export default DefaultLayout;
