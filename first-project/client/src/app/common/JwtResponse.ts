export class JwtResponse {
    token: string;
    type: string;
    username: string;

    constructor(token: string) {
        this.token = token;
    }
}