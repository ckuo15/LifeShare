export const fetchPosts = () => {
    return $.ajax({
        method: "GET",
        url: 'api/posts'
    })
};


export const fetchPost = (postId) => {
    return $.ajax({
        method: "GET",
        url: `api/posts/${postId}`
    })
};

export const createPost = (post) => {
    return $.ajax({
        method: 'POST',
        url: 'api/posts',
        data: post,  //formData will already put it in a key
        contentType: false,
        processData: false
    })
};

export const updatePost = (post) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/posts/${post.id}`,
        data: { post }
    })
};

export const deletePost = (postId) => {
    debugger;
    return $.ajax({
        method: 'DELETE',
        url: `api/posts/${postId}`
    })
};