const TYPES = {
  RedisConnection: Symbol.for('RedisConnection'),

  GetHelloWorldAction: Symbol.for('GetHelloWorldAction'),
  GetHelloWorldResponder: Symbol.for('GetHelloWorldResponder'),
  GetHelloWorldDomain: Symbol.for('GetHelloWorldDomain'),

  PostUserNameAction: Symbol.for('PostUserNameAction'),
  PostUserNameResponder: Symbol.for('PostUserNameResponder'),
  PostUserNameDomain: Symbol.for('PostUserNameDomain'),

  UserRepository: Symbol.for('UserRepositoryInterface'),

  UuidFactory: Symbol.for('UuidFactory'),

  UserService: Symbol.for('UserService'),
};

export { TYPES };
