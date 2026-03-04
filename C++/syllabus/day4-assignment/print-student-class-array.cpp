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

void acceptData(Student s[],int n){
for(int i=0;i<n;i++){
        string name;
        int rollno;
        cout<<"Enter name and roll no for "<<i+1<<" student";
        cin>>name>>rollno;
        s[i].setData(name,rollno);
        cout<<endl;
    }
}

int main(){

    int n;
    cout<<"Enter number of students you want to enter";
    cin>>n;

    Student* s= new Student[n];

    
    acceptData(s,n);
    printArray(s,n);

    delete[ ]s;

    return 0;

}