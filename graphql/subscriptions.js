/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($username: String) {
    onCreatePost(username: $username) {
      name
      id
      title
      content
      username
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($username: String) {
    onUpdatePost(username: $username) {
      name
      id
      title
      content
      username
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($username: String) {
    onDeletePost(username: $username) {
      name
      id
      title
      content
      username
      createdAt
      updatedAt
    }
  }
`;