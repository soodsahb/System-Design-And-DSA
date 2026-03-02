#include<iostream>
#include<cstring>
using namespace std;

class Student{
    private:
    int age;
    char* name; //pointer

    public:


    //constructor
    Student(const char* n, int a){

        name = new char[strlen(n)+1]; //one more for "\0";
        strcpy(name,n);
        age=a;

    };

    //setter

    void setName(const char *n){
        delete[] name; //old memory free
        name= new char[strlen(n)+1];
        strcpy(name,n);
    }

    const char* getName(){
        return name;
    }

    void show() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }

    //destructor

    ~Student(){
        delete[] name;
        cout<<"Destructor called \n";
    }


};

int main(){
    Student s1("Pranav",24);
    s1.show();
    
    s1.setName("Deewana");
    s1.show();

    cout<<"Name from getter "<<s1.getName()<<endl;
}