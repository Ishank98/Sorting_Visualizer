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