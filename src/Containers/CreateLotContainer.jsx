import CreateLot from "../Components/CreateLot/CreateLot";
import {connect} from 'react-redux';
import {createLot, savePhoto} from '../Redux/createLotReducer'

const mapStateToProps = (state) => {
    return {

    }
}

const CreateLotContainer = connect(mapStateToProps, {createLot, savePhoto})(CreateLot);

export default CreateLotContainer