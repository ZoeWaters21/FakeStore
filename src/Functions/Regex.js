export const PasswordValidationRegex = (input)=>{
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
    return passwordRegex.test(input);
}

export const EmailValidationRegex = (input) =>{
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(input)
}