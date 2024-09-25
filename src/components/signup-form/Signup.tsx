import './Signup.css'

function Signup() {
    return (
        <>
            <h1>Sign Up</h1>

            <form>
                <div className="user-input">

                    <div className="input-field">
                        <div className="wrapper">
                            <div className="input-field">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" name="firstName" required />
                            </div>

                            <div className="input-field">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" name="lastName" required />
                            </div>
                        </div>
                    </div>

                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>

                    <div className="input-field">
                        <label htmlFor="dof">Date of Birth</label>
                        <input type="date" id="dof" name="dof" required />
                    </div>
                </div>

                <div className="buttons">
                    <button type="submit" className='log-in'>Sign Up</button>
                    <p>OR</p>
                    <button type="button" className="social-login google"> <div className='socialIcon'><img className='icon googleAccount' src="src\assets\google-color-svgrepo-com.svg" alt="" /></div> <div className='continue'>Continue with Google</div></button>
                </div>

                <div className="privacy">
                    <p>
                        By continuing, you agree to Bookwise's
                        <a href="/terms-of-service"> Terms of Service </a>
                        and acknowledge you've read our
                        <a href="/privacy-policy"> Privacy Policy</a>.
                    </p>
                </div>
            </form >
        </>
    );
}

export default Signup;
