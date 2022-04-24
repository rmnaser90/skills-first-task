import * as Yup from 'yup'
export const validate = Yup.object({
    fullName: Yup.string().max(40, 'Name should be less than 40 chars').required('* required'),
    email: Yup.string().email('Email is invalid').required('* required')
})
