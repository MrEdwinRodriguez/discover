exports.sanatizeUser = (user) => {
    const userObj = {...user.toObject()};
    userObj.full_name = userObj.first_name + " " + userObj.last_name;
    delete userObj.salt;
    delete userObj.hash;
    delete userObj.createdAt;
    delete userObj.updatedAt;
    return userObj;
};