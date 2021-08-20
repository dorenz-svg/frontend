import React from 'react';
interface MyState  {
  };
class Profile extends React.Component<{},MyState> {
    render() {
        return(
        <div className="profile">
            Profile
        </div>
        );
    }
}
export default Profile;