#include<iostream>
#include "Student.h"
using namespace std;


int main(){
       Student s1("Pranav", 24);
       s1.display();

       s1.setName("Rishav");
       s1.setAge(25);
       s1.display();
    return 0;
}