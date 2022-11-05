import Footer from "components/footer";
import Header from "components/header";
import SocialLinks from "components/social-links";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Layout = ({ className, children }: Props) => {
  return (
    <div className="px-4 lg:px-20 container">
      <Header />
      <SocialLinks />
      <main className={className}>{children}</main>
      <Footer className="pt-12 mb-8 lg:pt-0" />
      <SocialLinks className="flex justify-center items-center gap-x-8 pb-12 lg:hidden" />
    </div>
  );
};

export default Layout;