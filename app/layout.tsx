import React from "react";

export const metadata = {
  title:"Next.js",
};

export default function Layout({children}: {children: React.ReactNode}){
  return(
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}