import React, {Component} from 'react';
import './Madewithlove.css'


class Madewithlove extends Component {

    constructor(props){
        super(props);
        this.state = {
            state : this.props
        }
        
        this.message = this.props.emoji ? 
                       this.emojiMessage(this.props) :
                       this.simpleMessage(this.props); 
    }

    emojiMessage(props){
        const {by} = props;
        let message = `Made with ❤️`;
        if(by){
            message = `${message} by ${by}`;
        }
        return message;   
    }

    simpleMessage(props){
        console.log('simplemessage working');
        const {by} = props;
        let message = `Made with <3`;
        if(by){
            message = `${message} by ${by}`;
        }
        return message;
    }
    
    componentDidMount(){
        let i = 0;
        const typeWriter = () => {
            if(i < this.message.length){
                document.querySelector('.madewithlove').innerHTML += this.message.charAt(i);
                i++;
                setTimeout(typeWriter,(this.props.speed || 50));
            }            
        }           
        if(this.props.typed){
            typeWriter();
        }else{
            document.querySelector('.madewithlove').innerHTML += this.message;
        }
       
    }

    render(){
        return(
            <span className="madewithlove"></span>
        )
    }
    
} 
export default Madewithlove;