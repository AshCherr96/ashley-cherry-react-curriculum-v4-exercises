export const getPosts = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=10'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch the list of posts.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getSinglePost = async (postId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch post with ID ${postId}.`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
