import * as Yup from 'yup'
export const validate = Yup.object({
    fullName: Yup.string().max(10, 'Name should be less than 10 chars').required('* required'),
    email: Yup.string().email('Email is invalid').required('* required'),
    password: Yup.string()
        .min(8, 'password should be more than 8 characters')
        .required('* required')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
            'One Uppercase, One Lowercase, One Number and one special case Character'
        ),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'password must match')
        .required('* required'),
    agreed: Yup.boolean().equals([true], 'review and agree')
})