export const userInfo = {
    email: '', 
    password: '',
    set setEmail(email: string) {
        this.email = email;
    },
    set setPassword(password: string) {
        this.password = password;
    },
    get getEmail() {
        return this.email;
    },
    get getPassword() {
        return this.password;
    }
}