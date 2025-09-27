interface Person {
    getUUID: () => string;
    getAge: (birthDate: Date) => number;
}

interface PersonBuilder {
    id: string;
    name: string;
    birthdate: string;
    age: number;
}

export const makePersonBuidler = (
    getUUID: Person["getUUID"],
    getAge: Person["getAge"]
) => {
    return (personBuilder: {
        name: string;
        birthdate: string;
    }): PersonBuilder => {
        return {
            id: getUUID(),
            name: personBuilder.name,
            birthdate: personBuilder.birthdate,
            age: getAge(new Date(personBuilder.birthdate)),
        };
    };
};
