import React from 'react';
type MyState = {
    count: React.Component;
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