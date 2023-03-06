import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'

interface FormValues {
  email: string
  password: string
}

import {
  Form,
  TextField,
  Submit,
  SubmitHandler,
  Label,
  FieldError
} from '@redwoodjs/forms'

const SignInPage = () => {
  const { logIn } = useAuth()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data)
    const results = await logIn({...data})
    console.log(results)
  }

  return (
    <>
      <MetaTags title="SignIn" description="SignIn page" />

      <h1>SignInPage</h1>

      <Form onSubmit={onSubmit}>
        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error">
          Password
        </Label>
        <TextField
          name="password"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="password" className="password" />

        <Submit>Submit</Submit>
      </Form>
    </>
  )
}

export default SignInPage
