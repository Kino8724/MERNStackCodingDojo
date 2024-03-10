const ShowUsers = (props) => {
  const { users } = props;
  console.log(users)
  return (
    <div>
      <h2>Users</h2>
      {
        users.map((user, index) => {
          return (
            <h3 key={index}>{user.firstName} {user.lastName} ({user.email})</h3>
          );

        }
        )
      }
    </div>
  );
}
export default ShowUsers
