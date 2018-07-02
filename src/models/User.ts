import { Repo } from "./Repo";

export class User {
    login : string;
    fullname: string;
    repoCount: number;
    followerCount: number;
    repos?: Repo[];

    constructor(response: any) {
        this.login = response.login;
        this.fullname = response.name;
        this.repoCount = response.public_repos;
        this.followerCount = response.followers;
    }
}