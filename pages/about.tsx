import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div style={{ width: "95vw", background: 'white', textAlign: "center", margin: "-50px auto", color: "#ccc", padding: "2em" }}>
      <h2>Sobre</h2>
      <h4>Essa página irá falar um pouco da aplicação</h4>
    </div>
  )
}

export default About;