import React from 'react'



interface LayoutProps {
  children: React.ReactNode;
}

function MainContainer({ children }: LayoutProps) {
  return (
    <>
      <div>{children}</div>
    </>
  )
}

export default MainContainer;