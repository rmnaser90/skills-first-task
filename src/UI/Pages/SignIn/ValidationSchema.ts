import * as Yup from 'yup'

export    const validate = Yup.object({
    email: Yup.string().email('Enter a valid email')
})