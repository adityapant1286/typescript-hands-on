import * as request from 'request'
import { User } from '../models/User';
import { Repo } from '../models/Repo';

const OPTIONS: any = {
    headers: {
        'User-Agent' : 'request'
    },
    json: true
}

const BASE_URL: string = "https://api.github.com/users/";

export class GithubApiService {

    getUserInfo(userName: string, callback: (user: User) => any) {
    
        request.get(BASE_URL + userName, OPTIONS, (error: any, response : any, body: any) => {
            let user = new User(body);
            callback(user);
        })
    }

    getRepos(userName: string, callback: (repos: Repo[]) => any) {

        request.get(BASE_URL + userName + '/repos', OPTIONS, (error: any, response: any, body: any) => {
            let repos = body.map((repo: any) => new Repo(repo));
            callback(repos);
        })
    }
}