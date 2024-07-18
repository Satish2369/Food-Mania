import React from "react";



class UserClass extends React.Component{

constructor (props) {

    super(props)
    console.log(props);
}



 render() {


      return(
<div>

    <h1> we are a team of enthusiastic people to help u find a good meal</h1>
    <h2>{this.props.name}</h2>
</div>



      )
 }

}

export default UserClass;