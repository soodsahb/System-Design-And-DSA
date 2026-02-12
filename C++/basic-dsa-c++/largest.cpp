#include <iostream>
using namespace std;

int main(){


    int arr[5]={1,2,3,4,5};

    cout<<arr[0]<<endl;

    int max=arr[0];

    for(int i=0;i<5;i++){

        if(arr[i]>max){
            max=arr[i];
        }
          
    }

    cout<<"Max is "<<max<<endl;

}