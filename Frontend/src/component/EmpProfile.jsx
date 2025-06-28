import style from "../styling/EmpProfile.module.css";
const EmpProfile = () => {
    return (
        <>
            <div className={style.mainContainer}>
                <form action="">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" />
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" />
                    <label htmlFor="">Verify Password</label>
                    <input type="password" name="" id="" />
                    <button>save</button>
                </form>
            </div>
        </>
    );
};
export default EmpProfile;