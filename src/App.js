import React, { Component } from 'react';
import './App.css';

import Comment from './Comment';
import Comments from './Comments';
import Login from './Login';
import SignUp from  './components/SignUp'
import Dialog from './components/Dialog';
import User from './components/User';

import {
  Container,
  ProgressBar,
} from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props)
    this.database = this.props.database
  }

  state = {
    newComment: '',
    comments: [],
    isLoading: false,
    showDialog: false,
    msgErro: '',
    isAuth: false,
    user: {},
    userScreen: 'login', // signup
  }

  onSendNewComment = (comment) => {
    const id = this.database.ref().child('comments').push().key
    const comments = {}
    comments['comments/' + id] = {
      comment,
      email: this.state.user.email,
      userId: this.state.user.uid
    }
    this.database.ref().update(comments)
  }

  componentDidMount() {

    const { auth } = this.props

    this.setState({ isLoading: true })
    this.comments = this.database.ref('comments')
    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val(),
        isLoading: false
      })
    })

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ isAuth: true, user })
      }
    })
  }

  login = async (email, passwd) => {
    const { auth } = this.props
    try {
      await auth.signInWithEmailAndPassword(email, passwd)
    } catch (error) {
      this.handleShow(error.code)
    }
  }

  logout = () => {
    const { auth } = this.props;
    try {
      auth.signOut()
      this.setState({ user:{}, isAuth:false})
    } catch (error) {
       this.handleShow(error.code)
    }
  }

  createAccount = async (email, passwd) => {
    const { auth } = this.props
    try {
      await auth.createUserWithEmailAndPassword(email, passwd)
    } catch (error) {
      this.handleShow(error.code)
    }
  }

  handleClose = () => {
    this.setState({ showDialog: false, msgErro: '' });
  }

  handleShow = (msgErro) => {
    this.setState({ showDialog: true, msgErro });
  }

  changeScreen = (screen) => {
    this.setState({ userScreen: screen })
  }

  render() {

    const {
      comments,
      isLoading,
      isAuth,
      showDialog,
      msgErro,
      user,
      userScreen,
    } = this.state

    return (
      <Container style={{ marginTop: '5em', border: 'solid 1px #007bff', borderRadius: '10px', padding: '10px' }} >
        {
          isAuth && !isLoading && <User email={user.email} logout={this.logout}   />
        }
        {
          isLoading
            ?
            <ProgressBar label='Carregando ...' animated now={100} />
            :
            <div>
              {!isAuth 
                &&  userScreen ==='login'  &&
                 <Login login={this.login} changeScreen={this.changeScreen} />
              }
              {!isAuth 
                &&  userScreen ==='signup'  &&
                 <SignUp createAccount={this.createAccount} changeScreen={this.changeScreen} />
              }
              {
                isAuth &&
                <section>
                  <Comment sendNewComment={this.onSendNewComment} />
                </section>
              }
              <section>
                <Comments comments={comments} />
              </section>
              {
                <Dialog
                  show={showDialog}
                  msgErro={msgErro}
                  handleClose={this.handleClose} />
              }
            </div>
        }
      </Container>
    )
  }

}

export default App;