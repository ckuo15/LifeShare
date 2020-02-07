export const fetchUser = userId => {
    return $.ajax({
        method: "GET",
        url: `api/users/${userId}`
    })
};

export const updateUser = (formData, sessionId) => {
    debugger;
    return $.ajax({
        method: "PATCH",
        url: `api/users/${sessionId}`,
        data: formData,
        contentType: false,
        processData: false
    })
};