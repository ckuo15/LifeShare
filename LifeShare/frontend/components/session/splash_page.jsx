import SignupForm from './signup_form_container';
import React from 'react';


class Splash extends React.Component {
    constructor(props){
        super(props);
        // this.state = {counter: 0}
        // this.animate = this.animate.bind(this);
    }

    // componentDidMount() {
    //     this.animate();
    // }
    // animate() {
    //     let name;
    //     let number;
    //    return setInterval(() => {
    //         number = (this.state.counter + 1)% 21;
    //         this.setState({counter: number })
    //     }, 150)
    // }
    
    // render (){
    //     let newName = `other-splash-image trans-${this.state.counter}`;
    //     const img_two = <img className='splash-image' src='assets/image2.png' />
    //     return (
    //         <div className='splash-container'>
    //             <div className='splash-images'>
    //                {img_two }
    //                <img className={newName} src='assets/croppedimage1'/>
    //             </div>
    //             <SignupForm location = {this.props.location}/>
    //         </div>
    //     )
    // }

    render (){
        return (
            <div className='splash-container'>
               <div className='splash-images'>
                   <img className='other-splash-image' src={ window.othersplashURL }/>
                    <img className='splash-image' src={ window.splashURL }/>
                </div>
                <SignupForm location = {this.props.location}/>
             </div>
        )
    }
};

export default Splash;