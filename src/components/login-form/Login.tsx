import './Login.css'
import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools'

function Login() {
  type formValue = {
    username: string
    password: string
  }
  const form = useForm<formValue>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data: formValue) => {
    console.log("form data", data)
  }
  return (
    <>
      <h1>Welcome to Bookwise</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user-input">
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" {...register("username", {
              required: {
                value: true,
                message: 'Username is required'
              }, 
              validate: {

              }
            })} />
            <p className='validation'>{errors.username?.message}</p>
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password",{
              required: {
                value: true,
                message: 'Password is required'
              },
              validate: {

              }
            })} />
            <p className='validation'>{errors.password?.message}</p>
          </div>

          <div className="remember-me">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <div className="forgot-password">
            <a href="/forgot-password">Forgot your password?</a>
          </div>
        </div>

        <div className="buttons">
          <button type="submit" className='log-in'>Log in</button>
          <p>OR</p>
          <button type="button" className="social-login facebook"> <div className='socialIcon'><img className='icon' src="src\assets\facebook-network-communication-internet-interaction-svgrepo-com.svg" alt="fb" /></div> <div className='continue'> Continue with Facebook</div></button>
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
      <DevTool control={control} />
    </>
  );
}

export default Login;
