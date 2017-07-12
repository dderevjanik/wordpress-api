# Wordpress API

## Installation

`npm install wordpress-api`

## Examples

### `connect(host, hooks)`

```javascript
import { connect } from 'wordpress-api';

const connection = await connect('https://www.mywordpress.com');
const posts = connection.posts.getAllPosts();
const postWithId = connection.posts.getPost(23);
```

```javascript
console.log(connection);
{ categories:
   { createCategory: [Function: createCategory],
     deleteCategory: [Function: deleteCategory],
     getCategories: [Function: getCategories],
     getCategory: [Function: getCategory],
     updateCategory: [Function: updateCategory] },
  comments:
   { createComment: [Function: createComment],
     deleteComment: [Function: deleteComment],
     getComment: [Function: getComment],
     getComments: [Function: getComments],
     updateComment: [Function: updateComment] },
  media:
   { createMedia: [Function: createMedia],
     deleteMedia: [Function: deleteMedia],
     getAllMedia: [Function: getAllMedia],
     getMedia: [Function: getMedia],
     updateMedia: [Function: updateMedia] },
  pages:
   { createPage: [Function: createPage],
     deletePage: [Function: deletePage],
     getPage: [Function: getPage],
     getPages: [Function: getPages],
     updatePage: [Function: updatePage] },
  postRevisions:
   { deletePostRevision: [Function: deletePostRevision],
     getPostRevision: [Function: getPostRevision],
     getPostRevisions: [Function: getPostRevisions] },
  postStatuses:
   { getStatus: [Function: getStatus],
     getStatuses: [Function: getStatuses] },
  postTypes: { getType: [Function: getType], getTypes: [Function: getTypes] },
  posts:
   { createPost: [Function: createPost],
     deletePost: [Function: deletePost],
     getPost: [Function: getPost],
     getPosts: [Function: getPosts],
     updatePost: [Function: updatePost] },
  settings:
   { getAllSettings: [Function: getAllSettings],
     updateSettings: [Function: updateSettings] },
  tags:
   { createTag: [Function: createTag],
     deleteTag: [Function: deleteTag],
     getTag: [Function: getTag],
     getTags: [Function: getTags],
     updateTag: [Function: updateTag] },
  taxanomies:
   { getTaxanomies: [Function: getTaxanomies],
     getTaxanomy: [Function: getTaxanomy] },
  users:
   { isLoggegedId: [Function: isLoggegedId],
     createUser: [Function: createUser],
     deleteUser: [Function: deleteUser],
     getUser: [Function: getUser],
     getUsers: [Function: getUsers],
     updateUser: [Function: updateUser] } }
```

## Dev

In order to run `npm test`, you need to have running wordpress on
`localhost:8080/wordpress` with user, where username: **root** and password: **root**.
