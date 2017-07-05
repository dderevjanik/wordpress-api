# Wordpress API

## Installation

*npm is missing, you need to clone repo*

## Examples

### `connect(host, hooks)`

```javascript
import { connect } from 'wordpress-api';

const connection = await connect('https://www.mywordpress.com');
const posts = connection.posts.getAllPosts();
const postWithId = connection.posts.getPost(23);
```
