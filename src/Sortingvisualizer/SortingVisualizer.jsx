import React, {Component}from 'react';
import './Sortingvisualizer.css';
import {getbubblesortanimations} from '../SortingAlgorithms/Bubble_sort.js' 
import {getmergesortanimations} from '../SortingAlgorithms/Merge_Sort.js' 
import {getquicksortanimations} from '../SortingAlgorithms/Quick_sort.js'


let ANIMATION_SPEED_MS = 5;

let NUMBER_OF_ARRAY_BARS = 200;

let BAR_WIDTH = 5;

const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';
var value = false;
export default class SortingVisualizer extends Component{
    constructor(){
        super();
        this.state={
            array: [],
        };
    }

    componentDidMount(){
        const array= [];
        for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++){
            array.push(randomIntFromInterval(5,700));
        }
        this.setState({array: array});
    }
    reset(){
        window.location.reload(false);
    }
    resetArray(){
        if(value)return;
        this.componentDidMount();
    }
    setAnimationspeed(){
        const prev_value = ANIMATION_SPEED_MS;
        ANIMATION_SPEED_MS = window.prompt("range for animation speed (0,50]");
        while(ANIMATION_SPEED_MS<=0 || ANIMATION_SPEED_MS>50 ){
            if(ANIMATION_SPEED_MS === null){
                ANIMATION_SPEED_MS = prev_value;
                return;
            }
        alert("Enter a Positive integer less than 51");
        ANIMATION_SPEED_MS = window.prompt("range for animation speed (0,50]");
        }

    }
    setArraysize(){
        if(value)return;
        const prev_value = NUMBER_OF_ARRAY_BARS;
        NUMBER_OF_ARRAY_BARS = window.prompt("range for array size [20,330]");
        while(NUMBER_OF_ARRAY_BARS<=20 || NUMBER_OF_ARRAY_BARS>330){
            if(NUMBER_OF_ARRAY_BARS === null){
                NUMBER_OF_ARRAY_BARS = prev_value;
                break;
            }
            alert("Input out of range");
            NUMBER_OF_ARRAY_BARS = window.prompt("range for array size [20,330]");
        }
        BAR_WIDTH = Math.floor(1500/NUMBER_OF_ARRAY_BARS);
        this.componentDidMount();
    }
    invertbuttons(){
        value= !value;
        console.log(value);
    }
    mergesort(){
        if(value)return;
        this.invertbuttons();
        const animations = getmergesortanimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }

    }
    quicksort(){
        if(value)return;
        this.invertbuttons();
        const animations = getquicksortanimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 < 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }


    }
    bubblesort(){
        if(value)return;
       this.invertbuttons();
        const animations = getbubblesortanimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 < 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }

    }
    heapsort(){
        if(value)return;
        this.invertbuttons();
    }
    render(){
        const{array} = this.state;
        return (
            <React.Fragment>
                
                <div className="navbar">
                <button className="button" onClick={()=> this.reset()}>Reset</button>
            <button className="button" onClick={()=> this.resetArray()}>Generate New Array</button>
            <button className="button" onClick={()=> this.mergesort()}>Merge Sort</button>
            <button className="button" onClick={()=> this.quicksort()}>Quick Sort</button>
            <button className="button" onClick={()=> this.bubblesort()}>Bubble Sort</button>
            <button className="button"  onClick={()=> this.heapsort()}>Heap Sort</button>
            <button className="button"  onClick={()=> this.setAnimationspeed()}>Animation Speed</button>
            <button className="button"  onClick={()=> this.setArraysize()}>Array Size</button>
            </div>
            <div><h3 style={{color: "black", margin: `${90}px`}}>Sorting Visualizer</h3></div>
            <div className="array-container">
             {array.map((value,idx)=>(
                <div 
                    className="array-bar" 
                    key={idx}
                    style={{height: `${value}px`, width:`${BAR_WIDTH}px`}}>
                    </div>
             ))}

            </div>
            
            <div className="bottomright">Made By: Ishank Mittal</div>
        </React.Fragment>
        
        
        );
    
    }
}
    
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}































