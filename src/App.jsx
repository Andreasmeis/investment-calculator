import { useState } from "react"

import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

function App() {

  const [data, setData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
})

const isValid = data.duration >= 1 && data.annualInvestment >= 0 && data.expectedReturn >= 0 && data.duration >= 0

function handleChange(inputName, newValue) {
    setData((prev) => {
        return {
            ...prev,
            [inputName]: +newValue
        }
    })
}


  return (
    <>
      <Header />
      <UserInput data={data} onChange={handleChange} />
      {!isValid && <p className="center">Please enter valid input data</p>}
      {isValid && <Results data={data} />}
    </>
  )
}

export default App
