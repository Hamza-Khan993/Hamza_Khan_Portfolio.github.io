class GitHub {
    constructor(){
        this.client_id = '1e9d7f0846878f0cc040';
        this.client_secret = 
        'e62494ae679ed4b104210c6133dcaa74900b1692';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }

}