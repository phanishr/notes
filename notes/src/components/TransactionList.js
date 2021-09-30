import React, { Component } from 'react'
import TransactionForm from './TransactionForm'
import { connect } from "react-redux";
import * as actions from "../action/transactionActions"
import { bindActionCreators } from "redux";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
let a='';
class TransactionList extends Component {


    handleEdit = (index) => {
        this.props.updateTransactionIndex(index)
    }
    handleInputChangeSearch = (e) => {
        a=e.target.value
        console.log(a)
       this.handleSearch(e)
     }
     handleSearch = (index) => {
        this.props.searchTransaction(index)
    }


    handleDelete = (index) => {
        toast.error("Deleted")
        this.props.deleteTransaction(index)
    }

    render() {
        return (
         
            <div>
                   <h1> Notes</h1>
                   <div className="Header">

                <input name="search" placeholder="search" onChange={this.handleInputChangeSearch} value={a} /><br />
                   </div>
                <TransactionForm />
     
                
                <div className="notelist">
                    
                        {this.props.list.map((item, index) => {
                             if(item.note.includes(a)){
                                 let cn='note '.concat(item.category)
                                 console.log(cn)
                            return <div className={cn} key={index}>
                                <span>{item.note}</span>
                                <button className="EditButton" onClick={() => this.handleEdit(index)}>Edit</button>
                                <button className="DeleteButton" onClick={() => this.handleDelete(index)}>Delete</button>
                              
                            </div>
                             }
                        })}
                    
                </div>



            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateTransactionIndex: actions.updateIndex,
        deleteTransaction: actions.Delete,
        searchTransaction:actions.search
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)