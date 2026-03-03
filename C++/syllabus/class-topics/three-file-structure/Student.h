#define STUDENT_H

class Student{
    char* name;
    int age;
    
    public:
    Student(const char*n,int a);
    void setName(const char*n);
    const char* getName();
    void setAge(int a);
    void display();
    ~Student();
};