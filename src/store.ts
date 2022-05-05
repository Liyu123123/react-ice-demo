import { createStore } from 'ice';
import user from '@/models/user';
import project from '@/models/counter';

const store = createStore(
  {
    user,
    project,
  },
  {
    // options
  },
);
export default store;
