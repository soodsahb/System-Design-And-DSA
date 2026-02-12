#include <iostream>
using namespace std;


void greet(){
    cout<<"Hello Pranav"<<endl;
}

int sum(int a,int b){
    int sum =a+b;
    cout<<"Sum is "<<sum<<endl;
}
int main(){

    greet();
    sum(4,5);
    return 0;

}