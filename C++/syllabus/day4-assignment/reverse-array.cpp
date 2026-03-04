#include<iostream>
using namespace std;

void reversearr(char*arr,int l,int r ){
   
    while(l<r){
     int temp=arr[r];
    arr[r]=arr[l];
    arr[l]=temp;
    l++;
    r--;
    }
    
}

void acceptdata(char*arr,int n){
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
}

int main(){
    int n;
    cout<<"enter number of characters you want to enter";
    cin>>n;
    
    static int l=0,r=n-1;
    char* arr= new char[n];
    cout<<"Enter values seperated by space";
    acceptdata(arr,n);
    reversearr(arr,l,r);

    for(int i=0;i<n;i++){
        cout<<arr[i];
    }

    delete[] arr;
    return 0;
}