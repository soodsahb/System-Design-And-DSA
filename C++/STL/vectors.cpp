#include <bits/stdc++.h>
using namespace std;

int main(){


   vector<int> v;
   v.push_back(1);
   v.emplace_back(2);

  

   vector <pair<int,int>> vec;
   vec.push_back({1,2});
    vector<pair<int,int>>::iterator it=vec.begin();

    cout<<it->first<<it->second<<endl;
   
    return 0;

}