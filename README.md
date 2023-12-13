# TopLogger SDK

This SDK provides a set of API adapters for interacting with the TopLogger climbing website. It is written in TypeScript and uses fetch for making HTTP requests.

## Installation
This SDK is not published on npm yet, so you'll need to clone the repository and build it yourself.

## Usage
The SDK provides several classes for interacting with different parts of the TopLogger API. Each class extends the APICaller base class, which handles making HTTP requests to the API.

Here are some examples of how to use the SDK:

### Fetching a User 👤
```ts
import UserAPI from './api/User';

const userAPI = new UserAPI();
const response = await userAPI.getUser(1);

if (response.ok) {
    console.log(response.body);
} else {
    console.error(response.message);
}
```

### Fetching a Gym 🏋️
```ts
import GymAPI from './api/Gym';

const gymAPI = new GymAPI();
const response = await gymAPI.getGym(1);

if (response.ok) {
    console.log(response.body);
} else {
    console.error(response.message);
}
```

### Fetching Climbs 🧗
```ts
import ClimbAPI from './api/Climb';

const climbAPI = new ClimbAPI();
const response = await climbAPI.getClimbs(1);

if (response.ok) {
    console.log(response.body);
} else {
    console.error(response.message);
}
```

## Development
This project uses ESLint for linting and Prettier for code formatting. You can run the linter with the following command:
```bash
npm run lint
```

And you can automatically fix most linting errors with:
```bash
npm run lint:fix
```
## Contributing
Contributions are welcome. Please submit a pull request or create an issue to discuss any changes you'd like to make.

## License
This project is licensed under the MIT License.