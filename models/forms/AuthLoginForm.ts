export class AuthLoginForm {
    /**
     * Attributes
     */
    username?: string;
    password?: string;

    constructor(form?: Partial<AuthLoginForm>) {
        Object.assign(this, form);
    }
}
