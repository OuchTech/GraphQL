import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  @Query(() => String)
  async users() {
    return JSON.stringify([
      { id: 1, name: 'User 1', email: 'user1@example.com' },
    ]);
  }
}
