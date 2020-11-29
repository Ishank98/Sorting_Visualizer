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
    let i = start;
    for(let j= start;j<=end-1;j++){
      animations.push([j,end]);
      animations.push([j,end]);
      if(mainArray[j]<pivot){
        let a,b;
        a=mainArray[i];b=mainArray[j];
        mainArray[j]=a;mainArray[i]=b;
        animations.push([j,a]);
        animations.push([i,b]);
        i++;
      }
      else{
        animations.push([end,pivot]);
        animations.push([j,mainArray[j]]);
      }
    }
    let a=mainArray[i],b=mainArray[end];
    mainArray[i]=b;mainArray[end]=a;
    animations.push([i,end]);
    animations.push([i,end]);
    animations.push([i,b]);
    animations.push([end,a]);
    return i;
  }