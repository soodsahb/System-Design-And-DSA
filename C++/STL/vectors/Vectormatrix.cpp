#include<iostream>
#include<vector>
using namespace std;

void acceptData(vector<vector<int>> &mat ,int rows,int cols){
 
    for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            cin>>mat[i][j];
        }
    }
}

void displayData(vector<vector<int>> &mat,int rows,int cols){
      for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            cout<<mat[i][j]<<" ";
        }
    }
}

int main(){

    int rows,cols;

    cout<<"Enter rows and columns ";
    cin>>rows>>cols;

    vector<vector<int>> mat(rows,vector<int>(cols));
    acceptData(mat,rows,cols);
    displayData(mat,rows,cols);


    return 0;
}
