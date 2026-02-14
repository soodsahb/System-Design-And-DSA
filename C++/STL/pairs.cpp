#include <iostream>
using namespace std;

int main(){


    pair<int,int> p={1,2};
    pair<int,pair<int,int>> r={1,{2,3}};
    cout<<p.first<<endl;
    cout<<r.second.first<<endl;

    pair<int,int> arr[]={{1,2},{3,4},{5,6}};
    cout<<arr[1].second<<endl;
    return 0;

}