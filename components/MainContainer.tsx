import React from 'react'
import Header from './Header';
import Resume from './Resume';



interface LayoutProps {
  children: React.ReactNode;
}

function MainContainer({ children }: LayoutProps) {
  return (
    <>
      <Header/>
      <Resume />
      <div>{children}</div>
    </>
  )
}

export default MainContainer;