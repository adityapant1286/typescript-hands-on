import {GithubApiService} from './services/GithubApiService'
import { User } from './models/User';
import { Repo } from './models/Repo';
import * as _ from 'lodash'
let service = new GithubApiService();

service.getUserInfo('adityapant1286', (user: User) => {

    service.getRepos('adityapant1286', (repos: Repo[]) => {
        let sorted = _.sortBy(repos, [(r: Repo) => r.size * -1]);
        let filtered = _.take(sorted, 5);

        user.repos = filtered;
        console.log('--------------------------------------');
        console.log(user);
        console.log('--------------------------------------');
            //console.log(repos);
    });

});

