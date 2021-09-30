import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "..//action/transactionActions"
import { bindActionCreators } from "redux";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
class TransactionForm extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                note: '',
                category:''
                
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {//invoked immidiately after update is done 
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length) {
            this.setState({ ...this.returnStateObject() })
        }
    }

    handleInputChange = (e) => {//to enable users to type in the text box/select values from dropdown
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()//To avoid unnecessary re renders
        if (this.props.currentIndex == -1){//To create a new node
            this.props.insertTransaction(this.state)
            toast.success("Added Note!!")
        }
        else{
            this.props.updateTransaction(this.state)//to update existing note
            toast.warning("Updated Note!!")
    }
    }

    render() {
        return (
           
            <form onSubmit={this.handleSubmit} autoComplete="off" className="Form">
                <textarea name="note" placeholder="Type here..." onChange={this.handleInputChange} value={this.state.note} required /><br />
                <select
           value={this.state.category}
            onChange={event =>
              this.setState({ category: event.target.value })
            }
          >
            <option value="Low Importance">Low Importance</option>
            <option value="Medium Importance">Medium Importance</option>
            <option value="High Importance">High Importance</option>
          </select>
                <button className="btnsub" type="submit">Add a Note</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        insertTransaction: actions.insert,
        updateTransaction: actions.update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)