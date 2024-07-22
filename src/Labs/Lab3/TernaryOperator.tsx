export default function TernaryOperator() {
    let true1 = true, false1 = false;
   let loggedIn = true;

 return(
    <div id="wd-ternary-operator">
       <h4>Logged In</h4>
       { loggedIn ? <p>Welcome</p> : <p>Please login</p> } <hr/>
    </div>
 );
}
