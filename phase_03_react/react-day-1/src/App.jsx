import Counter from "./Counter"

// Create Component ChangeName.jsx
// h2 => Hi {initialName}
// button => ChangeName => Hi {changedName}

function App(){
  let name="Vaibhav"
  let islogged=true
  
  return (
    <>
        <h1>Hello World</h1>
        <h2>Welcome {name}</h2>
        {islogged? <p>Online</p> : <p>Offline</p> }

        <Counter />
        
    </>
  )
}
export default App