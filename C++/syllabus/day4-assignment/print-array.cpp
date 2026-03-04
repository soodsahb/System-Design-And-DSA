#include<iostream>
using namespace std;

class Student{
    public:
    string name;
    int rollno;

    void setData(string n,int a){
        name=n;
        rollno=a;
    }
};


void printArray(Student student[],int size){
    for(int i=0;i<size;i++){
     cout<<"Student name is "<<student[i].name<<" and roll no is "<<student[i].rollno<<endl;
    }
}


int main(){

    Student* s= new Student[3];

    s[0].setData("Pranav",24);
    s[1].setData("Rishav",25);
    s[2].setData("Raghav",26);


    printArray(s,3);

    delete[ ]s;

    return 0;

}