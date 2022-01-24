import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


function Profile({ signOut, user }) {
  
  if(!user) return null

  return (
    <>
     
      <h1 className="text-3xl font-semibold tracking-wide mt-6">Profile</h1>
      <h3 className="font-medium text-gray-500 my-2">Username: {user.username}</h3>
      <p className="text-sm text-gray-500 mb-6">Email: {user.attributes.email}</p>

      <button className=" bg-blue-500 border-2" onClick={signOut}>Sign out</button>
    </>
  )
}

export default withAuthenticator(Profile)