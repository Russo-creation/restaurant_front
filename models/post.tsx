interface postInterface {
  id: number;
  userId: number;
  title: string;
  body: string;
}

class Post implements postInterface {
  readonly id: number;
  readonly userId: number;
  readonly title: string;
  readonly body: string;

  constructor(id: number, userId: number, title: string, body: string) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }
}

export default Post;
