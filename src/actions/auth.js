import { requests } from '../utils/agent';

export default {
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } })
};
