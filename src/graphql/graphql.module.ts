import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
    }),
  ],
  providers: [UsersResolver],
})
export class AppGraphQLModule {
    static forRoot(arg0: { autoSchemaFile: boolean; playground: boolean; }): import("@nestjs/common").Type<any> | import("@nestjs/common").DynamicModule | Promise<import("@nestjs/common").DynamicModule> | import("@nestjs/common").ForwardReference<any> {
        throw new Error('Method not implemented.');
    }
}
