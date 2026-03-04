#include<iostream>
using namespace std;

int factorial(int n){

    if(n<=1){
        return 1;
    }

    return n*factorial(n-1);


}


int main(){


    int n;
    cout<<"Enter number for which you want to find factorial";
    cin>>n;

    for(int i=1;i<=n;i++){
        cout<<"Factorial for "<<i<<" is: " <<factorial(i)<<endl;
    }
    return 0;
}