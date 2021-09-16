export type UserInitialProps = {
  id: string;
  name: string;
};

export class User {
  public constructor(private props: UserInitialProps) {}

  getId() {
    return this.props.id;
  }

  getName() {
    return this.props.name;
  }
}
