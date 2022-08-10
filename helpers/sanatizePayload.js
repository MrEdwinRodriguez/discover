exports.sanatizeUser = (user) => {
    const userObj = {...user.toObject()};
    console.log(userObj)
    delete userObj.salt;
    delete userObj.hash;
    delete userObj.createdAt;
    delete userObj.updatedAt;
    return userObj;
};