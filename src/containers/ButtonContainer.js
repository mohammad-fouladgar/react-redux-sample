import { fetchUsers } from "../actions/userActions"
import { connect } from 'react-redux'
import ButtonComponent from '../components/ButtonComponent'


const mapStateToProps = (state, ownProps) => {
    return {
        users: state.userReducer.users.data ? state.userReducer.users.data : [],
        isFetching: state.userReducer.fetching,
        default: ownProps.default,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers())
        }
    }
}


const ButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonComponent)

export default ButtonContainer;