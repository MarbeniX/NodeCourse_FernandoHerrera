const makePersonBuidler = (getUUID, getAge) => {
    return (personBuilder = ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate),
        };
    });
};

module.exports = { makePersonBuidler };
