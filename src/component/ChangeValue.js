import { useState } from "react"

const ChangeValue = () => {

    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const userNameChange = (event) => {
        setUsername(event.target.value);
    }
    const emailChange = (event) => {
        setEmail(event.target.value);
    }

    return (
        <div className="inputs">

            <h1>{userName}</h1>
            <p>{email}</p>
            <form>
                <input type="text"
                    name="userName"
                    placeholder="UserName"
                    value={userName}
                    onChange={userNameChange} 
                    autoComplete="false"
                />

                <input type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={emailChange}
                    autoComplete="false"
                />
            </form>
        </div>
    )
}

export default ChangeValue
