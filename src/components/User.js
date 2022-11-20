import React from "react";




function User({ name, surname, isLoggedIn, age, friends }) {
    return (
        <>
            {
                isLoggedIn ? `${name} ${surname} (${age})` : `Giris yapmadiniz...`
            }
            {
                friends.map((friend) => {
                    return <div key={friend.id}>
                        {friend.id} - {friend.name}
                    </div>
                })
            }
        </>
    );

}

export default User;