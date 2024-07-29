import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";
import PassingFunctions from "./assingFunctions";

export default function Lab4() {
    function sayHello() {
        alert("Hello World!");
      }
    
    return (
      <div id="wd-lab4" className="container-fluid">
        <h2>Lab 4</h2>
        <ReduxExamples />
        <ClickEvent />
        <PassingDataOnEvent />
        <PassingFunctions theFunction={sayHello} />
        <EventObject />
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <ParentStateComponent />
        
    </div>
    );
    }