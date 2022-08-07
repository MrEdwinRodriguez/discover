export const validateSignup = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    };
    if (!values.lastName) {
        errors.lastName = 'Required';
    };
    if (!values.email) {
        errors.email = 'Required';
    } else if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }
    if (!values.password) {
        errors.password = 'Required';
    };
    if (!values.password2) {
        errors.password2 = 'Required';
    } 
    // else if (values.password == values.password2) {
    //     errors.password2 = 'Does not match password';
    // }

    return errors;
};
