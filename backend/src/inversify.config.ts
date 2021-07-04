import { Container } from 'inversify';

import { GetHelloWorldAction } from './application/api/GetHelloWorld/action';
import { GetHelloWorldDomain } from './application/api/GetHelloWorld/domain';
import { GetHelloWorldResponder } from './application/api/GetHelloWorld/responder';
import { TYPES } from './types/DependencyTypes';

const myContainer = new Container();
myContainer.bind<GetHelloWorldDomain>(TYPES.GetHelloWorldDomain).to(GetHelloWorldDomain);
myContainer.bind<GetHelloWorldResponder>(TYPES.GetHelloWorldResponder).to(GetHelloWorldResponder);
myContainer.bind<GetHelloWorldAction>(TYPES.GetHelloWorldAction).to(GetHelloWorldAction);

export { myContainer };
