import React from 'react';
import './Sortingvisualizer.css';
import {getbubblesortanimations} from '/home/ishankmittal1998/sortingvisualizer/src/SortingAlgorithms/SortingAlgorithms.js' 
import {getmergesortanimations} from '/home/ishankmittal1998/sortingvisualizer/src/SortingAlgorithms/SortingAlgorithms.js' 
import {getquicksortanimations} from '/home/ishankmittal1998/sortingvisualizer/src/SortingAlgorithms/SortingAlgorithms.js'


const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 350;

const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';
export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }
    resetArray(){
        const array= [];
        for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++){
            array.push(randomIntFromInterval(5,700));
        }
        this.setState({array});
    }
    resetboth(){
        this.resetArray();
        this.resetArrayagain();
    }
    resetArrayagain(){
        const array=this.state.array;
        for(let i=0;i<array.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const barStyle = arrayBars[i].style;
            barStyle.height = `${array[i]}px`;
            barStyle.backgroundColor = 'turquoise';


        }
    }
    mergesort(){
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
        const animations = getquicksortanimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            if(i%4===0)barOneStyle.backgroundColor = 'black';
            else barOneStyle.backgroundColor = PRIMARY_COLOR;
            }, i * ANIMATION_SPEED_MS);


          }


    }
    bubblesort(){
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

    }
    render(){
        const{array} = this.state;
        return (
            <div className="array-container">
             {array.map((value,idx)=>(
                <div 
                    className="array-bar" 
                    key={idx}
                    style={{height: `${value}px`}}></div>
             ))}
             <button onClick={()=> this.resetboth()}>Generate New Array</button>
             <button onClick={()=> this.mergesort()}>Merge Sort</button>
             <button onClick={()=> this.quicksort()}>Quick Sort</button>
             <button onClick={()=> this.bubblesort()}>Bubble Sort</button>
             <button onClick={()=> this.heapsort()}>Heap Sort</button>
            </div>
        );
    
    }
}
    
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function check(a1,a2){
    if(a1.length!==a2.length)return false;
    for(let i=0;i<a1.length;i++){
        if(a1[i]!==a2[i])return false;
    }
    return true;
}






























