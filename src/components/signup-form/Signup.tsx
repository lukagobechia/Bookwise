import './Signup.css'
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
function Signup() {
    type FormValues = {
        firstName: string
        lastName: string
        username: string
        password: string
        dof: Date
    }
    const form = useForm<FormValues>();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const onSubmit = (data: FormValues) => {
        console.log("form submited", data)
    }
    return (
        <>
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="user-input">
                    <div className="input-field">
                        <div className="wrapper">
                            <div className="input-field">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" {...register("firstName", {
                                    required: {
                                        value: true,
                                        message: 'First name s required'
                                    }
                                })} />
                                <p className='validation'>{errors.firstName?.message}</p>
                            </div>

                            <div className="input-field">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" {...register("lastName", {
                                    required: 'Last name is required'
                                })} />
                                <p className='validation'>{errors.lastName?.message}</p>
                            </div>
                        </div>
                    </div>

                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" {...register("username", {
                            required: {
                                value: true,
                                message: 'Username is required'
                            },
                            validate: {
                                notAdmin: (fieldValue) => {
                                    return fieldValue !== "admin" || "Enter a different username"
                                }
                            }
                        })} />
                        <p className='validation'>{errors.username?.message}</p>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" {...register("password", {
                            required: "Password is required"
                        })} />
                        <p className='validation'>{errors.password?.message}</p>
                    </div>

                    <div className="input-field">
                        <label htmlFor="dof">Date of Birth</label>
                        <input type="date" id="dof" {...register("dof", {
                            required: "Date of birth is required"
                        })} />
                        <p className='validation'>{errors.dof?.message}</p>
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
            <DevTool control={control} />
        </>
    );
}

export default Signup;
