export function getbubblesortanimations(array){
    const animations = [];
    if(array.length<=1) return array;
    while(1){
        let x = true;
        for(let i=0;i<array.length-1;i++){
          animations.push([i,i+1]);
          animations.push([i,i+1]);
          let a=array[i],b=array[i+1];
            if(array[i]>array[i+1]){
                array[i]=b;
                array[i+1]=a;
                animations.push([i,b]);
                animations.push([i+1,a]);

                 
                x=false;
            }
            else{
              animations.push([i,a]);
              animations.push([i+1,b]) 
            }

        
        }
        if(x)break;
    }
    return animations;

}
export function getmergesortanimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

export function getquicksortanimations(array){
  const animations = [];
  quickSortHelper(array,0,array.length-1,animations);
  return animations;
}
function quickSortHelper(
  mainArray,
  start,
  end,
  animations
)
{
  if(start<end){
    let pi=partitionHelper(mainArray,start,end,animations);
    quickSortHelper(mainArray,start,pi-1,animations);
    quickSortHelper(mainArray,pi+1,end,animations);
  }
}
function partitionHelper(mainArray,start,end,animations){
  let pivot = mainArray[end];
  let i = start-1;
  for(let j= start;j<=end-1;j++){
    animations.push([j,pivot]);
    animations.push([j,pivot]);
    let a=mainArray[i],b=mainArray[j];
    if(mainArray[j]<pivot){
      mainArray[j]=a;mainArray[i]=b;
      animations.push([j,a]);
      animations.push([i,b]);
      i++;
    }
    else{
      animations.push([j,b]);
      // animations.push([i,a]);
    }
  }
  let a=mainArray[i+1],b=mainArray[end];
  mainArray[i+1]=b;mainArray[end]=a;
  animations.push([i+1,a]);
  animations.push([end,b]);
  animations.push([i+1,b]);
  animations.push([end,a]);
  return (i+1);
}
