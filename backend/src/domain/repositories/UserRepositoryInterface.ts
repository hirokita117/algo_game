import { User, UserInitialProps } from '../entities/Player/User';

export interface UserRepositoryInterface {
  save(props: UserInitialProps): Promise<User>;
}
