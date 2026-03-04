#include<iostream>
using namespace std;

void swapnumbers(int &a,int&b){
    int temp=b;
    b=a;
    a=temp;
}

int main(){
     
    int a,b;
    cout<<"Enter two numbers";
    cin>>a>>b;
    swapnumbers(a,b);

    cout<<"First number is "<<a<<" second number is "<<b;
    return 0;
}