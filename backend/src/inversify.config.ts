import { Container } from 'inversify';

import { GetHelloWorldAction } from './application/api/GetHelloWorld/action';
import { GetHelloWorldDomain } from './application/api/GetHelloWorld/domain';
import { GetHelloWorldResponder } from './application/api/GetHelloWorld/responder';
import { PostUserNameAction } from './application/api/PostUserName/action';
import { PostUserNameDomain } from './application/api/PostUserName/domain';
import { PostUserNameResponder } from './application/api/PostUserName/responder';
import { TYPES } from './types/DependencyTypes';

const myContainer = new Container();
myContainer.bind<GetHelloWorldDomain>(TYPES.GetHelloWorldDomain).to(GetHelloWorldDomain);
myContainer.bind<GetHelloWorldResponder>(TYPES.GetHelloWorldResponder).to(GetHelloWorldResponder);
myContainer.bind<GetHelloWorldAction>(TYPES.GetHelloWorldAction).to(GetHelloWorldAction);

myContainer.bind<PostUserNameAction>(TYPES.PostUserNameAction).to(PostUserNameAction);
myContainer.bind<PostUserNameDomain>(TYPES.PostUserNameDomain).to(PostUserNameDomain);
myContainer.bind<PostUserNameResponder>(TYPES.PostUserNameResponder).to(PostUserNameResponder);

export { myContainer };
