#include<iostream>
#include<cstring>
#include "Student.h"
using namespace std;

   Student::Student(const char*n, int a){
    name=new char[strlen(n)+1];
    strcpy(name,n);
    age=a;
   }

   void Student::setName(const char*n){
    delete[] name;
    name=new char[strlen(n)+1];
    strcpy(name,n);
   }

   const char* Student::getName(){
    return name;
   }

   void Student::setAge(int n){
    age=n;
   }

   void Student::display(){
    cout<<"Name: "<<name<<" Age: "<<age<<endl;
   }

   Student::~Student(){
    delete[] name;
   }
 
