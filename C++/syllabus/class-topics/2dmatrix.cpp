// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;


void acceptdata(int** p,int rows, int cols){
    for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            cin>>p[i][j];
        }
    }
}

void displaydata(int**p, int rows,int cols){
    for(int i=0;i<rows;i++){
        for(int j=0;j<cols;j++){
            cout<<p[i][j]<<" ";
        }
    }
}

int main() {
    // Write C++ code here
  int **p = new int*[3];
  int rows=3,cols=3;
  
  for(int i=0;i<rows;i++){
      p[i]=new int[cols];
  }
  acceptdata(p,rows,cols);
  displaydata(p,rows,cols);

    for(int i = 0; i < rows; i++){
        delete[] p[i];
    }
    delete[] p;
  

    return 0;
}