interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): String;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}


class Teacher implements TeacherInterface {
    workFromHome(): String {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workTeacherTasks(): string {
        return 'Getting to director tasks';
    }
}


function createEmployee(salary: string | number): Director | Teacher {
    if(typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}