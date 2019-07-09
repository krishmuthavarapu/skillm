export class StudentData{
    username: string;
    number: string;
    email: string;
    passing_year: string;
    qualification: string;
    city: string;
    course_interested: string;

    constructor(username: string, number: string, email: string, passing_year: string, qualification: string, city: string, course_interested: string) {
        this.username = username;
        this.number = number;
        this.email = email;
        this.passing_year = passing_year;
        this.qualification = qualification;
        this.city = city;
        this.course_interested = course_interested;
    }
}