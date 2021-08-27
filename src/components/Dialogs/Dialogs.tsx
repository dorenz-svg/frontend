import React from 'react';
import { getDialogs } from '../../DialogsData';
import {DataDialogs} from '../../DialogsData';
interface MyState {
    dialogs:DataDialogs[]
  };
class Dialogs extends React.Component<{},MyState> {
    async componentDidMount(){
        const temp= await getDialogs();
        this.setState(() => ({ dialogs: temp }));
        console.log(temp);
    }
    render() {
        return(
        <div className="profile">
            Profile
        </div>
        );
    }
}
export default Dialogs;