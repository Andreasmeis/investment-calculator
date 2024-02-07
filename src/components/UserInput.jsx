import { useState } from "react"

// const inputFields = [initialInvest, annualInvestment, expectReturn, duration]

export default function UserInput({onChange, data}) {
    

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        value={data.initialInvestment}
                        required
                        onChange={(event) => onChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        value={data.annualInvestment}
                        required
                        onChange={(event) => onChange('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        value={data.expectedReturn}
                        required
                        onChange={(event) => onChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        value={data.duration}
                        required
                        onChange={(event) => onChange('duration', event.target.value)} />
                </p>
            </div>
        </section >
    )
}