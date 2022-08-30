import React from 'react'
import Header from './Header';



interface LayoutProps {
  children: React.ReactNode;
}

function MainContainer({ children }: LayoutProps) {
  return (
    <>
      <Header/>
      <div>{children}</div>
    </>
  )
}

export default MainContainer;