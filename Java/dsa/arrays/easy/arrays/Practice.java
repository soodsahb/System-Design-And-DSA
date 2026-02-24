import java.util.ArrayList;
import java.util.List;

public class Practice{


    public static List<Integer> union(int[] arr1,int[] arr2){
     
        List<Integer> result= new ArrayList<>();
        int i=0;
        int j=0;

        while(i<arr1.length&&j<arr2.length){
         
            if(arr1[i]<=arr2[j]){
              if(result.isEmpty()||result.get(result.size()-1)!=arr1[i]){
                result.add(arr1[i]);
                i++;
            }
            }else{
                  if(result.isEmpty()||result.get(result.size()-1)!=arr2[j]){
                result.add(arr2[j]);
                j++;
            }
            }
           
        }

        while(i<arr1.length){
            if(result.isEmpty()||result.get(result.size()-1)!=arr1[i]){
                result.add(arr1[i]);
              
            }
              i++;
        }

        while(j<arr2.length){
            if(result.isEmpty()||result.get(result.size()-1)!=arr2[j]){
                result.add(arr2[j]);

            }
            j++;
        }

        return result;

    } 
}